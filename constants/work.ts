import { PortfolioData } from "./portfolioData";

export const work: PortfolioData[] = [
  {
    name: "Grace International",
    url: "https://grace.edu.np/",
    description:
      "Grace International, is a leading educational service provider established with the aim of delivering quality educational services. ",
    image: {
      thumbnail: "/portfolioImages/grace.jpg",
      base: "/portfolioImages/grace.jpg",
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
      thumbnail: "/portfolioImages/stayinfarm.jpg",
      base: "/portfolioImages/stayinfarm.jpg",
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
      base: "/portfolioImages/myparikshya.jpg",
      thumbnail: "/portfolioImages/myparikshya.jpg",
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
      thumbnail: "/portfolioImages/linder.jpg",
      base: "/portfolioImages/linder.jpg",
    },
    tech: [{ name: "Nextjs" }, { name: "React" }, { name: "Chakra UI" }],

    features: ["Easy to use", "Complete privacy as no server side is present"],
  },
  {
    name: "Covid 19 Update ",
    url: "http://rojanmaharjan.com.np/",
    description:
      "A web app for updates about the status of novel covid 19 in different countries",
    image: {
      base: "/portfolioImages/covidupdate.jpg",
      thumbnail: "/portfolioImages/covidupdate.jpg",
    },
    tech: [{ name: "Angular" }],
    features: ["Neumorphi UI", "Nepali Translation "],
  },
];
