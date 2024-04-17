import { useTranslation } from 'react-i18next';
import NavLink from './NavLink';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav
      id='navbar'
      className='flex-row items-center justify-between hidden h-20 font-medium sm:flex sm:px-20 font-body text-primary-500 bg-primary-50 dark:bg-primary-400 dark:text-primary-50'
    >
      <p className='mx-auto leading-tight transition duration-300 ease-in-out cursor-pointer text-primary-500 dark:text-primary-50 sm:mx-0 hover:text-secondary-200'>
        Facundo Faccioli
      </p>
      <div className='flex flex-row items-center gap-2'>
        <div className='flex flex-row items-center'>
          <NavLink to='about'>{t('navbar.about')}</NavLink>
          <NavLink to='experience'>{t('navbar.experience')}</NavLink>
          <NavLink to='skills'>{t('navbar.skills')}</NavLink>
          <NavLink to='contact'>{t('navbar.contact')}</NavLink>
        </div>
      </div>
    </nav>
  );
}
