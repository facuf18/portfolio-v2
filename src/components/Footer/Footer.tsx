import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';

export default function Footer() {
  return (
    <section
      id='footer'
      className='grid grid-cols-12 gap-4 font-light sm:gap-0 place-items-center px-5text-sm h-36 sm:h-24 sm:py-6 sm:flex-row sm:px-20 font-body text-primary-500 dark:text-primary-50'
    >
      <div className='order-last col-span-12 sm:self-center sm:order-none sm:col-span-4 sm:place-self-start'>
        <p>Portfolio v2 - Facundo Faccioli, 2024</p>
      </div>
      <div className='col-span-12 sm:col-span-4'>
        <a href='#hero' className='decoration-none'>
          <button className='p-0 transition duration-300 ease-in-out rounded-full decoration-none hover:bg-primary-200 hover:text-secondary-50 text-primary-500 dark:text-primary-50 dark:hover:bg-primary-300 dark:hover:text-primary-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='rotate-180 h-14 w-14'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m19.5 8.25-7.5 7.5-7.5-7.5'
              />
            </svg>
          </button>
        </a>
      </div>
      <div className='col-span-12 sm:self-center sm:col-span-4 sm:place-self-end'>
        <div className='flex flex-col items-center justify-center gap-1'>
          <LanguageSelector />
          <ThemeSelector />
        </div>
      </div>
    </section>
  );
}
