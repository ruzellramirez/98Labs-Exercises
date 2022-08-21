import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const XYZProblem: NextPage = () => {
  const [values, setValues] = useState(null);
  return (
    <section>
      <Head>
        <title>98 Labs Coding Exercises - XYZ Problem</title>
      </Head>
      <div className="container">
        <div className="row"></div>
      </div>
    </section>
  );
};

export default XYZProblem;
