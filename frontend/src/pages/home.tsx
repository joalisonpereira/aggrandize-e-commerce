import Head from "next/head";
import Button from "src/components/Button";
import Layout from "src/components/Layout";
import { Container } from "src/styles/pages/home";

function Home() {
  return (
    <>
      <Head>
        <title>Aggrandize E-Commerce</title>
      </Head>
      <Layout>
        <Container>
          <section>
            <div className="centered">
              <h1>APROVEITE NOSSOS DESCONTOS</h1>
              <Button>Comprar</Button>
            </div>
            <div className="overlay" />
          </section>
        </Container>
      </Layout>
    </>
  );
}

export default Home;
