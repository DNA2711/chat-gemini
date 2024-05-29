"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GUI } from "dat.gui";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import dynamic from "next/dynamic";

interface ShaderUniforms {
  u_time: { type: "f"; value: number };
  u_frequency: { type: "f"; value: number };
  u_red: { type: "f"; value: number };
  u_green: { type: "f"; value: number };
  u_blue: { type: "f"; value: number };
}
const CircleAnimation = dynamic(
  () => import("./Circle"), // Đường dẫn đến component Circle
  { ssr: false } // Tắt SSR cho component này
);

const Circle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [params, setParams] = useState({
    red: 1.0,
    green: 1.0,
    blue: 1.0,
    threshold: 0.5,
    strength: 0.5,
    radius: 0.8,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, -2, 14);
    camera.lookAt(0, 0, 0);

    const uniforms: { [uniform: string]: THREE.IUniform } = {
      u_time: { value: 0.0 },
      u_frequency: { value: 0.0 },
      u_red: { value: params.red },
      u_green: { value: params.green },
      u_blue: { value: params.blue },
    };

    const vertexShader = `
      uniform float u_time;
      uniform float u_frequency;

      vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
    
      vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }
    
      vec4 permute(vec4 x) {
        return mod289(((x*34.0)+10.0)*x);
      }
    
      vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
      }
    
      vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
      }
    
      // Classic Perlin noise, periodic variant
      float pnoise(vec3 P, vec3 rep) {
        // ... (implementation of pnoise function)
      }
    
      void main() {
        float noise = 3.0 * pnoise(position + u_time, vec3(10.0));
        float displacement = (u_frequency / 30.) * (noise / 10.);
        vec3 newPosition = position + normal * displacement;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float u_red;
      uniform float u_green;
      uniform float u_blue;
      
      void main() {
        gl_FragColor = vec4(vec3(u_red, u_green, u_blue), 1. );
      }
    `;

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const geo = new THREE.IcosahedronGeometry(4, 30);
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    mesh.material.wireframe = true;

    // Âm thanh
    const listener = new THREE.AudioListener();
    camera.add(listener);
    const sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load("/assets/Beats.mp3", function (buffer) {
      sound.setBuffer(buffer);
      window.addEventListener("click", function () {
        sound.play();
      });
    });

    const analyser = new THREE.AudioAnalyser(sound, 32);

    // Bloom effect
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = params.threshold;
    bloomPass.strength = params.strength;
    bloomPass.radius = params.radius;
    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);
    const outputPass = new OutputPass();
    bloomComposer.addPass(outputPass);

    // GUI
    const gui = new GUI();
    const colorsFolder = gui.addFolder("Colors");
    colorsFolder.add(params, "red", 0, 1).onChange(function (value) {
      uniforms.u_red.value = Number(value);
    });
    colorsFolder.add(params, "green", 0, 1).onChange(function (value) {
      uniforms.u_green.value = Number(value);
    });
    colorsFolder.add(params, "blue", 0, 1).onChange(function (value) {
      uniforms.u_blue.value = Number(value);
    });
    const bloomFolder = gui.addFolder("Bloom");
    bloomFolder.add(params, "threshold", 0, 1).onChange(function (value) {
      bloomPass.threshold = Number(value);
    });
    bloomFolder.add(params, "strength", 0, 3).onChange(function (value) {
      bloomPass.strength = Number(value);
    });
    bloomFolder.add(params, "radius", 0, 1).onChange(function (value) {
      bloomPass.radius = Number(value);
    });

    // Mouse move
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener("mousemove", function (e) {
      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) / 100;
      mouseY = (e.clientY - windowHalfY) / 100;
    });

    const clock = new THREE.Clock();
    function animate() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.5;
      camera.lookAt(scene.position);
      uniforms.u_time.value = clock.getElapsedTime();
      uniforms.u_frequency.value = analyser.getAverageFrequency();
      bloomComposer.render();
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      bloomComposer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      gui.destroy();
      renderer.dispose();
      // ... (dọn dẹp các đối tượng Three.js khác nếu cần)
    };
  }, [params]); // Thêm params vào dependency array để cập nhật khi thay đổi

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Circle;