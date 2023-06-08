import Chat from "../assets/chat.svg";
import FashionImage from "../assets/Fashion.svg";
import Weather from "../assets/Weather-bro.svg";
import AI from "../assets/ai.svg";

const Projects = [
    {
      id: 1,
      image: Chat,
      title: "Chatzoid",
      category: ["React.js","Firebase","Javascript"],
      link:"https://github.com/shubhamgarg21156/chatzoid",
      projectLink:"",
      details:"Chatzoid is a real-time messaging platform built with React.js and Firebase database. With its intuitive UI, users can instantly connect with each other, share messages and images."
    },
    {
      id: 2,
      image: FashionImage,
      title: "Fashion-adda",
      category: ["React.js","Javascript"],
      link:"https://github.com/shubhamgarg21156/fashion-adda",
      projectLink:"https://fashion-adda.netlify.app/",
      details:"Fashion-Adda is a stylish and intuitive React app. It seamlessly integrates with an API to fetch an extensive collection of clothes products, ensuring a wide range of options for users to explore."
    },
    {
      id: 3,
      image: Weather,
      title: "Weather App",
      category: ["Javascript"],
      link:"https://github.com/shubhamgarg21156/weather",
      projectLink:"webweatherforecast.netlify.app/",
      details:"This website provides you with real-time weather information for any location around the world. With a clean and user-friendly interface, you can easily access all the weather details you need."
    },
    {
      id: 4,
      image: AI,
      title: "Imagecraft",
      category: ["MERN","Node.js","Javascript"],
      link:"https://github.com/shubhamgarg21156/imagecraft",
      projectLink:"imagecraft.vercel.app",
      details:"It is a MERN app which harnesses the power of the OpenAI API to create a unique and fascinating experience. By leveraging the capabilities of the OpenAI API, the app generates vivid and realistic images based on user prompts."
    }
  ];

  export default Projects;