import { NextSeo } from "next-seo";
import React from "react";

const SEO = () => {
  return (
    <>
      <NextSeo
        title="honeyïce"
        description="We promote love and authenticity."
        canonical="https://honeyïce.com"
        openGraph={{
          url: "https://honeyïce.com",
          description: "We promote love and authenticity.",
          images: [
            {
              url: "/banner.png",
              width: 1200,
              height: 630,
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
        }}
      />
    </>
  );
};

export default SEO;
