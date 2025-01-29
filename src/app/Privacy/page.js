import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Privacy from "@/components/PrivacyPage";



export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
        <Nav />
        <Privacy />
        <Footer />
    </div>
     
  );
}
