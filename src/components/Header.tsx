import Link from 'next/link';

export default function Header(props: any) {
  return (
    <header>
      <div className=" text-center bg-indigo-800  ">
        <Link href="/">
          <h1 className="text-4xl text-white font-bold py-4">Ca.io</h1>
        </Link>
        <Link href="/blog">
          <h1 className="text-xl text-white font-bold py-4">blog</h1>
        </Link>
      </div>
    </header>
  );
}
