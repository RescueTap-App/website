"use client";
import dynamic from "next/dynamic";
const ALS = dynamic(() => import("@/components/ALS"), { ssr: false });

import Footer from "@/components/Footer";
import Index from "@/components/Index";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
    <Nav />
       <ALS />
       <Footer />
      </div>
     
  );
}
