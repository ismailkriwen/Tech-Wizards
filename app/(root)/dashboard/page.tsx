import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth-user";

const Dashboard = async () => {
  const session = await getAuthSession();
  if (!session || !session.user) redirect("/auth");

  return <>Dashboard</>;
};

export default Dashboard;
