import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Installation from "@/components/Installation";
import WhyUsComponent from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Installation />
      <WhyUsComponent />
      <Footer />
    </main>
  );
}
