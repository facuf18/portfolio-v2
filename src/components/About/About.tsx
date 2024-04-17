import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id='about' className='flex flex-col my-20 sm:px-10 md:px-20'>
      <h4 className='mb-6 text-4xl font-medium leading-tight text-center uppercase sm:text-6xl sm:text-center font-title text-primary-500'>
        {t('about.title')}
      </h4>
      {/* <div className='justify-center grid-cols-2 gap-6 px-4 pt-2 sm:px-10 md:px-32 sm:grid'> */}
      <div className='justify-center grid-cols-2 gap-6 px-4 pt-2 mx-auto sm:grid sm:px-10'>
        <p className='col-span-1 font-light text-justify font-body max-w-[500px]'>
          {t('about.firstText')}
        </p>
        <p className='col-span-1 font-light text-justify font-body max-w-[500px]'>
          {t('about.secondText')}
        </p>
      </div>
    </section>
  );
}
