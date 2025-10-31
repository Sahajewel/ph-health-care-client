/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  register: any;
  name: string;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  register,
  name,
  placeholder = "Enter your password",
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register(name, { required: true })}
        className="pr-10"
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
        aria-label="Toggle password visibility"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
};

export default PasswordInput;
