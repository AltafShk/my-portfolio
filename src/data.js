// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "AltafShk";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: (
      <Icon
        icon="vscode-icons:file-type-html"
        className="display-4 text-primary"
      />
    ),
    name: "HTML5",
  },
  {
    id: 2,
    skill: (
      <Icon
        icon="vscode-icons:file-type-css"
        className="display-4 text-primary"
      />
    ),
    name: "CSS3",
  },
  {
    id: 3,
    skill: (
      <Icon
        icon="vscode-icons:file-type-js"
        className="display-4 text-primary"
      />
    ),
    name: "JavaScript",
  },
  {
    id: 4,
    skill: (
      <Icon
        icon="vscode-icons:file-type-reactjs"
        className="display-4 text-primary"
      />
    ),
    name: "React",
  },
  {
    id: 5,
    skill: (
      <Icon
        icon="vscode-icons:file-type-angular"
        className="display-4 text-primary"
      />
    ),
    name: "Angular",
  },
  {
    id: 7,
    skill: (
      <Icon
        icon="vscode-icons:file-type-svelte"
        className="display-4 text-primary"
      />
    ),
    name: "Svelte",
  },
  {
    id: 8,
    skill: (
      <Icon
        icon="vscode-icons:file-type-node"
        className="display-4 text-primary"
      />
    ),
    name: "Node.js",
  },
  {
    id: 9,
    skill: <Icon icon="logos:firebase" className="display-4 text-primary" />,
    name: "Firebase",
  },
  {
    id: 10,
    skill: (
      <Icon
        icon="vscode-icons:file-type-mongo"
        className="display-4 text-primary"
      />
    ),
    name: "MongoDB",
  },
  {
    id: 11,
    skill: (
      <Icon
        icon="vscode-icons:file-type-typescript"
        className="display-4 text-primary"
      />
    ),
    name: "TypeScript",
  },
  {
    id: 12,
    skill: (
      <Icon
        icon="vscode-icons:file-type-aws"
        className="display-4 text-primary"
      />
    ),
    name: "AWS",
  },
  {
    id: 13,
    skill: (
      <Icon
        icon="vscode-icons:file-type-python"
        className="display-4 text-primary"
      />
    ),
    name: "Python",
  },
];








// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
