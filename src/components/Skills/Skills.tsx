import { useTranslation } from 'react-i18next';
import SkillItems from './SkillItems';

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id='skills' className='flex flex-col my-20 sm:px-10 md:px-20'>
      <h4 className='mb-10 text-4xl font-medium leading-tight text-center uppercase sm:text-6xl font-title text-primary-500 dark:text-primary-50'>
        {t('skills.title')}
      </h4>
      <SkillItems />
    </section>
  );
}
