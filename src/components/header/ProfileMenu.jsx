import ProfileImage from '../../assets/images/profile.png';

export default function ProfileMenu(){
    return(
        <div>
            <img
                src={ProfileImage}
                alt="Profile Image"
                className='p-0.5 border-1 rounded-full border-[var(--primary-color)]'
            />
        </div>
    )
}