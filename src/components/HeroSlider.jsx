import HeroImage from '../assets/images/hero-image.png';
import IMDB from '../assets/images/icons/IMDB.svg';
import LeftArrow from '../assets/images/icons/Left.svg';
import RightArrow from '../assets/images/icons/Right.svg';

export default function Heroslider(){
    return(
        <section id="hero-section">
            <div className="slider relative">
                <div className="slider-1 relative">
                    <img src={HeroImage} alt="Hero Image"/>
                    <div className="data absolute left-5 bottom-5 bg-black/60 rounded-[20px] text-white w-100 p-5">
                        <h1 className="title font-secondary">Game of Thrones</h1>
                        <div className="meta-data flex items-center gap-[10px] my-4">
                            <img src={IMDB} alt="IMDB rate" className='w-8'/> <b>9.2</b>
                            <div className="genere ml-3 flex gap-[5px] text-[15px]">
                                Action <span className="text-[var(--color-primary)]">|</span>
                                Adventure <span className="text-[var(--color-primary)]">|</span>
                                Drama</div>
                        </div>
                        <div className="text font-main text-[13px] mb-10">
                            <p>It's the story of the intricate and bloody battles of
                            several noble families in the fictional land of Westeros.
                            These families, including the Starks, the Lannisters, and the Targaryens,
                            fight for control of the Iron Throne,
                            the symbol of power in the Seven Kingdoms.</p>
                        </div>
                        <div className="flex gap-[20px]">
                            <button className="px-5 py-2 bg-[var(--color-primary)] text-black rounded-lg uppercase w-[143px]">watch</button>
                            <button className="px-5 py-2 bg-black/60 text-primary rounded-lg w-[143px] border border-[var(--color-primary)]">Trailer</button>
                        </div>
                    </div>
                    <div className="absolute bottom-5 left-170 flex gap-15">
                        <button className='w-7'><img src={LeftArrow} alt="left arrow" /></button>
                        <button className='w-7'><img src={RightArrow} alt="right arrow" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}