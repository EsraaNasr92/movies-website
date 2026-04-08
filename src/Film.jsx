import { useState } from 'react';
import Stars from './assets/images/icons/artist.svg';
import Director from './assets/images/icons/director.svg';
import Flag from './assets/images/icons/flag.svg';
import Lang from './assets/images/icons/lang.svg';
import Network from './assets/images/icons/network.svg';
import ProfileImage from './assets/images/profile.png';
import Header from './components/header/Header';
import Heroslider from './components/HeroSlider';
import Menu from './components/Menu';

export default function Films(){
  const tabs = ["Information", "Episodes", "More Like This", "Reviews"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tabActivation = (item) => {
    setActiveTab(item);
    console.log("You are in ", item);
  }

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
                  <div>
                    <ul className='flex gap-[64px] text-white mt-15 border-b-1 border-gray-700'>
                      {tabs.map((item, i) => (
                        <li
                          key={i}
                          className={`cursor-pointer pb-2 ${
                            activeTab === item
                            ? "border-b-3 border-yellow-400 text-yellow-400"
                            : "text-gray-400"
                          }`}
                          onClick={() => tabActivation(item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul> {/* End tabs header section */}
                </div>
                <div className='text-white mt-5 p-4'>
                  {activeTab === "Information" && (
                    <div>
                      <div className='flex gap-10 mt-5'>
                        <div className='flex-1 space-y-3'>
                          <h1>Information</h1>
                          <div className='flex items-center gap-3 mt-5 p-7 border-t border-b border-gray-700 text-secondary ml-5'>
                            <img
                              src={Flag}
                              alt="icon"
                              className='w-[24px]'
                            /> Country
                            <p className='text-white ml-auto'>United state</p>
                            
                          </div>
                          <div className='flex items-center gap-3 p-7 border-b border-gray-700 text-secondary ml-5'>
                            <img
                              src={Flag}
                              alt="icon"
                              className='w-[24px]'
                            /> Release Date
                            <p className='text-white ml-auto'>August 21, 2022</p>
                          </div>
                          <div className='flex items-center gap-3 p-7 border-b border-gray-700 text-secondary ml-5'>
                            <img
                              src={Lang}
                              alt="icon"
                              className='w-[24px]'
                            /> Language
                            <p className='text-white ml-auto'>English</p>
                          </div>
                          <div className='flex items-center gap-3 p-7 border-b border-gray-700 text-secondary ml-5'>
                            <img
                              src={Network}
                              alt="icon"
                              className='w-[24px]'
                            /> Network
                            <p className='text-white ml-auto'>HBO</p>
                          </div>
                        </div>
                        <div className='flex-1 space-y-3 mt-10'>
                          <div className='flex items-center gap-3 p-7 border-t border-b border-gray-700 text-secondary ml-5'>
                            <img
                              src={Director}
                              alt="icon"
                              className='w-[24px]'
                            /> Director
                            <p className='text-white ml-auto'>Ryan Condal</p>
                          </div>
                          <div className='flex items-center gap-3 p-7 border-b border-gray-700 text-secondary ml-5'>
                            <img
                              src={Flag}
                              alt="icon"
                              className='w-[24px]'
                            /> Runtime
                            <p className='text-white ml-auto'>50m</p>
                          </div>
                          <div className='flex items-center gap-3 p-7 border-b border-gray-700 text-secondary ml-5'>
                            <img
                              src={Flag}
                              alt="icon"
                              className='w-[24px]'
                            /> Closed Caption
                            <p className='text-white ml-auto'>English</p>
                          </div>
                        </div>
                      </div> {/* end film/series info section */}
                      <div className='mt-10'>
                          <div className='flex items-center gap-2 pb-6'>
                            <img
                              src={Stars}
                              alt="stars icon"
                              className='w-[24px]'
                            /> Stars
                          </div>
                          <div className='flex gap-10'>
                            <div className='flex flex-col items-center text-center'>
                              <img
                                  src={ProfileImage}
                                  alt="Profile Image"
                                  className='p-0.5 border-1 rounded-full
                                  border-[var(--color-primary)] flex'
                              /> Olivia Cooke
                            </div>
                            <div className='flex flex-col items-center text-center'>
                              <img
                                  src={ProfileImage}
                                  alt="Profile Image"
                                  className='p-0.5 border-1 rounded-full
                                  border-[var(--color-primary)] flex'
                              /> Olivia Cooke
                            </div>
                            <div className='flex flex-col items-center text-center'>
                              <img
                                  src={ProfileImage}
                                  alt="Profile Image"
                                  className='p-0.5 border-1 rounded-full
                                  border-[var(--color-primary)] flex'
                              /> Olivia Cooke
                            </div>
                            <div className='flex flex-col items-center text-center'>
                              <img
                                  src={ProfileImage}
                                  alt="Profile Image"
                                  className='p-0.5 border-1 rounded-full
                                  border-[var(--color-primary)] flex'
                              /> Olivia Cooke
                            </div>
                          </div>
                        </div> {/* end stars section */}
                      </div>
                  )}
                  {activeTab === "Episodes" &&(
                    <p>Episodes are here</p>
                  )}
                  {activeTab === "More Like This" && (
                    <p>More Like This</p>
                  )}
                  {activeTab === "Reviews" && (
                    <p>Reviews</p>
                  )}
                </div>
              </section>
            </div>
        </div>
        
      </main>

    </div>
  )
}


