import NotificationIcon from '../../assets/images/icons/notification.svg';

export default function Notification(){
    return(
        <div>
            <img
                src={NotificationIcon}
                alt="Notification Icon"
                className='brightness-0 invert opacity-70 w-[28px]'
            />
        </div>
    )
}