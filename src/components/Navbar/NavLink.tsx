export default function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <span className='flex items-center h-16 px-2 transition duration-500 ease-in-out cursor-pointer rounded-b-md hover:bg-gradient-to-b from-primary-100 from-30% hover:text-primary-300'>
      <p>{children}</p>
    </span>
  );
}
