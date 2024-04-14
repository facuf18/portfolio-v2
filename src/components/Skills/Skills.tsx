import SkillItems from './SkillItems';

export default function Skills() {
  return (
    <section id='skills' className='flex flex-col my-20 sm:px-10 md:px-20'>
      <h4 className='mb-6 text-4xl font-medium leading-tight text-center uppercase sm:text-end sm:text-6xl font-title text-primary-500'>
        Skills and Technologies
      </h4>
      <SkillItems />
    </section>
  );
}
