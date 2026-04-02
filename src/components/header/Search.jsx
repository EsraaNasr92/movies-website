import LeftIcon from '../../assets/images/icons/search-1.svg';
import RightIcon from '../../assets/images/icons/search.svg';

export default function Search() {
    return (
        <div className="relative w-full">
        
        <img
            src={RightIcon}
            alt="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 brightness-0 invert"
        />

        <input
        type="text"
        placeholder="Search the series, movies ..."
        className="w-full pl-10 pr-10 py-3 bg-black rounded-xl text-sm shadow-sm text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        />

        <img
            src={LeftIcon}
            alt="filter"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer brightness-0 invert opacity-70"
        />

        </div>
    );
}