import profile from '../../assets/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between p-4 mx-2 border-b-2 items-center'>
            <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;