import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Project from '@/components/Project';


export default function Home() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}
