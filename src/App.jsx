import './App.css';
import Heroslider from './components/HeroSlider';
import HotNews from './components/HotNews';
import Menu from './components/Menu';
import RecommendedForYou from './components/RecommendedForYou';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex justify-center">
      
      <main className="w-full max-w-[1440px] flex h-screen overflow-hidden">
        
        <aside className="w-[260px] flex-shrink-0 ">
          <Menu />
        </aside>

        <section className="flex-1 px-5 py-8 overflow-y-auto">
          <Heroslider />
          <RecommendedForYou />
        </section>

        <aside className="w-[380px] flex-shrink-0 px-6 py-8">
          <HotNews />
        </aside>

      </main>
    </div>
  )
}

export default App
