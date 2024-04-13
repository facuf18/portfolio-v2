import SkillItems from './SkillItems';

export default function Skills() {
  return (
    <section id='skills' className='flex flex-col px-20 my-20'>
      <h4 className='self-end mb-6 text-6xl font-medium leading-tight uppercase font-title text-primary-500'>
        Skills and Technologies
      </h4>
      <SkillItems />
    </section>
  );
}
