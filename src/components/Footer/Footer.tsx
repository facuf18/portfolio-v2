import LanguageSelector from './LanguageSelector';

export default function Footer() {
  return (
    <section
      id='footer'
      className='flex flex-col items-center justify-center h-20 py-6 text-sm font-light font-body text-primary-500 bg-primary-50'
    >
      <a href='#hero' className='decoration-none'>
        <button className='p-0 transition duration-300 ease-in-out rounded-full decoration-none hover:bg-primary-200 hover:text-secondary-50 text-primary-500'>
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
      <LanguageSelector />
      <p>Portfolio v2 - Facundo Faccioli, 2024</p>
    </section>
  );
}
