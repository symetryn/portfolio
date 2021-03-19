import { PortfolioData } from "./portfolioData";

export const work: PortfolioData[] = [
  {
    name: "Grace International",
    url: "https://grace.edu.np/",
    description:
      "Grace International, is a leading educational service provider established with the aim of delivering quality educational services. ",
    image: {
      thumbnail: "https://ik.imagekit.io/symetryn/grace_8vuIcmO4sa.jpg",
      base: "https://ik.imagekit.io/symetryn/grace_8vuIcmO4sa.jpg",
    },
    tech: [
      { name: "Nodejs" },
      { name: "Angular" },
      { name: "MySQL" },
      { name: "Angular Materialize" },
      { name: "Express" },
    ],
    features: [
      "Presonalized home page based on your country location",
      "Complete content management system for managing ui content",
      "Personalized country based enquiry system where you send enquiry to the nearest branch",
      "Role based auth for admin and normal user with JWT tokens",
    ],
  },
  {
    name: "Stay in farm",
    url: "http://stayinfarm.com/",
    description:
      "Stay in farm is a platform for registering for farm stay programs in farms all over Nepal",
    image: {
      thumbnail: "https://ik.imagekit.io/symetryn/stayinfarm_N5SdIH5FC.jpg",
      base: "https://ik.imagekit.io/symetryn/stayinfarm_N5SdIH5FC.jpg",
    },
    tech: [
      { name: "Nodejs" },
      { name: "Angular" },
      { name: "MongoDB" },
      { name: "Angular Material" },
      { name: "Express" },
    ],

    features: [
      "Role based auth for admin and normal user with JWT tokens",
      "Listing signup and verification process",
      "Realtime booking notifications for admin",
    ],
  },
  {
    name: "My Parikshya ",
    url: "https://myparikshya.com/",
    description:
      "My Parikshya is a complete packaged solution availabe in both mobile and web platform for your exam preparation it helps you prepare for the real deal",
    image: {
      base: "https://ik.imagekit.io/symetryn/myparikshya_QlC8zn_i0.jpg",
      thumbnail: "https://ik.imagekit.io/symetryn/myparikshya_QlC8zn_i0.jpg",
    },
    tech: [
      { name: "Serverless Framework" },
      { name: "Python" },
      { name: "MongoDB" },
      { name: "React" },
      { name: "React Native" },
      { name: "Redux" },
      { name: "React-Bootstrap" },
    ],

    features: [
      "Real time examination",
      "Instant result generation",
      "Role based auth for admin and normal user with JWT tokens",
    ],
  },
  {
    name: "Linder",
    url: "http://linder.netlify.app/",
    description:
      "Linder is a is just what you expect tinder but for choosing dating spots",
    image: {
      thumbnail: "https://ik.imagekit.io/symetryn/linder_2xHurPBV2g.jpg",
      base: "https://ik.imagekit.io/symetryn/linder_2xHurPBV2g.jpg",
    },
    tech: [
      { name: "Nextjs" },
      { name: "React" },
      { name: "Chakra UI" },
      { name: "Framer Motion" },
    ],

    features: ["Easy to use", "Complete privacy as no server side is present"],
  },
  {
    name: "Covid 19 Update ",
    url: "http://rojanmaharjan.com.np/",
    description:
      "A web app for updates about the status of novel covid 19 in different countries",
    image: {
      base: "https://ik.imagekit.io/symetryn/covidupdate_7SfNGreK-.jpg",
      thumbnail: "https://ik.imagekit.io/symetryn/covidupdate_7SfNGreK-.jpg",
    },
    tech: [{ name: "Angular" }],
    features: ["Neumorphi UI", "Nepali Translation "],
  },
  {
    name: "Portfolio Site",
    url: "http://rojanmaharjan.com.np/",
    description: "Portfolio webapps show casing my projects",
    image: {
      base: "https://ik.imagekit.io/symetryn/portfolio_RAZC3rmmdt.jpg",
      thumbnail: "https://ik.imagekit.io/symetryn/portfolio_RAZC3rmmdt.jpg",
    },
    tech: [
      { name: "Nextjs" },
      { name: "React" },
      { name: "Chakra UI" },
      { name: "Framer Motion" },
    ],
    features: ["Custom Animation", "Statically generated SPA"],
  },
];
