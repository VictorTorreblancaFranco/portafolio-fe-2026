import { Certification, Project, SocialLink, TechCategory, TimelineItem } from '../models/portfolio.model';

export const profile = {
  name: 'Victor Raul Torreblanca Franco',
  role: 'Software Developer | Backend & Frontend Developer',
  shortRole: 'Full Stack Developer Junior',
  summary:
    'Estudiante de Analisis de Sistemas y desarrollador en formacion, enfocado en construir soluciones web limpias, APIs REST y sistemas basados en microservicios.',
  languages: 'Espanol e ingles basico',
  email: '',
  whatsappUrl: 'https://wa.me/51930574584',
  cvPath: '/assets/cv/victor-torreblanca-cv.pdf', // Colocar aqui el CV cuando este disponible.
  profileImage: '/assets/images/perfil.png',
  logoImage: '/assets/images/logo.jpeg' // Reemplazar si actualizas el logo de marca.
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/VictorTorreblancaFranco'
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/victor-raul-torreblanca-franco-687a04305'
  }
];

export const techCategories: TechCategory[] = [
  {
    title: 'Backend',
    tone: 'green',
    items: ['Java', 'Spring Boot', 'Spring WebFlux', 'Node.js', 'Python', 'APIs REST']
  },
  {
    title: 'Frontend',
    tone: 'blue',
    items: ['Angular', 'React', 'Flutter', 'HTML', 'CSS', 'SCSS']
  },
  {
    title: 'Bases de datos',
    tone: 'amber',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB']
  },
  {
    title: 'DevOps y herramientas',
    tone: 'rose',
    items: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'GitLab', 'GitHub Actions', 'GitLab CI/CD', 'Kafka']
  }
];

export const projects: Project[] = [
  {
    name: 'EDUNOVA - Plataforma de Gestion Educativa',
    description:
      'Proyecto academico colaborativo basado en microservicios para la gestion educativa, incluyendo asistencia, usuarios, calificaciones, matricula, bienestar, comunicacion y gateway.',
    technologies: ['Java', 'Spring Boot', 'WebFlux', 'PostgreSQL', 'Docker', 'Angular', 'GitLab'],
    status: 'Proyecto academico colaborativo',
    role: 'Responsable del microservicio de asistencia',
    links: [
      {
        label: 'Frontend institucional',
        url: 'https://lab.vallegrande.edu.pe/edufront/auth/login'
      }
    ]
  },
  {
    name: 'Microservicio de Asistencia',
    description:
      'Microservicio desarrollado dentro del ecosistema EDUNOVA para gestionar registros de asistencia. Trabajo realizado como parte de un proyecto academico colaborativo.',
    technologies: ['Java', 'Spring Boot', 'WebFlux', 'PostgreSQL', 'Docker'],
    status: 'Repositorio GitLab institucional',
    role: 'Modulo asignado: asistencia',
    links: [
      {
        label: 'Repositorio GitLab',
        url: 'https://gitlab.com/vallegrande/as241s5_prs5/vg-ms-attendance'
      }
    ]
  },
  {
    name: 'Dashboard BI - Perfil del Estudiante',
    description:
      'Proyecto colaborativo de analisis de datos usando Python y Looker Studio para visualizar indicadores academicos y de preparacion laboral.',
    technologies: ['Python', 'Pandas', 'Looker Studio', 'PostgreSQL'],
    status: 'Proyecto academico colaborativo',
    role: 'Colaborador en el ecosistema del proyecto',
    links: [
      {
        label: 'Backend GitHub',
        url: 'https://github.com/salvador-quispe/AS241_HF_T5.git'
      },
      {
        label: 'Frontend GitHub',
        url: 'https://github.com/salvador-quispe/AS241_HF_T5_FE.git'
      }
    ]
  },
  {
    name: 'Kubernetes & Docker Labs',
    description:
      'Practicas y aprendizaje sobre contenedores, despliegue de servicios, redes, pods, deployments y servicios en Kubernetes.',
    technologies: ['Docker', 'Kubernetes', 'Linux', 'YAML']
  }
];

