import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Subscription from "@/components/Subscription";

export default function Home (){
    return (
        <div className="boxed_wrapper ltr">
            <Nav />
            <Subscription />
            <Footer />
        </div>
         
      );
}