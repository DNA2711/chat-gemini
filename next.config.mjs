/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs)$/,
            loader: 'raw-loader',
        });
        return config;
    },
    transpilePackages: ['three', 'dat.gui'],
};

export default nextConfig;
