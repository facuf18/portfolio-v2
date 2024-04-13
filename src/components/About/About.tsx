export default function About() {
  return (
    <section id='about' className='flex flex-col px-20'>
      <h4 className='self-end mb-6 text-6xl font-medium leading-tight uppercase font-title text-primary-500'>
        About me
      </h4>
      <div className='grid justify-center grid-cols-2 gap-6 px-32 pt-2'>
        <p className='col-span-1 font-light text-justify font-body'>
          I am a web developer with a passion for programming and continuous
          learning. I trained at Henry and Coderhouse, two institutions that
          gave me the knowledge and tools necessary to create dynamic,
          interactive, and responsive web applications using JavaScript, React,
          Redux, Node.js, Express, PostgreSQL, Sequelize, Material-UI,
          Tailwindcss, and other technologies. I have knowledge of both frontend
          and backend. However, I am currently specializing in front-end.
          Currently, I work as a Web Developer at Nexo Solutions, a company that
          offers innovative and personalized digital solutions to its clients.
          There, I participate in the development, maintenance, and improvement
          of various web projects, in front-end, applying the best code, design,
          and usability practices.
        </p>
        <p className='col-span-1 font-light text-justify font-body'>
          Previously, I was part of the Henry team, where I developed two
          projects: Play Center, a social network for gamers with features such
          as chat, missions, rewards, and payment gateway; and Countries App, a
          web application that displays information about countries, with
          pagination, filtering, search, and creation. These projects allowed me
          to demonstrate and consolidate my technical skills, as well as my
          ability to work in a team, communicate, and solve problems.
        </p>
      </div>
    </section>
  );
}
