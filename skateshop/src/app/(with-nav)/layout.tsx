import Footer from "@/components/layout/footer";
import { NavBar } from "@/components/layout/navbar/navbar";
import { Container } from "lucide-react";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
