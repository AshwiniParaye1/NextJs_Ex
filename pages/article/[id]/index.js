import React from "react";
import Link from "next/link";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query();
  // console.log("id>>>>>", article.id);

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <button>
        <Link href={"/"}>Go Back</Link>
      </button>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    ` https://jsonplaceholder.typicode.com/posts/${context.params.id} `
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
