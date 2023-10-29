import type { MetaFunction } from "@remix-run/node";
import Header from '~/components/common/header'
import Hero from '~/components/home/hero'
import MyStack from '~/components/home/my-stack'
import Projects from '~/components/home/projects'
import Contact from '~/components/home/contact'
import Footer from '~/components/common/footer'


export const meta: MetaFunction = () => {
  return [
    { title: "Dominic Faulring" },
    { name: "description", content: "Seattle-based full-stack developer passionate about creating impactful web solutions." },
  ];
};

export default function Index() {
  return (
    <main>
      <Header/>
      <Hero/>
      <MyStack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
