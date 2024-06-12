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
        title: 'Front-End Developer',
        subtitle: "Hi there! I'm Facundo, and I'm looking for new challenges",
        resume_button: 'Get my resume',
      },
      about: {
        title: 'About me',
        firstText:
          'I am Facundo, a passionate web developer with a strong enthusiasm for programming and continuous learning. I made my training at Henry and Coderhouse, two renowned institutions that equipped me with the knowledge and tools necessary to create dynamic, interactive, and responsive web applications using JavaScript, TypeScript, React, Next.js, and other cutting-edge technologies. I have knowledge about frontend and backend, but I am currently specializing in frontend development. I am currently employed as a Web Developer at Nexo Soluciones, a company that provides innovative and customized digital solutions to its clients.',
        secondText:
          'In this role, I actively participate in the development, maintenance, and enhancement of diverse frontend web projects, adhering to the best practices in code, design, and usability. These projects have allowed me to showcase and solidify my technical skills, as well as my ability to collaborate effectively, communicate clearly, and solve problems efficiently. At this moment, I am looking for new challenges that allow me to continue improving as a developer and as a person.',
      },
      experience: {
        title: 'Experience & Projects',
        nexo: {
          position: 'Web Developer',
          company: 'Nexo Soluciones',
          time: '2022 - Current',
          body: `Work Methodology: Scrum

Technologies: React, Next.js, Tailwindcss, Material UI, Redux, Zustand, Google Cloud Run

Responsibilities:
- Development of multi-tenant web applications
- Creation and refinement of User Stories
- Development of a Production Release Protocol
- Implementation of payment gateways (Mercado Pago - Cybersource - Sitef)
- Deployments to Google Cloud Run
- Collaboration with the Back-end team

Achievements:
- Contributed to the development of scalable and high-performance web applications
- Implemented efficient workflow management processes
- Integrated industry-leading payment gateways
- Effectively collaborated with multidisciplinary teams`,
        },
        cyfan: {
          position: 'Freelance Web Developer',
          company: 'CYFAN Descartables',
          time: '2023 - Current',
          body: `Project: Customer Management Web Application

Technologies: Next.ts, Next-Auth, MongoDB/Mongoose, Tailwindcss, DaisyUI, UX, UI, Vercel

Responsibilities:
- Designed and developed a comprehensive web application for customer management
- Created a simple and intuitive user interface (UX)
- Implemented a functional and visually appealing graphical user interface (UI)
- Integrated functionalities for creating and printing receipts
- Utilized modern technologies such as Next.ts, Next-Auth, MongoDB/Mongoose, Tailwindcss, and DaisyUI
- Deployed the application on Vercel for reliable and scalable hosting
- Provided ongoing maintenance of the application to ensure its proper functioning
- Integrated improvements and new functionalities according to client requirements

Achievements:
- Successfully developed a robust and scalable web application for customer management
- Implemented a user interface that facilitates the use of the application
- Integrated comprehensive functionalities for customer management, receipt creation, and printing
- Delivered the project to the client on time and to their satisfaction`,
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
        title: 'Desarrollador Front-End',
        subtitle: 'Hola! Soy Facundo y estoy buscando nuevos desafíos',
        resume_button: 'Descarga mi CV',
      },
      about: {
        title: 'Sobre mí',
        firstText:
          'Soy Facundo, desarrollador web apasionado por la programación y el aprendizaje continuo. Me formé en Henry y Coderhouse, dos instituciones que me brindaron los conocimientos y las herramientas necesarias para crear aplicaciones web dinámicas, interactivas y responsivas, utilizando JavaScript, Typescript, React, Next.js, entre otras tecnologías. Poseo conocimientos tanto de frontend como backend. Pero en este momento me especializo en front. Actualmente, trabajo como Web Developer en Nexo Soluciones, una empresa que ofrece soluciones digitales innovadoras y personalizadas a sus clientes.',
        secondText:
          'Allí, participo en el desarrollo, mantenimiento y mejora de diversos proyectos web, en frontend, aplicando las mejores prácticas de código, diseño y usabilidad.  Estos proyectos me permitie demostrar y afianzar mis habilidades técnicas, así como mi capacidad de trabajo en equipo, comunicación y resolución de problemas. En este momento, estoy en búsqueda de nuevos desafíos que me permitan seguir mejorando como desarrollador y como persona.',
      },
      experience: {
        title: 'Experiencia y Proyectos',
        nexo: {
          position: 'Desarrollador Web',
          company: 'Nexo Soluciones',
          time: '2022 - Actualmente',
          body: `Metodología de trabajo: Scrum

Tecnologías: React, Next.js, Tailwindcss, Material UI, Redux, Zustand, Google Cloud Run

Responsabilidades:
- Desarrollo de aplicaciones web multi-tenant
- Creación y refinamiento de Historias de Usuario
- Desarrollo de Protocolo para Salida a Producción
- Implementación de pasarelas de pago (Mercado Pago - Cybersource - Sitef)
- Despliegues en Google Cloud Run
- Colaboración con el equipo de Back-end

Logros:
- Contribución al desarrollo de aplicaciones web escalables y de alto rendimiento
- Implementación de procesos eficientes para la gestión del flujo de trabajo
- Integración de pasarelas de pago líderes en la industria
- Colaboración efectiva con equipos multidisciplinarios`,
        },
        cyfan: {
          position: 'Desarrollador Web Freelance',
          company: 'CYFAN Descartables',
          time: '2023 - Actualmente',
          body: `Proyecto: Aplicación web para gestión de clientes

Tecnologías: Next.ts, Next-Auth, MongoDB/Mongoose, Tailwindcss, DaisyUI, UX, UI, Vercel

Responsabilidades:
- Diseño y desarrollo de una aplicación web completa para la gestión de clientes
- Creación de una interfaz de usuario (UX) sencilla e intuitiva
- Implementación de una interfaz gráfica de usuario (UI) funcional y atractiva
- Integración de funcionalidades para la creación e impresión de recibos
- Utilización de tecnologías modernas como Next.ts, Next-Auth, MongoDB/Mongoose, Tailwindcss y DaisyUI
- Despliegue de la aplicación en Vercel para un alojamiento confiable y escalable
- Mantenimiento continuo de la aplicación para garantizar su correcto funcionamiento
- Integración de mejoras y nuevas funcionalidades de acuerdo a los requerimientos del cliente

Logros:
- Desarrollo exitoso de una aplicación web robusta y escalable para la gestión de clientes
- Implementación de una interfaz de usuario que facilita el uso de la aplicación
- Integración de funcionalidades completas para la gestión de clientes, creación e impresión de recibos
- Entrega puntual y satisfactoria del proyecto al cliente`,
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
