"use client";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
    <Nav />
       <Contact />
       <Footer />
      </div>
     
  );
}
