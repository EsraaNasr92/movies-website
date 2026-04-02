import './App.css';
import Heroslider from './components/HeroSlider';
import HotNews from './components/HotNews';
import Menu from './components/Menu';
import RecommendedForYou from './components/RecommendedForYou';
import Header from './components/header/Header';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex justify-center">
      
      <main className="w-full max-w-[1440px] flex h-screen overflow-hidden">
        
        <aside className="w-[260px] flex-shrink-0 ">
          <Menu />
        </aside>

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
        </div>

      </main>
    </div>
  )
}

export default App
