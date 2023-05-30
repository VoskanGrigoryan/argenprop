import MainContainer from "@/components/containers/MainContainer";
import { CatalogCard } from "@/components/ui/CatalogCard";
import { BedIcon, CalendarIcon, DoorIcon } from "@/icons";

export default function Catalog() {
  const cards = [
    {
      title: "title1",
      description: "Description 1",
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
  return (
    <MainContainer>
      <div className="w-full overflow-x-hidden px-60">
        <div className="p-4 m-6 bg-green-500">filters</div>
        <CatalogCard
          cards={cards}
          renderItem={(item) => {
            return (
              <div
                className="shadow-md p-4 m-6 min-w-fit min-h-[300px] rounded flex"
                key={item.title}>
                <div className="w-2/6">Carousel</div>
                <div>
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

                  <div className="flex">
                    Departamento en &nbsp;<p> {item.address.neighborhood}</p>, {item.address.state}
                  </div>

                  <div className="flex mt-8">
                    <div className="flex">
                      <DoorIcon height="24" className="fill-gray-600" />
                      <p className="mt-0.5">{item.indoorMeters} m² cubie.</p>
                    </div>

                    <div className="flex ml-12">
                      <BedIcon height="24" className="fill-gray-600" />
                      <p className="mt-0.5 ml-1">{item.dorms}</p>
                    </div>

                    <div className="flex ml-12">
                      <CalendarIcon height="24" className="fill-gray-600" />
                      <p className="mt-0.5"> &nbsp;{item.years}años</p>
                    </div>
                  </div>
                  <div>{item.description}</div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </MainContainer>
  );
}
