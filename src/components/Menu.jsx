import Logo from '../assets/Logo.svg';
import Artist from '../assets/images/icons/artist.svg';
import Blog from '../assets/images/icons/blog.svg';
import ContactUs from '../assets/images/icons/contact.svg';
import Discover from '../assets/images/icons/discover.svg';
import HelpCenter from '../assets/images/icons/help.svg';
import Plan from '../assets/images/icons/plan.svg';
import Settings from '../assets/images/icons/settings.svg';
import Watchlist from '../assets/images/icons/watchlist.svg';

export default function Menu(){
    const mainMenu = [
        {
            icon: Discover,
            link: "Discover"
        },
        {
            icon: Watchlist,
            link: "Watchlist"
        },
        {
            icon: Blog,
            link: "Blog"
        },
        {
            icon: Artist,
            link: "Artist"
        },
    ];

    const helpMenu = [
        {
            icon: ContactUs,
            link: "Contact Us"
        },
        {
            icon: HelpCenter,
            link: "Help Center"
        },
        {
            icon: Settings,
            link: "Settings"
        },
    ];

    return(
        <section className='relative p-6 border-fade'>
            <img src={Logo} alt="logo" className='p-5  pb-15'/>
            
            <span className='text-secondary'>Menu</span>

            <ul className='mt-2'>
                {mainMenu.map((menu) => (
                    <li key={menu.link} className="flex items-center gap-3 py-4 cursor-pointer">
                        <img
                            src={menu.icon}
                            alt={menu.link}
                            className='w-[24px]'
                        />
                        <h4 className='text-secondary font-primary text-[18px]'>{menu.link}</h4>
                    </li>
                ))}
            </ul>
            
            <div className='border-1 border-secondary my-[24px]'></div>

            <ul>
                {helpMenu.map((helpItem) => (
                    <li key={helpItem.link} className="flex items-center gap-3 py-4 cursor-pointer">
                        <img
                            src={helpItem.icon}
                            alt={helpItem.link}
                            className='w-[24px]'
                        />
                        <h4 className='text-secondary font-primary text-[18px]'>{helpItem.link}</h4>
                    </li>
                ))}
            </ul>

            <div className='check-plans text-[14px] mt-[75px] p-4 text-white text-center plan-border flex flex-col items-center'>
                <p>Click the button below to see the plans</p>
                <button className='flex items-center gap-2 mt-8 border p-3 rounded-xl border-[var(--color-primary)] block cursor-pointer'>
                    <img src={Plan} alt="check plans icons" className='w-[24px]'/> See Plans
                </button>
            </div>
        </section>
    );
}