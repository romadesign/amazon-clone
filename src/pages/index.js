import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/Product/ProductFeed";

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Romazon</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* ----Banner ---- */}
        <Banner /> 
        {/* ----ProductFeed ---- */}
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
  .then(res=>res.json()
  )
  

  return {
    props: {
      products,
    }
  }
}