export default function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <span className='flex items-center h-20 px-2 transition duration-300 ease-in-out cursor-pointer rounded-b-md hover:bg-gradient-to-b from-primary-100 from-30% hover:text-secondary-200'>
      <p>{children}</p>
    </span>
  );
}
