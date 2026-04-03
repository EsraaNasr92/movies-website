import { useState } from 'react';
import Film1 from '../assets/images/films/film1.jpg';
import Film2 from '../assets/images/films/film2.jpg';
import Film3 from '../assets/images/films/film3.jpg';
import Film4 from '../assets/images/films/film4.jpg';
import LikeIcon from '../assets/images/icons/like.svg';
import RateIcon from '../assets/images/icons/rate.svg';
import ViewArrow from '../assets/images/icons/viewall.svg';

export default function Genres(){
    const tabs = ["Comedy", "Drama", "Historical", "Action", "Lover", "Animation", "Imaginary", "Criminal"];
    const [activeTab, setActiveTab] = useState("");
    const filmCards = [
        {
            id: "1",
            image: Film1,
            title: "Hotel Transylvania",
            genre: ["Animation", "Comedy"],
            rate: "7.0"
        },
        {
            id: "2",
            image: Film2,
            title: "Lucifer",
            genre: ["Crime", "Drama", "Fantasy"],
            rate: "8.1"
        },
        {
            id: "3",
            image: Film3,
            title: "Gangs of London",
            genre: ["Action", "Drama", "Crime"],
            rate: "8.0"
        },
        {
            id: "4",
            image: Film4,
            title: "House of the Dragon",
            genre: ["Action", "Adventure", "Fantasy"],
            rate: "8.4"
        }
    ];

    const selectTab = (tab) => {
        setActiveTab(tab);
    };

    const filteredFilm = activeTab
        ? filmCards.filter(card => card.genre.includes(activeTab))
        : filmCards;

    return(
        <section className="px-5 text-white my-20">
            <div className="flex justify-between items-center">
                <h2 className='font-secondary text-[20px]'>Genres</h2>
                <div className="view">
                    <a href="#" className='flex items-center gap-2 cursor-pointer'>
                        View All
                        <img
                            src={ViewArrow}
                            alt="view all icon"
                            className='w-[24px]'
                        />
                    </a>
                </div>
            </div>
            <div className="flex mt-[30px] gap-6">
                {tabs.map((tab, item) => (
                    <div>
                        <p
                            key={item}
                            className={`cursor-pointer p-2 rounded-md text-secondary ${activeTab === tab ? "bg-primary" : ""}`}
                            onClick={() => selectTab(tab)}
                        >
                            {tab}
                        </p>
                    </div>

                ))}
            </div>
            <div className='cards flex mt-[40px] gap-10 text-center rounded-xl'>
                {filteredFilm.length > 0 ? (
                    filteredFilm.map((card) => (
                        <div
                            key={card.id}
                            className="film-card relative rounded-xl mt-1"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className='rounded-xl w-full h-auto object-cover clip-card'
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-black/40 backdrop-blur-md rounded-lg">
                                <p className='text-white font-bold text-[14px]'>{card.title}</p>
                                <div className="flex justify-center gap-1  text-[13px] text-white">
                                    {card.genre.map((g, i) => (
                                        <p key={i}>{g}{i < card.genre.length - 1 && ', '}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center gap-1 absolute text-white top-3 left-3 p-1.5 rounded-xl text-[12px] bg-[var(--text-color)]'>
                                <img
                                    src={RateIcon}
                                    alt="rate icon"
                                    className='w-[12px]'
                                />
                                {card.rate}/
                                <span className='text-[12px] text-secondary'>10</span>
                            </div>
                            <div className='absolute top-0 right-[-3px] bg-secondary p-1.5 rounded-lg'>
                                <img
                                    src={LikeIcon}
                                    alt="Like icon"
                                    className='w-[12px] text-secondary brightness-0 invert opacity-70'
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">
                        No films/series found for this genre
                    </p>
                )}

            </div>
        </section>
    )
}