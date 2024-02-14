import Nav from './components/Nav'
import Hero from './components/Hero'
import Cards from './components/Cards'

export default function Home() {
  return (
    <main className="p-10 pl-[16px] pr-[16px]">
      <Nav/>
      <Hero />
      <Cards />
    </main>
  );
}
