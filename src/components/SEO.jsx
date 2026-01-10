import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url, image }) => {
  const canonicalUrl = url
    ? url.split("?")[0].split("#")[0]
    : "https://www.global-investors-forum.com";

  const metaImage = image
    ? image
    : "https://www.global-investors-forum.com/default-social.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": title || "GAIS",
    "url": canonicalUrl
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
