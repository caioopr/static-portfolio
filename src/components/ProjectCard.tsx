import { ProjectInterface } from '@/lib/projects';

export default function ProjectCard(post: ProjectInterface) {
  return (
    <article
      key={post.name}
      className="flex flex-col items-start justify-between"
    >
      <div className="group w-full h-full relative border border-gray-300 p-4 dark:border-neutral-700">
        <h3 className="mt-1.5 text-md font-semibold leading-6 group-hover:text-gray-700">
          <a href={post.repository}>
            <span className="absolute inset-0" />
            {post.name}
          </a>
        </h3>
        <div className="flex flex-wrap mt-1.5 items-center gap-x-2 text-xs">
          {post.tech_stack?.map((stack) => (
            <p
              key={post.name + stack.tech_name}
              className="relative z-10 mb-1 border border-gray-300 rounded-sm  px-1.5 py-1.5 font-medium  hover:bg-gray-100"
            >
              {stack.tech_name}
            </p>
          ))}
        </div>
        <p className="mt-1.5  text-sm  text-gray-700">{post.description}</p>
      </div>
    </article>
  );
}
