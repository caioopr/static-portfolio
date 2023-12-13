import { projects } from '@/lib/projects';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-sans font-bold antialiased mb-4 sm:text-4xl">
        Projects
      </h2>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-2 ">
        {projects.map((post) => (
          <ProjectCard key={post.name} {...post} />
        ))}
      </div>
    </div>
  );
}
