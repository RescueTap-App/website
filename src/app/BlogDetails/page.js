import BlogDetail from "@/components/BlogDetail";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
    <Nav />
       <BlogDetail />
       <Footer />
      </div>
     
  );
}
