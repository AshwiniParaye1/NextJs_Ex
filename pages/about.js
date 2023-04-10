import React from "react";

// const About = ({ articles }) => {
const About = () => {
  // console.log("data==", articles);
  return (
    <div>
      <h1>About</h1>
      {/* {articles.map((articleList) => {
        return <h4 style={{ color: "orange" }}>{articleList.title}</h4>;
      })} */}
    </div>
  );
};

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${"ashwini-paraye"}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   const articles = data.items;
//   // Pass data to the page via props
//   return { props: { articles } };
// }

export default About;
