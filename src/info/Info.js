import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Harsh",
    lastName: "Gupta",
    initials: "< />",
    position: "Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "🔥",
            text: "Build Interactive Apps"
        },
        {
            emoji: "📧",
            text: "hgupta42774@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/harshgupta20",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/harshgupta2001",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/harshgupta203",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://youtube.com/channel/UCb8LgtihVO3HbITK3HN2XlQ",
            icon: 'fa fa-youtube',
            label: 'youtube'
        },
        {
            link: "https://instagram.com/i.m.harshgupta",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
    ],
    bio: "Hello! I'm Harsh Gupta. I'm a Software Engineer who creates beautiful user friendly application. I studied Computer Science at SRM University, I specialize in building scalable, user-centric applications using modern technologies like React.js, Next.js, and Tailwind CSS. My portfolio includes projects such as DeepTalk, a platform for AI customer interaction; I-R-E-S, a blockchain-based digital document verifier; and devhope.io, a job application platform with a focus on seamless user experience. With strong frontend and backend expertise, I bring innovative solutions to complex problems and a passion for delivering exceptional results.",
    skills:
    {
        proficientWith: ['React.js', 'Next.js', 'javascript', 'Sequelize', 'Node.js', 'Express.js', 'TailwindCSS', 'Firebase', 'Git', 'Bootstrap', 'HTML5', 'CSS3', 'Material-UI',],
        exposedTo: ['Visual Studio', 'github', 'Figma', 'gitlab']
    },
    experience: [
        {
            company: "SRM University",
            position: "Undergraduate Student",
            website: "https://www.srmuniv.ac.in/",
            startDate: "2022",
            endDate: "Present"
        },
        {
            company: "SRM University",
            position: "Volunteer",
            website: "https://www.srmuniv.ac.in/",
            startDate: "2022",
            endDate: "Present"
        }
    ],
    hobbies: [
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'Exploring',
            emoji: '🎭'
        },
        {
            label: 'Content Creation',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [
        {
            title: "Youtube Clone",
            live: "https://clone-78ac5.web.app/",
            source: "https://github.com/harshgupta20/clone-youtube",
            image: mock1
        },
        {
            title: "I-RE-S Platform",
            live: "https://i-r-e-s.web.app/",
            source: "https://github.com/harshgupta20/i-r-e-s",
            image: mock2
        },
        {
            title: "E-Buy Ecommerce App",
            live: "https://ecommerce-app-b2aa6.web.app/",
            source: "https://github.com/harshgupta20/ecommerce-app",
            image: mock3
        },
        {
            title: "Movie Surfing Application",
            live: "https://movie-app-41b37.web.app/",
            source: "https://github.com/harshgupta20/movie-app",
            image: mock4
        },
        {
            title: "Coming Soon...",
            live: "#",
            source: "#",
            image: mock5
        }
    ]
}
