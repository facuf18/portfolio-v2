import i18next from 'i18next';
import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

export default function LanguageSelector() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (enabled) {
      i18next.changeLanguage('es', (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        t('key');
      });
    } else if (!enabled) {
      i18next.changeLanguage('en', (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        t('key');
      });
    }
  }, [enabled]);

  return (
    <div className='flex flex-row items-center gap-1 text-sm'>
      <p className='text-primary-500 dark:text-primary-50'>EN</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-primary-200' : 'bg-primary-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-primary-50 dark:bg-primary-400 transition`}
        />
      </Switch>
      <p className='text-primary-500 dark:text-primary-50'>ES</p>
    </div>
  );
}
