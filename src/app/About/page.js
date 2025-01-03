import About from "@/components/About";
import Footer from "@/components/Footer";
import Index from "@/components/Index";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
    <Nav />
       <About />
       <Footer />
      </div>
     
  );
}
