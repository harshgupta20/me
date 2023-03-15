import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Harsh",
    lastName: "Gupta",
    initials: "< />", // the example uses first and last, but feel free to use three or more if you like.
    position: "Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
            link: "https://instagram.com/developer.guru",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Harsh Gupta. I'm a Software Engineer who creates beautiful user friendly application. I studied Computer Science at SRM University, Apart from technical expertise i teach coding and building developer community which has grown to 70k+ combine over social platforms and been integral part of many global open-source and developer communities along my journey. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'firebase', 'git', 'bootstrap', 'html5', 'css3', 'material-UI', ],
            exposedTo: ['Visual Studio', 'github', 'Adobe XD']
        }
    ,
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Youtube Clone",
            live: "https://clone-78ac5.web.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/harshgupta20/clone-youtube", // this should be a link to the **repository** of the project, where the code is hosted.
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