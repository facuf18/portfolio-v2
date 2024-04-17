type NavLinkProps = {
  children: React.ReactNode;
  to: string;
};

export default function NavLink({ children, to }: NavLinkProps) {
  return (
    <a href={`#${to}`} className='decoration-none'>
      <span className='flex items-center h-20 px-2 transition duration-300 ease-in-out cursor-pointer rounded-b-md hover:bg-gradient-to-b from-primary-100 from-30% hover:text-primary-300 dark:hover:text-primary-200 dark:from-primary-300'>
        <p>{children}</p>
      </span>
    </a>
  );
}
