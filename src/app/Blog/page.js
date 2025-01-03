import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
    <Nav />
       <Blog />
       <Footer />
      </div>
     
  );
}
