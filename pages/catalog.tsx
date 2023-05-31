import MainContainer from "@/components/containers/MainContainer";
import { CatalogCard } from "@/components/ui/CatalogCard";
import { BedIcon, CalendarIcon, DoorIcon } from "@/icons";

export default function Catalog() {
  const cards = [
    {
      title: "title1",
      description:
        "AMOBLADO  AMOBLADO y TOTALMENTE EQUIPADO. Ubicado en una de las mejorres zonas de Buenos Aires",
      price: "160.000",
      expenses: "20.000",
      currency: "$",
      address: {
        address: "Av. Gral las Heras",
        addressNumber: "2500",
        floor: "piso 2",
        neighborhood: "Balvanera",
        state: "Capital Federal",
      },
      indoorMeters: "32",
      outdoorMeters: "2",
      totalMeters: "34",
      dorms: "Mono",
      years: "5",
      realEstate: "ARGULES ASOCIADOS",
    },
    {
      title: "title2",
      description: "Description 2",
      price: "450",
      expenses: "12.000",
      currency: "USD",
      address: {
        address: "Av. Gral las Heras",
        addressNumber: "2500",
        floor: "piso 2",
        neighborhood: "Balvanera",
        state: "Capital Federal",
      },
      indoorMeters: "32",
      outdoorMeters: "2",
      totalMeters: "34",
      dorms: "Mono",
      years: "20",
      realEstate: "ARGULES ASOCIADOS",
    },
    {
      title: "title3",
      description: "Description 3",
      price: "600",
      expenses: "18.000",
      currency: "USD",
      address: {
        address: "Av. Gral las Heras",
        addressNumber: "2500",
        floor: "piso 2",
        neighborhood: "Balvanera",
        state: "Capital Federal",
      },
      indoorMeters: "32",
      outdoorMeters: "2",
      totalMeters: "34",
      dorms: "Mono",
      years: "A estrenar",
      realEstate: "ARGULES ASOCIADOS",
    },
    {
      title: "title4",
      description: "Description 4",
      price: "100.000",
      expenses: "7.500",
      currency: "$",
      address: {
        address: "Av. Gral las Heras",
        addressNumber: "2500",
        floor: "piso 2",
        neighborhood: "Las Heras",
        state: "Capital Federal",
      },
      indoorMeters: "38",
      outdoorMeters: "4",
      totalMeters: "42",
      dorms: "1",
      years: "10",
      realEstate: "ARGULES ASOCIADOS",
    },
  ];

  const lorem =
    "Loremoribus nemo accusamus illum ad totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel excepturi eligendi repellat voluptatum consequuntur esse minima. Neque, maxime cumque molestias asperiores ullam repellendus, placeat temporibus nemo accusamus illum ad totam.";
  return (
    <MainContainer>
      <div className="w-full justify-center overflow-x-hidden xl:px-60 lg:px-20 md:px-10">
        <CatalogCard
          cards={cards}
          renderItem={(item) => {
            return (
              <div
                className="shadow-lg p-4 lg:m-6 md:min-h-[350px] rounded md:flex"
                key={item.title}>
                <div className="md:w-[600px] bg-green-500 md:mr-12">Carousel</div>
                <div className="mt-4 md:w-[1200px]">
                  <div className="flex">
                    <p className="font-extrabold text-2xl">
                      {item.currency}
                      &nbsp;
                      {item.price}
                    </p>
                    <p className="mt-2">&nbsp; + ${item.expenses}</p>
                  </div>

                  <div className="font-extrabold text-2xl flex">
                    <p>{item.address.address}</p>&nbsp; <p>{item.address.addressNumber}</p>
                  </div>

                  <div className=" hidden md:flex">
                    Departamento en &nbsp;<p> {item.address.neighborhood}</p>, {item.address.state}
                  </div>

                  {/* Mobile version */}
                  <div className="flex md:hidden">
                    <p> {item.address.neighborhood}</p>, {item.address.state}
                  </div>

                  <div className="flex mt-4">
                    <div className="hidden md:flex">
                      <DoorIcon height="24" className="fill-gray-600" />
                      <p className="mt-0.5">{item.indoorMeters} m² cubie.</p>
                    </div>

                    {/* Mobile version */}
                    <div className="flex md:hidden">
                      <DoorIcon height="24" className="fill-gray-600" />
                      <p className="mt-0.5">{item.indoorMeters} m²</p>
                    </div>

                    <div className="flex md:ml-12 ml-4">
                      <BedIcon height="24" className="fill-gray-600" />
                      <p className="mt-0.5 ml-1">{item.dorms}</p>
                    </div>

                    <div className="flex md:ml-12 ml-4">
                      <CalendarIcon height="24" className="fill-gray-600" />
                      <p className="mt-0.5 ml-1"> &nbsp;{item.years}</p>
                      <p className="mt-0.5 ml-1">{item.years === "A estrenar" ? null : "años"}</p>
                    </div>
                  </div>
                  {/* <div className="mt-4">{item.description}</div> */}

                  <div className="mt-4">{lorem}</div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </MainContainer>
  );
}

// truncate
