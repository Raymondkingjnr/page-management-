import ChooseUs from "../components/choose-us";
import Hero from "../components/hero";
import Managmentsection from "../components/managment";
import Product from "../components/product";

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <ChooseUs />
      <Managmentsection />
    </main>
  );
}
