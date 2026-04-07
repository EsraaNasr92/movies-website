import Actor from '../assets/images/actor.png';
import Fog from '../assets/images/fog.png';
import PlayIcon from '../assets/images/icons/playIcon.svg';
import SeriesImage from '../assets/images/seriesbanner.png';

export default function SeriesBanner(){
    return(
        <section className='relative mt-60 mb-20'>
            <img
                src={SeriesImage}
                alt="Series Banner"
                className='relative z-0 w-full'
            />
            <div className='absolute inset-6 border-2 border-gray-500/50 pointer-events-none z-0 border-mask' />
                <div>
                    <img
                        src={Actor}
                        alt="Actor image"
                        className='absolute md:bottom-8 md:left-100 w-[297px] z-15'
                    />
                    <img
                        src={Fog}
                        alt="Fog image"
                        className='absolute md:bottom-0 md:left-50 z-15'
                    />
                    <h4
                        className='uppercase absolute md:bottom-[60px] md:right-88 text-white font-bold z-20'>
                            BIRMINGHAM 1919
                        </h4>
                    <h1
                        className='absolute md:bottom-[-5px] md:left-80 text-white text-[64px] font-title z-20'
                    >
                        Peaky Blinders
                    </h1>
                </div>
                <div>
                    <button
                        className='absolute flex items-center cursor-pointer gap-2 md:top-9 md:right-25
                        px-[12px] py-[8px] rounded-[31px]'
                    >
                        <img
                            src={PlayIcon}
                            alt="Play Icon"
                            className='w-[40px] fill-[#E7BC0F]'
                        />
                        <span className='text-black uppercase text-primary text-[20px]'>Watch Trailer</span>
                    </button>
                </div>
                <div>
                    <p
                        className='uppercase absolute left-12 top-14 text-secondary w-[235px] font-bold'
                    >
                        Peaky Blinders is a British crime drama about the Shelby family in post-World War I Birmingham, as they build their power through criminal activities. Led by the cunning Tommy Shelby, the show mixes intense drama with historical grit.
                    </p>
                </div>
        </section>
    )
}