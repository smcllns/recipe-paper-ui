import Head from "next/head";

const apiUrl = "https://recipe-paper.vercel.app";
const githubUrl = "https://github.com/smcllns/recipe-paper/tree/master";

export default ({ recipes }) => {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="px-2">
        <h1 className="text-2xl font-bold py-6">Recipes</h1>
        <ol>
          {recipes.map((r) => (
            <li>
              <Recipe r={r} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const recipes = await fetch(apiUrl + "/api/v1/recipes").then((r) => r.json());

  return {
    props: { recipes },
  };
}

const Recipe = ({ r }) => {
  const editSrc = githubUrl + "/" + r.file;
  const imgSrc = apiUrl + "/" + r.img;
  return (
    <p>
      {/* <img src={imgSrc} /> */}
      <a href={editSrc}>{r.title}</a>
    </p>
  );
};
