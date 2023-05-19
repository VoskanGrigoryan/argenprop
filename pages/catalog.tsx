import MainContainer from "@/components/containers/MainContainer";
import { CatalogCard } from "@/components/ui/CatalogCard";

export default function Catalog() {
  const cards = [
    { title: "title1", description: "Description 1" },
    { title: "title2", description: "Description 2" },
    { title: "title3", description: "Description 3" },
    { title: "title4", description: "Description 4" },
  ];
  return (
    <MainContainer>
      <div className="w-full">
        <div className="p-4 m-6 bg-green-500">filters</div>
        <CatalogCard
          cards={cards}
          renderItem={(item) => {
            return (
              <div
                className="shadow-md p-4 min-w-fit min-h-[300px] rounded m-6 bg-yellow-500"
                key={item.title}>
                {item.description}
              </div>
            );
          }}
        />
      </div>
    </MainContainer>
  );
}
