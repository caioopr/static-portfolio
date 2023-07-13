import { SkillInterface, skills } from '@/lib/skills';

export default function Skills() {
  return (
    <section id="hero" className="max-w-4xl mb-8">
      <div className="flex flex-wrap max-w-4xl">
        {skills.map((skill) => {
          return (
            <div>
              <skill.logo />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
