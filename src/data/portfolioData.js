// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const personalInfo = {
  name: 'Azim Sarwad',
  // Roles shown in the animated typewriter on the hero
  roles: [
    'Full Stack Developer',
    'Cloud Engineer',
    'AWS Certified Practitioner',
    'Aspiring DevOps Engineer',
  ],
  tagline: 'Building scalable solutions at the intersection of cloud, code & AI.',
  bio: `I'm an AWS Certified Cloud Practitioner and AWS re/Start Graduate with a strong foundation
  in cloud computing, core AWS services, security, networking, and cloud architecture.
  Currently pursuing my MCA specializing in Machine Learning & Artificial Intelligence,
  bridging cloud technologies with modern AI/ML applications.
  Previously a Technical Associate at Amazon, I gained hands-on experience in large-scale
  tech environments. I completed a Full Stack Web Development certification before transitioning
  fully into cloud through the AWS re/Start program — where I built practical skills in Linux,
  networking, Python, and AWS service implementation.
  Passionate about cloud computing, AWS, AI/ML, and building efficient, scalable solutions.
  Actively seeking opportunities to grow as a Cloud/DevOps Engineer and contribute to
  impactful technical projects.`,

  // ──────────────────────────────────────────────────────────
  //  PROFILE PHOTO
  //  Replace the empty string with the path to your photo.
  //  Examples:
  //    Local file:  '/images/profile.jpg'   (put it in /public/images/)
  //    External URL: 'https://example.com/your-photo.jpg'
  //  Leave as empty string ('') to show the initials placeholder.
  // ──────────────────────────────────────────────────────────
  photo: '/images/azim_photo.jpeg',

  email: 'sarwadazim786@gmail.com',
  github: 'https://github.com/Azim6917',
  linkedin: 'https://www.linkedin.com/in/azimsarwad',
};

// ──────────────────────────────────────────────────────────────
//  SKILLS
// ──────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS VPC',
      'CloudFront', 'CloudTrail', 'CloudWatch',
      'Auto Scaling', 'Load Balancer', 'AWS CLI',
      'Docker', 'Kubernetes', 'Terraform', 'Linux', 'Bash',
    ],
  },
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Languages',
    items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'MongoDB', 'Redux'],
  },
  {
    category: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'VS Code', 'Networking', 'AWS Networking'],
  },
];

// ──────────────────────────────────────────────────────────────
//  PROJECTS
// ──────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'GearUp',
    subtitle: 'Automotive E-Commerce Platform',
    description:
      'An innovative full-stack automotive e-commerce platform built as my BCA final year project. Buyers can browse and purchase automotive products while sellers can list and manage their inventory — all through a seamless, responsive interface.',
    features: [
      'Dynamic search & filtering',
      'Seller product management',
      'Redux state management',
      'Fully responsive design',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
    liveUrl: 'https://gearup-in.vercel.app/',
    githubUrl: 'https://github.com/Azim6917/GearUp',
    featured: true,
  },
  // ── Add more projects below ──
  // {
  //   title: 'Project Name',
  //   subtitle: 'Short subtitle',
  //   description: 'What it does...',
  //   features: ['Feature 1', 'Feature 2'],
  //   tech: ['AWS', 'Python', 'Docker'],
  //   liveUrl: '',
  //   githubUrl: '',
  //   featured: false,
  // },
];

// ──────────────────────────────────────────────────────────────
//  CERTIFICATIONS
// ──────────────────────────────────────────────────────────────
export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Nov 2025',
    expires: 'Nov 2028',
    credlyUrl: 'https://www.credly.com/badges/ac7c02bf-6697-4f60-a1ea-c06cb1e93a6d/',
    color: 'from-orange-400 to-amber-500',
  },
  {
    title: 'AWS re/Start Graduate',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Oct 2025',
    expires: null,
    credlyUrl: 'https://www.credly.com/badges/4045a63c-5570-4a4c-871d-eaf7d9c5bdb6/',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    title: 'Full Stack Web Developer',
    issuer: 'GiveMycertificate',
    issued: '2024',
    expires: null,
    credlyUrl: 'https://certificate.givemycertificate.com/c/f65c5360-8ec4-407b-bc88-cf5ea2415a0c',
    color: 'from-blue-400 to-indigo-500',
  },
  // ── Add more certifications below ──
];
