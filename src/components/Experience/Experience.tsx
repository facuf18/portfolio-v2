import { useTranslation } from 'react-i18next';
import DataDisclosure from './DataDisclosure';

const experienceData = [
  {
    position: 'Web Developer',
    company: 'Nexo Soluciones',
    time: '2022 - Current',
    body: 'Developed a multi-tenant web app to use as ATM for theaters purchase process with payment gateway and ticket printing, from beginning to production, using React Js',
  },
  {
    position: 'Web Developer',
    company: 'CYFAN Descartables',
    time: '2023 - Current',
    body: 'Work',
  },
];

export default function Experience() {
  const { t } = useTranslation();
  return (
    <section id='experience' className='flex flex-col my-20 sm:px-10 md:px-20'>
      <h4 className='mb-6 text-4xl font-medium leading-tight text-center uppercase sm:text-end sm:text-6xl font-title text-primary-500'>
        {t('experience.title')}
      </h4>
      {experienceData &&
        experienceData.map((data) => {
          return <DataDisclosure experienceData={data} />;
        })}
    </section>
  );
}
