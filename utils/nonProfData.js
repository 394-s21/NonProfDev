export const nonProfsData = {
  nonprofits: [
    {
      id: 0,
      title: 'Web Development for PI180 Website',
      company: 'Project Impact 180',
      descrip: 'We need help building our website',
      industry: 'Community Leadership',
      url: "https://www.facebook.com/ProjectImpact180/",
      logo: "https://scontent.fdpa1-1.fna.fbcdn.net/v/t1.6435-9/86807013_111974643722545_1272070550302228480_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=AaNPh3GBwIMAX8pCo24&_nc_ht=scontent.fdpa1-1.fna&oh=8783917f4e282e940565a8ed0f8c2a72&oe=60A3327A",
      length: '3+ Months', // 0: <1 month, 1: 1-3 months, 2: 3+ months
    },
    {
      id: 1,
      title: 'Update Ongoing Classes',
      company: 'We All Code',
      descrip:
        'Help us maintain our weekly classes by integrating the information from our schedule into the website each week',
      industry: 'Education',
      url: "https://www.weallcode.org/",
      logo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F131925775%2F93310981415%2F1%2Foriginal.20210324-154546?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=234%2C0%2C1490%2C745&s=651bac36a9695beabcdf528fdd3321d5",
      length: '3+ Months',
    },
    {
      id: 2,
      title: 'Scholarship/Career Search',
      company: 'Evanston Church',
      descrip:
        'Help us build a platform to match our students with scholarships to apply for',
      industry: 'Religion',
      url: "https://www.evanstonchurchofgod.org/",
      logo: "https://images.app.goo.gl/noYpGd9JuTKSvWef7",
      length: 'One Month or Shorter',
    },
  ],
}

export const jobArray = {
  jobs: [
    {
      companyId: 0,
      role: 'Web Design',
      title: 'Frontend Developer',
      descrip: `We need someone who is comfortable as a frontend developer. HTML/JS/CSS are required skills. Familiarity with React and Bootstrap (or similar) would be helpful!`,
      prereqs: null,
      weeklyTime: '5 Hours or Fewer', // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
      languages: ['JS', 'CSS', 'HTML'],
    },
    {
      companyId: 0,
      role: 'Backend Development',
      title: 'Backend Developer',
      descrip: `Looking for somebody to build and maintain the backend database for our website. Familiarity with C/C++ and SQL are recommended.`,
      prereqs: null,
      weeklyTime: '5-10 Hours', // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
      languages: ['C', 'C++', 'SQL'],
    },
    {
      companyId: 1,
      role: 'Web Development',
      title: 'Full-Stack Web Developer',
      descrip: `We are looking for somebody who is comfortable with full-stack web development. Our app currently uses React on the frontend & Django on the backend, so familiarity with these frameworks would be preferred. Additional bonus if currently pursuing a bachelor's or advanced degree in CS or a related field.`,
      prereqs: null,
      weeklyTime: '10+ Hours', // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
      languages: null,
    },
    {
      companyId: 1,
      role: 'Web Development',
      title: 'Android Developer',
      descrip: `Seeking an Android developer proficient in Kotlin. Industry and/or relevant project experience preferred.`,
      prereqs: null,
      weeklyTime: '5-10 Hours', // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
      languages: ['Java', 'XML'],
    },
    {
      companyId: 1,
      role: 'Web Development',
      title: 'iOS Developer',
      descrip: `Searching for an iOS developer with significant experience in Swift and/or Objective-C. Please reach out with a portfolio of prior iOS (or mobile) projects.`,
      prereqs: null,
      weeklyTime: '5-10 Hours', // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
      languages: ['Swift', 'Objective-C'],
    },
    {
      companyId: 2,
      role: 'Web Design',
      title: 'Web Designer',
      descrip: `We are looking for somebody to build a website to match students with appropriate scholarship. Tech-stack is currently undecided, but we are thinking React or Angular on the frontend & Node.js on the backend. Added bonus if currently pursuing a bachelor's or advanced degree in CS.`,
      prereqs: null,
      weeklyTime: '10+ Hours', // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
      languages: ['HTML', 'JS', 'CSS'],
    },
    {
      companyId: 2,
      role: 'Backend Development',
      title: 'Backend Mobile Developer',
      descrip: `Searching for a developer proficient in React Native (goal is to deploy to both iOS and Android efficiently). Ideal candidate will be familiar with React/React Native, TypeScript, JavaScript, React Hooks, and Redux.`,
      prereqs: null,
      weeklyTime: '10+ Hours', // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
      languages: ['HTML', 'JS', 'CSS', 'TypeScript'],
    },
  ],
}
