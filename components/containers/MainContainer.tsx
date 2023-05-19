import { UserIcon, WarrantyIcon } from "@/icons";
import Button from "../ui/Button";

export default function MainContainer({ children }: any) {
  return (
    <main className="h-screen font-montserrat">
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
      <body className="h-[92%] flex justify-center px-48 ">{children}</body>
      <footer></footer>
    </main>
  );
}
