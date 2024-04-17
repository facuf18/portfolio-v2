import { useTranslation } from 'react-i18next';
import DataDisclosure from './DataDisclosure';

const experienceData = [
  {
    position: 'experience.nexo.position',
    company: 'experience.nexo.company',
    time: 'experience.nexo.time',
    body: 'experience.nexo.body',
  },
  {
    position: 'experience.cyfan.position',
    company: 'experience.cyfan.company',
    time: 'experience.cyfan.time',
    body: 'experience.cyfan.body',
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
