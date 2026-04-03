import Banner1 from '../assets/images/banner-1.png';
import Banner2 from '../assets/images/banner-2.png';
import Banner3 from '../assets/images/banner-3.png';
import WatchIcon from '../assets/images/icons/watchIcon.svg';

export default function Banners(){
    const filmGenres = ["Historical", "Drama", "Thriller"];

    return(
        <section className='flex gap-4'>
            <div className='flex flex-col gap-6'>
                <div className="relative text-white">
                    <div>
                        <img
                            src={Banner1}
                            alt="First Banner"
                            className='relative'
                        />
                        <div className="absolute bottom-20 px-5 w-[450px]">
                            <p>Uncovering Secrets, Shifting Powers</p>
                            <h1 className='text-[50px] text-primary font-bold'>Shogun</h1>
                            <p>When a mysterious European ship sinks near a nearby fishing village,
                                Lord Yoshi Toranaga uncovers secrets that could tip the balance of power and devastate
                                his enemies. He must act quickly to protect his realm from the looming threat.</p>
                        </div>
                        <button
                            className='absolute flex cursor-pointer gap-2 bottom-6 right-10 bg-[var(--color-primary)] px-[12px] py-[8px] rounded-[31px]'
                        >
                            <img
                                src={WatchIcon}
                                alt="Watch Icon"
                                className='w-[19px] brightness-0'
                            />
                            <span className='text-black'>Watch now</span>
                        </button>
                    </div>
                </div>
                <div className="relative text-white">
                    <div>
                        <img
                            src={Banner2}
                            alt="First Banner"
                            className='relative'
                        />
                        <div className="absolute bottom-20 px-5 w-[450px]">
                            <span>
                                {filmGenres.join(", ")}
                            </span>
                            <h1 className='text-[50px] text-white font-bold'>
                                The <br />
                                <span>Sympathizer</span>
                            </h1>
                        </div>
                        <button
                            className='absolute flex cursor-pointer gap-2 top-6 left-10 bg-[var(--color-primary)] px-[12px] py-[8px] rounded-[31px]'
                        >
                            <img
                                src={WatchIcon}
                                alt="Watch Icon"
                                className='w-[19px] brightness-0'
                            />
                            <span className='text-black'>Watch now</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img
                    src={Banner3}
                    alt="Banner"
                />
                <div className="absolute bottom-20 px-5 w-[450px]">
                    <p className='text-primary uppercase'>RISK EVERYTHING</p>
                    <h1 className='text-[50px] text-white font-bold'>A Small Light</h1>
                </div>
                <button
                    className='absolute flex cursor-pointer gap-2 top-6 left-10 bg-[var(--color-primary)] px-[12px] py-[8px] rounded-[31px]'
                >
                <img
                    src={WatchIcon}
                    alt="Watch Icon"
                    className='w-[19px] brightness-0'
                />
                <span className='text-black'>Watch now</span>
                </button>
            </div>
        </section>
    )
}