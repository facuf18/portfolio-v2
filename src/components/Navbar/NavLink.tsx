type NavLinkProps = {
  children: React.ReactNode;
  to: string;
};

export default function NavLink({ children, to }: NavLinkProps) {
  return (
    <a href={`#${to}`} className='decoration-none'>
      <span className='flex items-center h-20 px-2 transition duration-300 ease-in-out cursor-pointer hover:text-secondary-200 dark:hover:text-primary-300'>
        <p>{children}</p>
      </span>
    </a>
  );
}
