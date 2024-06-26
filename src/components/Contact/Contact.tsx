import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id='contact' className='flex flex-col my-20 sm:px-10 md:px-20'>
      <h4 className='mb-10 text-4xl font-medium leading-tight text-center uppercase sm:text-6xl font-title text-primary-500 dark:text-primary-50'>
        {t('contact.title')}
      </h4>
      <div className='flex flex-wrap items-center self-center justify-center w-full max-w-2xl gap-6 px-2 pt-2 sm:px-0'>
        <a
          target='_blank'
          href='https://wa.link/jyziel'
          className='transition-all duration-300 ease-in-out cursor-pointer hover:scale-125'
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='70'
              height='70'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                className='fill-primary-400 dark:fill-primary-100'
                fillRule='evenodd'
                d='M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.174-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.422 7.403h-.004a9.87 9.87 0 01-5.032-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.861 9.861 0 01-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885zm8.412-18.297A11.815 11.815 0 0011.992 0C5.438 0 .102 5.335.1 11.892c-.001 2.096.546 4.142 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 00-3.48-8.413'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
        </a>
        <a
          href='https://www.linkedin.com/in/facundofaccioli/'
          target='_blank'
          className='transition-all duration-300 ease-in-out cursor-pointer hover:scale-125'
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='80'
              height='80'
              fill='none'
              viewBox='0 0 16 16'
            >
              <path
                className='fill-primary-400 dark:fill-primary-100'
                d='M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z'
              ></path>
            </svg>
          </span>
        </a>
        <a
          href='mailto:facufaccioli18@gmail.com'
          target='_blank'
          className='transition-all duration-300 ease-in-out cursor-pointer hover:scale-125'
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='90'
              height='90'
              fill='none'
              viewBox='0 0 32 32'
            >
              <path
                className='fill-transparent'
                d='M2 11.956c0-3.485 0-5.228.678-6.559a6.222 6.222 0 012.72-2.719C6.727 2 8.47 2 11.955 2h8.088c3.485 0 5.228 0 6.559.678a6.222 6.222 0 012.719 2.72C30 6.727 30 8.47 30 11.955v8.088c0 3.485 0 5.228-.678 6.559a6.222 6.222 0 01-2.72 2.719C25.273 30 23.53 30 20.045 30h-8.088c-3.485 0-5.228 0-6.559-.678a6.222 6.222 0 01-2.719-2.72C2 25.273 2 23.53 2 20.045v-8.088z'
              ></path>
              <path
                className='fill-primary-300 dark:fill-primary-100'
                d='M22.052 8.523l-5.988 4.672L9.94 8.523v.001l.008.007v6.542l6.047 4.774 6.057-4.59V8.524z'
              ></path>
              <path
                className='fill-primary-400 dark:fill-primary-200'
                d='M23.623 7.386l-1.572 1.137v6.735l4.947-3.799V9.171s-.6-3.268-3.375-1.785z'
              ></path>
              <path
                className='fill-primary-300 dark:fill-primary-100'
                d='M22.05 15.258v8.734h3.793s1.079-.11 1.157-1.34V11.458l-4.95 3.799z'
              ></path>
              <path
                className='fill-primary-400 dark:fill-primary-200'
                d='M9.948 24v-8.927l-.008-.006L9.948 24zM9.94 8.524l-1.564-1.13C5.602 5.91 5 9.177 5 9.177v2.288l4.94 3.602V8.524z'
              ></path>
              <path
                className='fill-primary-300 dark:fill-primary-100'
                d='M9.94 8.524v6.543l.008.006V8.531l-.008-.007z'
              ></path>
              <path
                className='fill-primary-300 dark:fill-primary-100'
                d='M5 11.467v11.192A1.35 1.35 0 006.157 24h3.792l-.009-8.933-4.94-3.6z'
              ></path>
            </svg>
          </span>
        </a>
        <a
          href='https://github.com/facuf18'
          target='_blank'
          className='transition-all duration-300 ease-in-out cursor-pointer hover:scale-125'
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='75'
              height='75'
              viewBox='0 0 16 16'
            >
              <path
                className='fill-primary-400 dark:fill-primary-100'
                fillRule='evenodd'
                d='M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
