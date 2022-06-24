import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="icon" href="https://github.com/K3RN3L32/nextjs-blog-theme/blob/main/VestigeLogoVsmall.png?raw=true" sizes="128x128" type="image/png"/>
    </Head>
  );
}