export const timeline: TimelineItem[] = [
  {
    title: 'Estudiante de Analisis de Sistemas',
    meta: 'Formacion academica',
    description:
      'Aprendizaje constante en desarrollo de software, arquitectura web, bases de datos y buenas practicas de programacion.'
  },
  {
    title: 'Proyectos academicos full stack',
    meta: 'Microservicios, Angular y despliegue',
    description:
      'Construccion de experiencia real con proyectos academicos que integran frontend, backend, APIs REST, bases de datos y despliegues.'
  },
  {
    title: 'Introduction to Kubernetes',
    meta: 'Linux Foundation',
    description:
      'Curso completado para reforzar conceptos de Pods, Deployments, Services, escalabilidad y administracion de aplicaciones contenerizadas.'
  }
];

export const certifications: Certification[] = [
  {
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM / Enterprise Design Thinking',
    category: 'Design Thinking',
    description:
      'Badge obtenido al culminar satisfactoriamente el curso de Enterprise Design Thinking Practitioner.',
    url: 'https://www.linkedin.com/posts/victor-raul-torreblanca-franco-687a04305_badge-obtenido-al-culminar-satisfactoriamente-share-7309319070699425792-kMfi/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3s5scB7iVzP4_i4ZOPqowIj_BUz9XUagQ'
  },
  {
    title: 'Containerization and Virtualization Concepts',
    issuer: 'DataCamp',
    category: 'Containers',
    description:
      'Curso completado sobre fundamentos de contenerizacion, virtualizacion y conceptos base para despliegue moderno.',
    url: 'https://www.linkedin.com/posts/victor-raul-torreblanca-franco-687a04305_i-just-completed-containerization-and-virtualization-share-7385163568335396864-g2dR/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3s5scB7iVzP4_i4ZOPqowIj_BUz9XUagQ'
  },
  {
    title: 'Introduccion a Docker',
    issuer: 'DataCamp',
    category: 'Docker',
    description:
      'Statement of Accomplishment de DataCamp enfocado en fundamentos de Docker y uso de contenedores.',
    url: 'https://www.linkedin.com/posts/victor-raul-torreblanca-franco-687a04305_i-just-completed-introduction-to-docker-by-share-7394152874110349313-hc2R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3s5scB7iVzP4_i4ZOPqowIj_BUz9XUagQ'
  },
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'Amazon Web Services Training and Certification',
    category: 'Cloud',
    description:
      'Badge de AWS Academy Cloud Foundations orientado a fundamentos de computacion en la nube y servicios AWS.',
    url: 'https://www.linkedin.com/posts/victor-raul-torreblanca-franco-687a04305_aws-academy-graduate-cloud-foundations-share-7400033029517242368--Jq7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3s5scB7iVzP4_i4ZOPqowIj_BUz9XUagQ'
  },
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'Amazon Web Services Training and Certification',
    category: 'Cloud',
    description:
      'Publicacion adicional de logro verificado de AWS Academy Cloud Foundations compartida en LinkedIn.',
    url: 'https://www.linkedin.com/posts/victor-raul-torreblanca-franco-687a04305_aws-academy-graduate-cloud-foundations-share-7400033179039981568-doWW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3s5scB7iVzP4_i4ZOPqowIj_BUz9XUagQ'
  },
  {
    title: 'Introduction to Kubernetes (LFS158)',
    issuer: 'The Linux Foundation',
    category: 'Kubernetes',
    description:
      'Curso completado sobre Kubernetes, Pods, Deployments, Services, escalabilidad y aplicaciones contenerizadas.',
    url: 'https://www.linkedin.com/posts/victor-raul-torreblanca-franco-687a04305_kubernetes-linuxfoundation-devops-share-7470308801267625984-Prim/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3s5scB7iVzP4_i4ZOPqowIj_BUz9XUagQ'
  }
];
