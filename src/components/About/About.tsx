export default function About() {
  return (
    <section id='about' className='flex flex-col my-20 sm:px-10 md:px-20'>
      <h4 className='mb-6 text-4xl font-medium leading-tight text-center uppercase sm:text-6xl sm:text-end font-title text-primary-500'>
        About me
      </h4>
      <div className='justify-center grid-cols-2 gap-6 px-4 pt-2 sm:px-10 md:px-32 sm:grid'>
        <p className='col-span-1 font-light text-justify font-body'>
          I am Facundo, a passionate web developer with a strong enthusiasm for
          programming and continuous learning. I completed my training at Henry
          and Coderhouse, two renowned institutions that equipped me with the
          knowledge and tools necessary to create dynamic, interactive, and
          responsive web applications using JavaScript, TypeScript, React,
          Next.js, and other cutting-edge technologies. I possess expertise in
          both frontend and backend development, but I am currently specializing
          in frontend development.
        </p>
        <p className='col-span-1 font-light text-justify font-body'>
          I am currently employed as a Web Developer at Nexo Soluciones, a
          company that provides innovative and customized digital solutions to
          its clients. In this role, I actively participate in the development,
          maintenance, and enhancement of diverse frontend web projects,
          adhering to the best practices in code, design, and usability. These
          projects have allowed me to showcase and solidify my technical skills,
          as well as my ability to collaborate effectively, communicate clearly,
          and solve problems efficiently.
        </p>
      </div>
    </section>
  );
}
