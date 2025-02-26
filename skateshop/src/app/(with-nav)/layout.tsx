import Footer from "@/components/layout/footer";
import { NavBar } from "@/components/layout/navbar/navbar";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
      <NavBar />
      <div className="container px-24 mb-24">
        {children}
      </div>
      <Footer />
    </>
  );
}
