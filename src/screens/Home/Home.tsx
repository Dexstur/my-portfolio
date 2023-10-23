import Layout from "../../components/Layout";
import Hero from "./Hero";
import Skills from "./Skills";
import Contact from "./Contact";

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default HomePage;
