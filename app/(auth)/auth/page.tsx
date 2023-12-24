import AuthComponent from "@/app/(auth)/auth";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const AuthPage = async () => {
  const session = await getAuthSession();
  if (session && session.user) redirect("/dashboard");

  return <AuthComponent />;
};

export default AuthPage;
