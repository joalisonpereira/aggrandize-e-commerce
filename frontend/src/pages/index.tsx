import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "src/components/Layout";
import ProductItem, { ProductItemProps } from "src/components/ProductItem";
import { API_URL } from "src/config";
import { Container, HeroButton } from "src/styles/pages/home";
import { chunk } from "src/utils";

export interface HomeProps {
  products: ProductItemProps["item"][][];
}

function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Aggrandize E-Commerce</title>
      </Head>
      <Layout>
        <Container>
          <section className="hero">
            <div className="centered">
              <h1>APROVEITE NOSSOS DESCONTOS</h1>
              <HeroButton href="#produtos">Comprar</HeroButton>
            </div>
            <div className="overlay" />
          </section>
          <section className="products container" id="produtos">
            <h1>Produtos em destaque</h1>
            {products.map((row, index) => (
              <div className="row mt-5" key={index}>
                {row.map((item) => (
                  <div className="col-12 col-md-4" key={item.id}>
                    <ProductItem item={item} />
                  </div>
                ))}
              </div>
            ))}
          </section>
        </Container>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  return { props: { products: chunk(data.products, 3) } };
};

export default Home;
