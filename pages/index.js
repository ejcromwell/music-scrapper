import Hero from '../Components/HeroSection/Hero.jsx';
import WebResults from '../Components/WebResults/WebResults.jsx';
import SpotifySection from '../Components/SpotifySection/SpotifySection.jsx';


export default function Home() {

  return (
    <div>
      <main className="">
        <div className="bg-gray-800">
          <SpotifySection />
        </div>
        <div className="bg-gray-800">
          <Hero />
        </div>
        <div className="bg-gray-800">
          <WebResults />
        </div>
      </main>
      <footer >
      </footer>
    </div>
  )
}
