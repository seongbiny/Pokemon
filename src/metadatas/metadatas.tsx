import { Helmet } from "react-helmet-async";
import React from "react";

export function PageHomeMetas() {
  return (
    <Helmet>
      <meta property="og:site_name" content="포켓몬 도감" />
      <meta property="og:title" content="포켓몬 도감" />
      <meta
        property="og:url"
        content="https://pokemon-smoky-nine.vercel.app/"
      />
      <meta
        property="og:description"
        content="poke API를 이용한 포켓몬 도감입니다."
      />
    </Helmet>
  );
}

export function PageDetailMetas() {
  return (
    <Helmet>
      <meta property="og:site_name" content="포켓몬 도감" />
      <meta property="og:title" content="포켓몬 도감" />
      <meta
        property="og:url"
        content="https://pokemon-smoky-nine.vercel.app/"
      />
      <meta
        property="og:description"
        content="poke API를 이용한 포켓몬 도감입니다."
      />
    </Helmet>
  );
}
