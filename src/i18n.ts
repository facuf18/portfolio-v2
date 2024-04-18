import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        about: 'About me',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        title: 'Front-end Developer',
        subtitle: "Hi there! I'm Facundo, and I want to work with you",
      },
      about: {
        title: 'About me',
        firstText:
          'I am Facundo, a passionate web developer with a strong enthusiasm for programming and continuous learning. I made my training at Henry and Coderhouse, two renowned institutions that equipped me with the knowledge and tools necessary to create dynamic, interactive, and responsive web applications using JavaScript, TypeScript, React, Next.js, and other cutting-edge technologies. I have knowledge about frontend and backend, but I am currently specializing in frontend development.',
        secondText:
          'I am currently employed as a Web Developer at Nexo Soluciones, a company that provides innovative and customized digital solutions to its clients. In this role, I actively participate in the development, maintenance, and enhancement of diverse frontend web projects, adhering to the best practices in code, design, and usability. These projects have allowed me to showcase and solidify my technical skills, as well as my ability to collaborate effectively, communicate clearly, and solve problems efficiently.',
      },
      experience: {
        title: 'Experience & Projects',
        nexo: {
          position: 'Web Developer',
          company: 'Nexo Soluciones',
          time: '2022 - Current',
          body: '',
        },
        cyfan: {
          position: 'Web Developer',
          company: 'CYFAN Descartables',
          time: '2023 - Current',
          body: '',
        },
      },
      skills: {
        title: 'Skills & Technologies',
      },
      contact: {
        title: "Let's work together",
      },
    },
  },
  es: {
    translation: {
      navbar: {
        about: 'Sobre mí',
        experience: 'Experiencia',
        skills: 'Habilidades',
        contact: 'Contacto',
      },
      hero: {
        title: 'Desarrollador Front-end',
        subtitle: 'Hola! Soy Facundo y me gustaría trabajar contigo',
      },
      about: {
        title: 'Sobre mí',
        firstText:
          'Soy Facundo, desarrollador web apasionado por la programación y el aprendizaje continuo. Me formé en Henry y Coderhouse, dos instituciones que me brindaron los conocimientos y las herramientas necesarias para crear aplicaciones web dinámicas, interactivas y responsivas, utilizando JavaScript, Typescript, React, Next.js, entre otras tecnologías. Poseo conocimientos tanto de frontend como backend. Pero en este momento me especializo en front.',
        secondText:
          'Actualmente, trabajo como Web Developer en Nexo Soluciones, una empresa que ofrece soluciones digitales innovadoras y personalizadas a sus clientes. Allí, participo en el desarrollo, mantenimiento y mejora de diversos proyectos web, en frontend, aplicando las mejores prácticas de código, diseño y usabilidad.  Estos proyectos me permitie demostrar y afianzar mis habilidades técnicas, así como mi capacidad de trabajo en equipo, comunicación y resolución de problemas.',
      },
      experience: {
        title: 'Experiencia y Proyectos',
        nexo: {
          position: 'Desarrollador Web',
          company: 'Nexo Soluciones',
          time: '2022 - Actualmente',
          body: '',
        },
        cyfan: {
          position: 'Desarrollador Web',
          company: 'CYFAN Descartables',
          time: '2023 - Actualmente',
          body: '',
        },
      },
      skills: {
        title: 'Habilidades y Tecnologías',
      },
      contact: {
        title: 'Comunicate conmigo',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
