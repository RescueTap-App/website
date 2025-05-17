import dynamic from 'next/dynamic';
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const App = dynamic(() => import('@/components/Subscription'), { ssr: false });

export default function Home() {
  return (
    <div className="boxed_wrapper ltr">
      <Nav />
      <App />
      <Footer />
    </div>
  );
}
