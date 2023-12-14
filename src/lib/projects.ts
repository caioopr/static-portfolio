import { IconType } from 'react-icons';
import { SiNestjs } from 'react-icons/si';

export interface ProjectInterface {

  name: string,
  tech_stack:
    {
      tech_name: string,
    }[],
  description: string,
  repository: string
}

export const projects: ProjectInterface[] = [
  {
    name:"Products display",
    tech_stack: [
      {
        tech_name: "TypeScript",
      },
      {
        tech_name: "Vue.js",
      },
      {
        tech_name: "Java",

      },
      {
        tech_name: "Spring Boot",
      },
      {
        tech_name: "PostgreSQL",
      },
      {
        tech_name: "Docker",
      }
    ],
    description:"A display and management system for products stock that helps the customer and the store owner to keep track of product availability and cost.",
    repository: "https://github.com/caioopr/products-display"
  },
  {
    name:"AppPointment",
    tech_stack: [
      {
        tech_name: "TypeScript",
      },
      {
        tech_name: "Node.js",
      },
      {
        tech_name: "Nest.js",
      },
      {
        tech_name: "Vue.js",
      },
      {
        tech_name: "PostgreSQL",
      },
      {
        tech_name: "Docker",
      },
      {
        tech_name: "Kubernetes",
      }
    ],
    description:"An easy way of scheduling and manage an appointment for both client and consultant.",
    repository: "https://github.com/caioopr/APPpointment"
  },
  {
    name:"Epet",
    tech_stack: [
      {
        tech_name: "Java",
      },
      {
        tech_name: "Spring Boot",
      },
      {
        tech_name: "Thymeleaf",
      },
      {
        tech_name: "PostgreSQL",
      },
      {
        tech_name: "Docker",
      }
    ],
    description:"A petshot online system",
    repository: "https://github.com/caioopr/APPpointment" //TODO
  },
  {
    name:"Hare",
    tech_stack: [
      {
        tech_name: "Kotlin",
      },
      {
        tech_name: "Android",
      },
      {
        tech_name: "Firebase",
      },
      {
        tech_name: "SQLite",
      }
    ],
    description:"Keep up your habits and create new ones.",
    repository: "https://github.com/caioopr/APPpointment" //TODO
  }
]