import { SkillInterface, skills } from '@/lib/skills';
import MyTabs from '../Tabs';

export default function Skills() {
  return (
    <section id="hero" className="max-w-4xl mb-8">
      <h2 className="text-3xl font-sans font-bold antialiased mb-4 sm:text-4xl">
        My skills
      </h2>
      <MyTabs />
    </section>
  );
}
