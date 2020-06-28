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
        <div className="Recipes-Container flex">
          {recipes.map((r) => (
            <RecipeCard r={r} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .Recipes-Container {
            flex: 1 1 50%;
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps(context) {
  const recipes = await fetch(apiUrl + "/api/v1/recipes").then((r) => r.json());

  return {
    props: { recipes },
  };
}

const RecipeCard = ({ r }) => {
  return (
    <div className="Recipe-Card flex flex-col">
      <img src={apiUrl + r.img} />
      <a href={apiUrl + r.file}>{r.title}</a>{" "}
      <a href={githubUrl + r.file}>Edit</a>
      <style jsx>{`
        .Recipe-Card {
          max-height: 300px;
          max-width: 300px;
          margin: 1%;
          position: relative;
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};
