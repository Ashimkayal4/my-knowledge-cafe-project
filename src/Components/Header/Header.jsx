import profile from '../../assets/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between p-4 border-b-2 items-center w-[1200px] mx-auto'>
            <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;