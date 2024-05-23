import { Switch } from "@headlessui/react";
import { useState } from "react";
import { useThemeMode } from "@/hooks/useThemeMode";

export default function ToggleMode() {
  const [enabled, setEnabled] = useState(true);
  const { _toogleDarkMode } = useThemeMode();
  const handleToggle = () => {
    setEnabled(!enabled);
    _toogleDarkMode();
  };
  return (
    <Switch
      checked={enabled}
      onChange={handleToggle}
      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
    >
      <span className="size-4 translate-x-1 rounded-full dark:bg-[#616161] bg-[#8ab4f8] transition group-data-[checked]:translate-x-6" />
    </Switch>
  );
}
