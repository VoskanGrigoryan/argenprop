import { MenuIcon, UserIcon, WarrantyIcon } from "@/icons";
import Button from "../ui/Button";
import { useState } from "react";

export default function HomeContainer({ children }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="h-screen font-montserrat">
      <header className="h-[8%] flex justify-center items-center hidden md:flex lg:flex">
        <p className="hover:border-b-2 hover:border-green-500 border-b-2 border-white hover:cursor-pointer px-2">
          Emprendimientos
        </p>
        <p className="hover:border-b-2 hover:border-green-500 border-b-2 border-white hover:cursor-pointer px-2">
          Publicar
        </p>
        <p className="hover:border-b-2 hover:border-green-500 border-b-2 border-white hover:cursor-pointer px-2">
          Noticias
        </p>

        <Button>
          <p>Cotizá gratis tu garantía</p>
          <WarrantyIcon height={20} className="mt-0.5 ml-1 fill-white" />
        </Button>
        <Button>
          <p>Acceder</p> <UserIcon height={20} className="mt-0.5 ml-1 fill-white" />
        </Button>
      </header>

      {/* Mobile header */}

      <div className="h-[5%] flex md:hidden lg:hidden justify-left items-center bg-green-500">
        <MenuIcon
          height={36}
          className="fill-white ml-2"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      {/* Finish Mobile header */}

      <div className="flex md:hidden">
        {isMenuOpen ? (
          <div className="bg-green-600 absolute block z-50 h-[95%] w-[80%] pt-4 text-white">
            <ul className="">
              <li className="border-b mx-4 mb-4">Emprendimientos</li>
              <li className="border-b mx-4 mb-4">Publicar</li>
              <li className="border-b mx-4 mb-4">Noticias</li>
              <li className="border-b mx-4 mb-4  flex justify-between">
                <p>Cotizá gratis tu garantía </p>
                <WarrantyIcon height={20} className="fill-white" />
              </li>
              <li className="border-b mx-4 mb-4 flex justify-between">
                <p>Acceder</p>
                <UserIcon height={20} className="fill-white" />
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="h-[95%] md:h-[75%]  backgroundImageHome justify-center flex items-center">
        {children}
      </div>

      <div className="h-[0%] md:h-[17%] bgDark"></div>
      {/* Mobile footer */}
      {/* <div className="h-[5%] flex md:hidden lg:hidden justify-center items-center text-sm text-center">
        ¡Encontrá las mejores propiedades en venta y alquiler!
      </div> */}
      {/* Finish Mobile footer */}

      {/*  <footer className="h-[8%] flex justify-center items-center hidden md:flex lg:flex text-center">
       ¡Encontrá las mejores propiedades en venta y alquiler! <br></br>{" "}
        Argenprop es el portal inmobiliario líder en búsqueda de propiedades e
        inmuebles en Argentina.
      </footer>  */}
    </main>
  );
}
