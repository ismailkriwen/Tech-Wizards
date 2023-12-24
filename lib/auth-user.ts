import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";

export const getAuthSession = async () => await getServerSession(authOptions);
