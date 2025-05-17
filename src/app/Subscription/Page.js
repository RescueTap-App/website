import App from "@/components/Subscription";
import Footer from "@/components/Footer";
import Index from "@/components/Index";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
    <Nav />
       <App />
       <Footer />
      </div>
     
  );
}
