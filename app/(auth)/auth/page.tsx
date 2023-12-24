import AuthComponent from "@/app/(auth)/auth";
import { getAuthSession } from "@/lib/auth-user";
import { redirect } from "next/navigation";

const AuthPage = async () => {
  const session = await getAuthSession();
  if (session && session.user) redirect("/dashboard");

  return <AuthComponent />;
};

export default AuthPage;
