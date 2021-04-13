export const nonprofs = {
    nonprofits: [
        { 
            id: 0,
            title: 'Web Development for PI180 Website',
            role: 'Web Developer',
            company: 'Project Impact 180',
            descrip: 'We need help building our website',
            industry: 'Community Leadership',
            length: 2 // 0: <1 month, 1: 1-3 months, 2: 3+ months
        },
        {
            id: 1,
            title: 'Update Ongoing Classes',
            role: 'Website Maintenance',
            company: 'We All Code',
            descrip: 'Help us maintain our weekly classes by integrating the information from our schedule into the website each week',
            industry: 'Education',
            length: 2,
            languages: ['JS', 'CSS', 'HTML']
        },
        {
            id: 2,
            title: 'Scholarship/Career Search',
            role: 'Project Developer',
            company: 'Evanston Church',
            descrip: 'Help us build a platform to match our students with scholarships to apply for',
            industry: 'Education, Church Group',
            length: 0,
            languages: null
        }
    ]
};

export const jobs = {
    jobs: [
        {
            companyId: 0,
            title: 'Frontend Developer',
            descrip: `We need someone who is comfortable as a frontend developer. 
                    HTML/JS/CSS are required skills. Familiarity with React and Bootstrap (or similar)
                    would be helpful!`,
            prereqs: null,
            weeklyTime: 1, // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
            languages: ['JS', 'CSS', 'HTML']
        },
        {
            companyId: 0,
            title: 'Backend Developer',
            descrip: `Looking for somebody to build and maintain the backend 
                    database for our website. Familiarity with C/C++ and SQL are recommended.`,
            prereqs: null,
            weeklyTime: 1, // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
            languages: ['C', 'C++', 'SQL']
        },
        {
            companyId: 1,
            title: 'Full-Stack Web Developer',
            descrip: `We are looking for somebody who is comfortable with full-stack web development. 
                    Our app currently uses React on the frontend & Django on the backend, so familiarity 
                    with these frameworks would be preferred. Additional bonus if currently pursuing 
                    a bachelor's or advanced degree in CS or a related field.`,
            prereqs: null,
            weeklyTime: 2, // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
            languages: null
        },
        {
            companyId: 1,
            title: 'Android Developer',
            descrip: `Seeking an Android developer `,
            prereqs: null,
            weeklyTime: 1, // 0: <5 hrs/week, 1: 5-10 hrs, 2: 10+ hrs
            languages: ['C', 'C++', 'SQL']
        }
    ]
};