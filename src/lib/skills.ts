
import { IconType } from 'react-icons';
import {BiLogoAndroid, BiLogoCss3, BiLogoDjango, BiLogoDocker, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoKubernetes, BiLogoMongodb, BiLogoNodejs, BiLogoPython, BiLogoReact, BiLogoSass, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoTypescript, BiLogoVuejs,} from 'react-icons/bi'
import { SiChakraui, SiFigma, SiGit, SiKotlin, SiMysql, SiNestjs, SiNextdotjs, SiNumpy, SiOpencv, SiPandas, SiPostgresql, SiRedis, SiScipy, SiTensorflow } from 'react-icons/si'

export interface SkillInterface{
  name:string;
  logo:IconType;
  packType:string;
  tag:string;
}

export const skills:SkillInterface[] = [
  {
    name: 'Java',
    logo: BiLogoJava,
    packType: 'bi',
    tag: 'back-end mobile',
  },
  {
    name: 'Spring Boot',
    logo: BiLogoSpringBoot,
    packType: 'bi',
    tag: 'back-end',
  },
  {
    name: 'TypeScript',
    logo: BiLogoTypescript,
    packType: 'bi',
    tag: 'back-end',
  },
  {
    name: 'Node.js',
    logo: BiLogoNodejs,
    packType: 'bi',
    tag: 'back-end',
  },
  {
    name: 'Nest.js',
    logo: SiNestjs,
    packType: 'si',
    tag: 'back-end',
  },
  {
    name: 'Python',
    logo: BiLogoPython,
    packType: 'bi',
    tag: 'back-end data-science',
  },
  {
    name: 'Django',
    logo: BiLogoDjango,
    packType: 'bi',
    tag: 'back-end',
  },
  {
    name: 'PostgreSQL',
    logo: SiPostgresql,
    packType: 'si',
    tag: 'back-end',
  },
  {
    name: 'MySQL',
    logo: SiMysql,
    packType: 'si',
    tag: 'back-end',
  },
  {
    name: 'MongoDB',
    logo: BiLogoMongodb,
    packType: 'bi',
    tag: 'back-end',
  },
  {
    name: 'Redis',
    logo: SiRedis,
    packType: 'si',
    tag: 'back-end',
  },
  {
    name: 'Git',
    logo: SiGit,
    packType: 'si',
    tag: 'tool',
  },
  {
    name: 'Docker',
    logo: BiLogoDocker,
    packType: 'bi',
    tag: 'tool',
  },
  {
    name: 'Kubernets',
    logo: BiLogoKubernetes,
    packType: 'bi',
    tag: 'tool',
  },
  {
    name: 'HTML',
    logo: BiLogoHtml5,
    packType: 'bi',
    tag: 'front-end',
  },
  {
    name: 'CSS',
    logo: BiLogoCss3,
    packType: 'bi',
    tag: 'front-end',
  },
  {
    name: 'JavaScript',
    logo: BiLogoJavascript,
    packType: 'bi',
    tag: 'front-end',
  },
  {
    name: 'Vue',
    logo: BiLogoVuejs,
    packType: 'bi',
    tag: 'front-end',
  },
  {
    name: 'React',
    logo: BiLogoReact,
    packType: 'bi',
    tag: 'front-end',
  },
  {
    name: 'Nextjs',
    logo: SiNextdotjs,
    packType: 'si',
    tag: 'front-end',
  },
  {
    name: 'Sass',
    logo: BiLogoSass,
    packType: 'bi',
    tag: 'front-end',
  },
  {
    name: 'Tailwind CSS',
    logo: BiLogoTailwindCss,
    packType: 'bi',
    tag: 'front-end',
  },
  {
    name: 'ChakraUI',
    logo: SiChakraui,
    packType: 'si',
    tag: 'front-end',
  },
  {
    name: 'Figma',
    logo: SiFigma,
    packType: 'bi',
    tag: 'tool',
  },
  {
    name: 'Android',
    logo: BiLogoAndroid,
    packType: 'bi',
    tag: 'mobile',
  },
  {
    name: 'Kotlin',
    logo: SiKotlin,
    packType: 'si',
    tag: 'mobile',
  },
  {
    name: 'React Native',
    logo: BiLogoReact,
    packType: 'bi',
    tag: 'mobile',
  },
  {
    name: 'Pandas',
    logo: SiPandas,
    packType: 'si',
    tag: 'data-science',
  },
  {
    name: 'Numpy',
    logo: SiNumpy,
    packType: 'si',
    tag: 'data-science',
  },
  {
    name: 'Scipy',
    logo: SiScipy,
    packType: 'si',
    tag: 'data-science',
  },
  {
    name: 'Tensorflow',
    logo: SiTensorflow,
    packType: 'si',
    tag: 'data-science',
  },
  {
    name: 'Opencv',
    logo: SiOpencv,
    packType: 'si',
    tag: 'data-science',
  },
];