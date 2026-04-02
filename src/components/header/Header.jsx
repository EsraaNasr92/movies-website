import Menu from './Menu.jsx';
import Notification from './Notifications.jsx';
import ProfileMenu from './ProfileMenu.jsx';
import Search from './Search.jsx';

export default function Header(){
    return(
        <header className='flex items-center justify-between my-10 px-5'>
            <Menu />
            <div className='flex items-center gap-3'>
                <Search />
                <Notification />
                <ProfileMenu />
            </div>
        </header>
    )
}