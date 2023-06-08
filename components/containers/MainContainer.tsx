import { UserIcon, WarrantyIcon, MenuIcon } from "@/icons";
import Button from "../ui/Button";
import { useState } from "react";

export default function MainContainer({ children }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="h-screen w-screen font-montserrat">
      <header className="h-[8%] flex justify-center items-center hidden md:flex lg:flex shadow-lg">
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
      <div className="h-[8%] flex md:hidden lg:hidden justify-left items-center bg-green-500">
        <MenuIcon
          height={36}
          className="fill-white ml-2"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>

      {/* body tag replaced by div tag because for some reason it creates hidration issue??? */}
      <div className="h-[92%] flex justify-center">{children}</div>
    </main>
  );
}
