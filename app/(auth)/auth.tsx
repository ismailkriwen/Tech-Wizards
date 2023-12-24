"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthComponent = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  return (
    <div className="flex flex-col space-y-2">
      <div className="font-bold text-2xl text-center pb-4">Sign In</div>
      <Button
        variant="ghost"
        size="lg"
        radius="sm"
        onClick={() =>
          signIn("google", {
            redirect: true,
            callbackUrl,
          })
        }
        startContent={<FcGoogle />}
      >
        Continue with Google
      </Button>
      <Button
        variant="ghost"
        size="lg"
        radius="sm"
        onClick={() =>
          signIn("github", {
            redirect: true,
            callbackUrl,
          })
        }
        startContent={<FaGithub />}
      >
        Continue with Google
      </Button>
    </div>
  );
};

export default AuthComponent;
