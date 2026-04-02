import './App.css';
import Header from './components/header/Header';
import Heroslider from './components/HeroSlider';
import HotNews from './components/HotNews';
import Menu from './components/Menu';
import RecommendedForYou from './components/RecommendedForYou';
import TrendingMovies from './components/TrendingMovies';
import TrendingSeries from './components/TrendingSeries';

function App() {
  return (
    <div className="bg-[#0f0f0f] flex justify-center">

      <aside className="w-[260px] flex-shrink-0 h-screen">
        <Menu />
      </aside>

      <main className="w-full max-w-[1200px] flex overflow-hidden">
        <div className='flex-1 flex flex-col'>
            <Header />

            <div className='flex flex-1 overflow-hidden py-1'>
              <section className="flex-1 px-5 overflow-y-auto">
                <Heroslider />
                <RecommendedForYou />

              </section>

              <aside className="w-[290px] flex-shrink-0 px-5">
                <HotNews />
              </aside>
            </div>
            <div>
              <TrendingMovies />
              <TrendingSeries />
            </div>
        </div>
        
      </main>

    </div>
  )
}

export default App
