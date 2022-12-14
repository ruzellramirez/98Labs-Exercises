import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Head>
        <title>Ruzell Ramirez: Full Stack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Nothing to see here</p>
      <Link href="/98labs">Go to 98 Labs exercises &gt;</Link>
    </div>
  );
};

export default Home;
