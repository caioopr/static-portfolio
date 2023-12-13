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
    description:"A display and management system for products stock that helps the customer and the store owner to keep track of product availability and cost",
    repository: "https://github.com/caioopr/products-display"
  },
  {
    name:"Project",
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
    description:"A display and management system for products stock that helps the customer and the store owner to keep track of product availability and cost",
    repository: "https://github.com/caioopr/products-display"
  },
   {
    name:"Projecttttt",
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
    description:"A display and management system for products stock that helps the customer and the store owner to keep track of product availability and cost",
    repository: "https://github.com/caioopr/products-display"
  }
]