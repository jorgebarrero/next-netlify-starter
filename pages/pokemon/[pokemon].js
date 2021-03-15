import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Pokemon({ pokemon }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/blog');
  };

  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0., witdh=device-width"
        />
      </Head>
      <div>
        Welcome, {pokemon.name}!
        <img src={pokemon?.sprites.front_default} />
      </div>
      <button onClick={handleClick}>Click me!!!</button>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemon = await res.json();

  let paths = pokemon.results.map((x) => {
    return `/pokemon/${x.name}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`,
  );
  const pokemon = await res.json();

  return {
    props: {
      pokemon,
    },
  };
}
