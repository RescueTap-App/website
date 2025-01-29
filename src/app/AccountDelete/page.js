
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import AccountDelete from "@/components/AccountDelete"

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
        <Nav />
        <AccountDelete />
        <Footer />
    </div> 
  );
}
