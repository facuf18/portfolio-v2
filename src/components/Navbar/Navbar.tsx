import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav
      id='navbar'
      className='flex-row items-center justify-between hidden h-20 font-medium sm:flex sm:px-20 font-body text-primary-500 bg-primary-50'
    >
      <p className='mx-auto leading-tight transition duration-300 ease-in-out cursor-pointer sm:mx-0 hover:text-secondary-200'>
        Facundo Faccioli
      </p>
      <div className='flex flex-row items-center'>
        <NavLink to='about'>About me</NavLink>
        <NavLink to='experience'>Experience</NavLink>
        <NavLink to='skills'>Skills</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </div>
    </nav>
  );
}
