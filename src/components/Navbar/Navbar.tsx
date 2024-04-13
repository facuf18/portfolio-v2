import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav className='flex flex-row items-center justify-between h-16 px-20 font-semibold font-body text-primary-500'>
      <p>Facundo Faccioli</p>
      <div className='flex flex-row items-center'>
        <NavLink>About me</NavLink>
        <NavLink>Experience</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </div>
    </nav>
  );
}
