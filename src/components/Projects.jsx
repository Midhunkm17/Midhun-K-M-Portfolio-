import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: "/Screenshot 2025-02-15 at 8.52.21 PM.png",
    title: "Shopify",
    description:
      "This is an eCommerce App is an online shopping platform where users can create accounts, log in, and browse a variety of products, including clothing, electronics, and groceries. The app offers a seamless shopping experience with category-based product browsing, order placement, and order history viewing, also they can post product review. Users can also update their profiles and make test transactions using Razorpay for development purposes.",
    technologies: [
      "React Js",
      "Material UI",
      "Axios",
      "Redux",
      "Razorpay",
      "Node Js",
      "Express Js",
      "Mongo DB",
    ],
    live_link: "https://ecommerce-frontend-rosy.onrender.com",
  },
  {
    image: "/Screenshot 2025-02-15 at 8.56.30 PM.png",
    title: "Shopify Admin",
    description:
      "This Admin Panel is a robust dashboard that enables administrators to efficiently manage the eCommerce platform. It provides features for sales analytics, product management, order management, and transaction monitoring. Admins can receive real-time notifications for new orders and important updates.",
    technologies: [
      "React Js",
      "Material UI",
      "Redux",
      "Socket IO",
      "Node Js",
      "Express Js",
      "Mongo DB",
    ],
    live_link: "https://ecommerce-admin-a83x.onrender.com/",
  },
  {
    image: "/Screenshot 2025-02-15 at 9.06.53 PM.png",
    title: "Kozhencherry Real Estate",
    description:
      "The Real Estate Listing App is a user-friendly platform designed for property seekers to explore a variety of real estate options, including lands, apartments, and houses for sale or rent. The app allows users to search, filter, and view detailed property listings based on their preferences such as price, location, and property type. Additionally, users can view property locations on Google Maps, ensuring better navigation and accessibility. The app also enables direct communication with the admin via WhatsApp and phone calls for inquiries.",
    technologies: [
      "React Js",
      "Tailwind CSS",
      "Swiper Js",
      "Socket IO",
      "Node Js",
      "Express Js",
      "Mongo DB",
    ],
    live_link: "https://kozhencherryrealestate.com/",
  },
  {
    image: "/Screenshot 2025-02-15 at 9.14.13 PM.png",
    title: "Blog.com",
    description:
      "This is a blog app built with ReactJS and Firebase for real-time data storage. Enable users to share, view, and interact with blog posts. Implement user authentication for secure login/logout. Utilize React components for a modular structure, and Firebase's Firestore for efficient data management. Ensure a responsive design for optimal user experience across devices.",
    technologies: ["React Js", "Bootstrap", "Firebase"],
    live_link: "https://blog-firebase-psi.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project?.image}
          alt="Project Image"
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
          onClick={() =>
            window.open(project?.live_link, "_blank", "noopener,noreferrer")
          }
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project?.title}</div>
            <p className="text-gray-400">{project?.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project?.technologies?.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
