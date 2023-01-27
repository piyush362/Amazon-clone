import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0 by Piyush sagar</title>
      </Head>
      {/* <h1 className="bg-red-300">hello world</h1> */}

      {/* header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner  */}
        <Banner />
        {/* product feed */}
        <ProductFeed products={products} />(
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
