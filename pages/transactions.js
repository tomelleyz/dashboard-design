import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Transactions</title>
        <meta name="description" content="Klasha dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ef2c5a"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout></Layout>
      </main>
    </>
  );
}
