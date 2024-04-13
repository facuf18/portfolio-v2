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
  return (
    <section id='experience' className='flex flex-col px-20 my-20'>
      <h4 className='self-start mb-6 text-6xl font-medium leading-tight uppercase font-title text-primary-500'>
        Experience and Projects
      </h4>
      {experienceData &&
        experienceData.map((data) => {
          return <DataDisclosure experienceData={data} />;
        })}
    </section>
  );
}
