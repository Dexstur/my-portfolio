import decablogImage from "/decablog-screenshot.png";
import medbayImage from "/medbay.png";

export interface IProject {
  name: string;
  description: string;
  image?: string;
  link: string;
}

const decablog: IProject = {
  name: "Decablog",
  description:
    "A blog app built with React(typescript, styled-components), nodejs(express, typescript), and mongodb(mongoose). ",
  image: decablogImage,
  link: "https://decablog16.onrender.com",
};

const medbay: IProject = {
  name: "Medbay",
  description:
    "A medical report application built with node and server-side rendering using ejs. Try it out with emails: test@mail.com, admin1@mail.com (doctor and admin respectively) and password: testing",
  link: "https://hospital-report-system.onrender.com/",
  image: medbayImage,
};

const projects: IProject[] = [decablog, medbay];

export default projects;
