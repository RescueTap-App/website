import Footer from "@/components/Footer";
import Index from "@/components/Index";
import Nav from "@/components/Nav";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
    <Nav />
       <Testimonials />
       <Footer />
      </div>
     
  );
}
