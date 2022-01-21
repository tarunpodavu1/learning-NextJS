import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <Link href="/news/next-js-is-a-great-framework">
          <li>NextJS is great Framework</li>
        </Link>
        <li>Great article</li>
      </ul>
    </>
  );
};

export default NewsPage;
