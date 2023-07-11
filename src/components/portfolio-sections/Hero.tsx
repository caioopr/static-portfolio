import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

const socials = [
  {
    name: 'Github',
    href: 'https://github.com/caioopr',
    icon: IoLogoGithub,
  },
  {
    name: 'Linkedin',
    href: 'www.linkedin.com/in/caioopr',
    icon: IoLogoLinkedin,
  },
  {
    name: 'Gmail',
    href: 'caioppubli@gmail.com',
    icon: IoMail,
  },
];

export default function Hero() {
  return (
    <section id="hero" className="max-w-4xl mb-8">
      <div className="flex flex-col">
        <h1 className="text-3xl font-sans font-bold antialiased sm:text-4xl">
          Hi there,<br></br>{' '}
          <span className="text-4xl sm:text-5xl">i'm Caio!</span>
        </h1>
        <div className="max-w-xl">
          <p className="text-xl sm:text-2xl font-sans text-gray-700">
            I'm a full-stack/back-end web developer and a Computer Science
            student based in Brazil.
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-x-1.5 mt-1.5">
          {socials.map((item) => {
            return (
              <Link href={item.href} key={item.name}>
                <item.icon className="w-6 h-6 transition hover:fill-blue-600" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
