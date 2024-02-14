import Nav from './components/Nav.tsx'
import Hero from './components/Hero.tsx'
import Cards from './components/Cards.tsx'

export default function Home() {
  return (
    <main className="p-10">
      <Nav/>
      <Hero />
      <Cards />
    </main>
  );
}
