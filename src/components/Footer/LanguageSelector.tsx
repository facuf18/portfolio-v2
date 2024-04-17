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
    <div className='flex flex-row items-center gap-1 pt-4 mb-2'>
      <p>EN</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-gray-200' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <p>ES</p>
    </div>
  );
}
