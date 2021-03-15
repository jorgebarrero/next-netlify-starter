import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog page</title>
        <meta
          name="viewport"
          content="initial-scale=1.0., witdh=device-width"
        />
      </Head>
      <div>Welcome, to my Blog!!</div>
      <Link href="/">
        <a>Go to home page</a>
      </Link>
      {/* <Link href="/pokemon">
        <a>Pokemon</a>
      </Link> */}
    </>
  );
}
