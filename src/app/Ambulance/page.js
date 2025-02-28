import dynamic from "next/dynamic";
const Ambulance = dynamic(() => import("@/components/Ambulance"), { ssr: false });

import Footer from "@/components/Footer";
import Index from "@/components/Index";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
    <Nav />
       <Ambulance />
       <Footer />
      </div>
     
  );
}
