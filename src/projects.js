import Google from "assets/services/google-logo.png";
import Vite from "assets/services/vite-logo.svg";
import Threejs from "assets/services/threejs-logo.png";
import Axios from "assets/services/axios-logo.png";
import PWA from "assets/services/pwa-logo.png";
import GoogleLighthouse from "assets/services/google-lighthouse-logo.png";
import Chartjs from "assets/services/chartjs-logo.svg";
import SocketIO from "assets/services/socketio-logo.png";
import Commercejs from "assets/services/commercejs-logo.png";

import otreraImg from "assets/otrera-performance-light-2.png";
import bambergaImg from "assets/bamberga-2.png";
import weatherBeachImg from "assets/weatherBeach-2.png";
import covidTrackerImg from "assets/covidtracker2.png";
import iochatImg from "assets/iochat-2.png";
import honeyThumb from 'assets/honey-thumb.png';
import devPathImg from "assets/dyno-screenshot-backdrop-light.png";

import csharp_logo from "assets/key-feature/csharp-logo.png";

export default [
  {
    title: "Strength Training",
    imgSrc: otreraImg,
    href: "https://otrera.netlify.app",
    features: [
      {
        id: 1,
        imgSrc: Commercejs,
        altText: "Commerce.js",
        title: "Commerce.js",
        text:
          "Commerce.js is a headless eCommerce platform built specifically for develoeprs and designers to build custom eCommerce solutions.",
      },
      {
        id: 2,
        imgSrc: Google,
        altText: "Google OAuth",
        title: "Google OAuth",
        text:
          "OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites without giving them the passwords.",
      },
    ],
  },
  {
    title: "Dyno",
    href: "https://devpath.azurewebsites.net/",
    imgSrc: devPathImg,
    features: [
      {
        id: 1,
        imgSrc: csharp_logo,
        altText: "C# .NET",
        title: "C# .NET",
        text:
          "The .NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library called Framework Class Library and provides language interoperability across several programming languages.",
      },
    ],
  },
  {
    title: "Bamberga Minerals",
    imgSrc: bambergaImg,
    href: "https://bamberga.netlify.app",
    features: [
      {
        id: 1,
        imgSrc: Vite,
        altText: "Vite",
        title: "Vite",
        text: "Vite is a front end build tool and dev server.",
      },
      {
        id: 2,
        imgSrc: Threejs,
        altText: "Three.js",
        title: "Three.js",
        text:
          "Three.js is a cross-browser JavaScript library and application programming interface (API) used to create and display animated 3D computer graphics in a web browser using WebGL.",
      },
    ],
  },
  {
    title: "Weather Beach",
    href: "https://weatherbeach.netlify.app/",
    imgSrc: weatherBeachImg,
    features: [
      {
        id: 1,
        imgSrc: PWA,
        altText: "PWA",
        title: "Progressive Web App",
        text:
          "Progressive Web Apps use services workers and manifests to give users an experience on par with native apps.",
      },
      {
        id: 2,
        imgSrc: GoogleLighthouse,
        altText: "Google Lighthouse",
        title: "Google Lighthouse",
        text:
          "Google Lighthouse audits progressive web applications for performance, accessibility, and search engine optimization.",
      },
      {
        id: 3,
        imgSrc: Axios,
        altText: "Axios",
        title: "Axios",
        text:
          "Axios is a promise-based HTTP Client for node.js and the browser. On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.",
      },
    ],
  },
  {
    title: "Covid Tracker",
    href: "https://v-tracker.netlify.app/",
    imgSrc: covidTrackerImg,
    features: [
      {
        id: 1,
        imgSrc: Chartjs,
        altText: "Chart.js",
        title: "Chart.js",
        text:
          "Chart.js is an open-source JavaScript library for data visualization.",
      },
    ],
  },
  {
    title: "IO Chat",
    href: "https://io-chat.netlify.app/",
    imgSrc: iochatImg,
    features: [
      {
        id: 1,
        imgSrc: SocketIO,
        altText: "Socket.IO",
        title: "Socket.IO",
        text:
          "Socket.IO is a JavaScript library that enables realtime, bi-directional communication between web clients and servers.",
      },
    ],
  },
  {
    title: "Cumberland Honey Shop",
    href: "https://cumberlandhoney.netlify.app/",
    imgSrc: honeyThumb,
    features: [
      {
        id: 1,
        imgSrc: Commercejs,
        altText: "Commerce.js",
        title: "Commerce.js",
        text:
          "Commerce.js is an API-driven headless commerce infrastructure for developers.",
      },
    ],
  },
];
