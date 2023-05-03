const dataMetaData = {
  title: 'My Website',
  description:
    'Welcome to my personal site! This is where you can learn more about me, my interests, and my work. Explore my portfolio, blog, and more to get a better sense of who I am and what I do.',
  keywords:
    'personal, portfolio, blog, about me, interests, work, projects, skills, experience, education, achievements, contact, homepage',
  author: 'John Doe',
  image: '/images/homepage.png',
  url: 'https://v1-personal-site.netlify.app/',
  twitterUsername: '@yourtwitterusername',
  siteName: 'Personal Site',
  siteLanguage: 'en-US',
  siteLocale: 'id_ID',
  type: 'website',
}

// The name of the image is adjusted to the name of
// the file in the public folder
const dataAbout = {
  description: [
    'Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!',
    "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients. ",
    'I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.',
  ],
  techs: [
    'html',
    'css',
    'javascript',
    'golang',
    'c',
    'php',
    'phyton',
    'nodejs',
    'laravel',
    'postgresql',
    'mysql',
    'git',
  ],
  image: 'women.svg',
}

const dataNavbar = {
  title: '<Sekar/>',
  menuList: ['About', 'Experiences', 'Projects', 'Contact'],
}

// The name of the cvFile is adjusted to the name of
// the file in the public folder
const dataHeading = {
  intro: 'Hi, my name is',
  title: 'Sekar Madu K.',
  subtitle: [
    'Hooked by Visuals',
    'Fascinated by Technology',
    'Fuelled by Craftmanship',
    'Meaningful Aesthetics',
  ],
  description:
    'Undergraduate computer science student in Universitas Pendidikan Indonesia, software engineer specializing in back-end development. I am currently as a software engineer intern in GITS Indonesia.',
  cvFile: 'newest_cv.pdf',
}

const dataExperiences = [
  {
    title: 'Software Engineer Intern - GITS Indonesia',
    detail: {
      position: 'Software Engineer Intern',
      place: 'GITS Indonesia',
      time: 'January - Now 2023',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: true,
  },
  {
    title: 'Assisten Lecturer OOP - UPI',
    detail: {
      position: 'Assisten Lecturer OOP',
      place: 'Universitas Pendidikan Indonesia',
      time: 'February - September 2022',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
  {
    title: 'Software Engineer Intern - GITS Indonesia',
    detail: {
      position: 'Software Engineer Intern',
      place: 'GITS Indonesia',
      time: 'January - Now 2023',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
  {
    title: 'Assisten Lecturer OOP - UPI',
    detail: {
      position: 'Assisten Lecturer OOP',
      place: 'Universitas Pendidikan Indonesia',
      time: 'February - September 2022',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
  {
    title: 'Software Engineer Intern - GITS Indonesia',
    detail: {
      position: 'Software Engineer Intern',
      place: 'GITS Indonesia',
      time: 'January - Now 2023',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
  {
    title: 'Assisten Lecturer OOP - UPI',
    detail: {
      position: 'Assisten Lecturer OOP',
      place: 'Universitas Pendidikan Indonesia',
      time: 'February - September 2022',
      jobdesc: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
      ],
    },
    active: false,
  },
]

// The name of the thumbnail is adjusted to the name of
// the photo file in the public folder
const dataProjects = [
  {
    thumbnail: 'chatbot.jpg',
    title: 'API Chatbot Library UPI',
    description:
      'Make API Chatbot library UPI to provide some information and some activity to make student more easier to access some feature in library UPI',
    technology: ['Express Js', 'Docker'],
    productLink: 'perpustakaan.upi.edu:8080',
    resourceLink: 'github.com',
  },
  {
    thumbnail: 'chatbot.jpg',
    title: 'API Chatbot Library UPI',
    description:
      'Make API Chatbot library UPI to provide some information and some activity to make student more easier to access some feature in library UPI',
    technology: ['Express Js', 'Docker'],
    productLink: 'perpustakaan.upi.edu:8080',
    resourceLink: 'github.com',
  },
  {
    thumbnail: 'chatbot.jpg',
    title: 'API Chatbot Library UPI',
    description:
      'Make API Chatbot library UPI to provide some information and some activity to make student more easier to access some feature in library UPI',
    technology: ['Express Js', 'Docker'],
    productLink: 'perpustakaan.upi.edu:8080',
    resourceLink: 'github.com',
  },
  {
    thumbnail: 'chatbot.jpg',
    title: 'API Chatbot Library UPI',
    description:
      'Make API Chatbot library UPI to provide some information and some activity to make student more easier to access some feature in library UPI',
    technology: ['Express Js', 'Docker'],
    productLink: 'perpustakaan.upi.edu:8080',
    resourceLink: 'github.com',
  },
]

// The name of the logo is adjusted to the name of
// the file in the public folder
const dataSocialMedia = {
  data: [
    { link: 'https://gmail.com/azar_nuzy', logo: 'logos_gmail.svg' },
    { link: 'https://github.com/azar_nuzy', logo: 'logos_github.svg' },
    { link: 'https://instagram.com/azar_nuzy', logo: 'logos_instagram.svg' },
    { link: 'https://twitter.com/azar_nuzy', logo: 'logos_twitter.svg' },
    { link: 'https://linkedin.com/azar_nuzy', logo: 'logos_linkedin.svg' },
  ],
  email: 'sekarmadu99@gmail.com',
}

export {
  dataMetaData,
  dataAbout,
  dataHeading,
  dataNavbar,
  dataExperiences,
  dataProjects,
  dataSocialMedia,
}
