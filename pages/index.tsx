import HomeContainer from "@/components/containers/HomeContainer";
import HomeForm from "@/components/forms/HomeForm";
import Head from "next/head";

export default function Home() {
  return (
    <HomeContainer>
      <>
        <Head>
          <title>Argenprop</title>
        </Head>
        <div>
          <div className="text-center">
            <p className="homeText text-2xl">Propiedades en venta y alquiler</p>
            <p className="homeText text-4xl">
              Un lugar para cada etapa de tu vida
            </p>
          </div>
          <div className="flex mt-8 justify-center">
            <HomeForm />
          </div>
        </div>
      </>
    </HomeContainer>
  );
}
