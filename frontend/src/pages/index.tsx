import { GetServerSideProps } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Layout from "src/components/Layout";
import ProductItem, { ProductItemProps } from "src/components/ProductItem";
import api from "src/services/api";
import { Container, HeroButton } from "src/styles/pages/home";
import { chunk } from "src/utils";

export interface HomeProps {
  products: ProductItemProps["item"][][];
}

function Home({ products }: HomeProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const fetchFavorites = useCallback(async () => {
    try {
      const { data } = await api.get("/favorites");

      setFavorites(data);
    } catch (error: any) {
      //Continue
    }
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  async function favorite(id: number) {
    await api.post("/favorites", { favoriteId: id });

    await fetchFavorites();
  }

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
                    <ProductItem
                      item={item}
                      onFavorite={favorite}
                      isFavorited={favorites.includes(item.id)}
                    />
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data } = await api.get("/", {
    headers: { cookie: req.headers.cookie },
  });

  return { props: { products: chunk(data, 3) } };
};

export default Home;
