import React from 'react';
import Head from 'next/head';

const Meta = ({ title, keywords, descriptions }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
