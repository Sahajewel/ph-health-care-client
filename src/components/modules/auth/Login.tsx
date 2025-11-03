"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PasswordInput from "./PasswordInput";
import loginUser from "@/utility/login";
import { useRouter } from "next/navigation";
import checkAuthStatus from "@/utility/auth";
import { useUser } from "@/providers/UserProvider";
interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form Data:", data);
    try {
      const res = await loginUser(data.email, data.password);
      if (res.success) {
        const authStatus = await checkAuthStatus();
        setUser(authStatus.user);
        if (authStatus.isAuthenticated && authStatus.user) {
          const { role } = authStatus.user;

          switch (role) {
            case "ADMIN":
              router.push("/dashboard/admin");
              // router.push("/dashboard");
              break;
            case "DOCTOR":
              router.push("/dashboard/doctor");
              break;
            case "PATIENT":
              router.push("/dashboard/patient");
              break;
            default:
              router.push("/");
              break;
          }
        }
      }
      console.log(res);
    } catch (err) {
      console.log("Error occured", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm mx-auto space-y-4 p-6 rounded-2xl shadow-md bg-white"
    >
      <h2 className="text-xl font-semibold text-center mb-2">Login</h2>

      {/* Email Field */}
      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <PasswordInput register={register} name="password" />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">Password is required</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
};

export default Login;
