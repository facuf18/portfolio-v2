import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav
      id='navbar'
      className='flex flex-row items-center justify-between h-20 px-20 font-semibold font-body text-primary-500 bg-primary-50'
    >
      <p className='leading-tight transition duration-300 ease-in-out cursor-pointer hover:text-secondary-200'>
        Facundo Faccioli
      </p>
      <div className='flex flex-row items-center'>
        <NavLink>About me</NavLink>
        <NavLink>Experience</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </div>
    </nav>
  );
}
