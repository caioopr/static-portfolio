import fs from 'fs';
import matter from 'gray-matter';
import getPostMetadata from '@/lib/getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div>
        <h1>{post.data.title}</h1>
        <p>{post.data.date}</p>
      </div>

      <article>{post.content}</article>
    </div>
  );
}
