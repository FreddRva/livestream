import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // <- Asegúrate que el alias '@/' esté bien configurado o usa ruta relativa

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
