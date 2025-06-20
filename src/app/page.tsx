import Navbar from '@/app/components/utilities/navbar';
import Hero from '@/app/components/hero';
import About from '@/app/components/about';
import Team from '@/app/components/team';
import Community from '@/app/components/com';
import Contact from '@/app/components/contact';
import Footer from '@/app/components/utilities/footer';
import Blog from '@/app/components/blog';
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Team/>
      <Community/>
      <Contact/>
      <Blog/>
      <Footer/>
    </>
  );
}