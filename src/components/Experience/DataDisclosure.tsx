import { Disclosure, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

type DataDisclosureProps = {
  position: string;
  company: string;
  time: string;
  body: string;
};

export default function DataDisclosure({
  experienceData,
}: {
  experienceData: DataDisclosureProps;
}) {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <div className='w-full max-w-3xl px-2 mx-auto sm:px-0'>
        <Disclosure defaultOpen={false}>
          {({ open }) => (
            <>
              <Disclosure.Button className='w-full p-2 text-sm font-medium text-left transition duration-300 ease-in-out border-b rounded-t-md border-primary-400 dark:border-primary-100 focus:outline-none hover:cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-300'>
                <span className='flex flex-row items-center justify-between'>
                  <div className='flex flex-row items-center gap-2 dark:text-primary-50'>
                    {!open ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-8 h-8'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 4.5v15m7.5-7.5h-15'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='w-8 h-8'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M5 12h14'
                        />
                      </svg>
                    )}
                    <div className='flex flex-col items-start px-2'>
                      <p className='text-lg font-medium uppercase font-body text-primary-500 dark:text-primary-50'>
                        {t(experienceData.position)}
                      </p>
                      <p className='text-lg font-light font-body text-primary-500 dark:text-primary-50'>
                        {t(experienceData.company)}
                      </p>
                    </div>
                  </div>
                  <p className='text-lg font-light font-body text-primary-500 dark:text-primary-50'>
                    {t(experienceData.time)}
                  </p>
                </span>
              </Disclosure.Button>
              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Disclosure.Panel className='p-2 '>
                  <div className='font-light text-justify font-body text-primary-500 dark:text-primary-50'>
                    <p>{t(experienceData.body)}</p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
