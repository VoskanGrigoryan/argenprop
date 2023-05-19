import { useState } from "react";
import Select from "react-select";
import Button from "../ui/Button";
import { SearchIcon } from "@/icons";
import { useFormik } from "formik";

export default function HomeForm() {
  const formik = useFormik({
    initialValues: {
      operationType: "rent",
      propertyType: { value: "departamento", label: "Departamento" },
      dormsAmount: { value: "1", label: "1 dormitorio" },
      location: { value: "capitalFederal", label: "Capital Federal" },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const options = [
    { value: "departamento", label: "Departamento" },
    { value: "ph", label: "PH" },
    { value: "casa", label: "Casa" },
    { value: "quinta", label: "Quinta" },
    { value: "cochera", label: "Cochera" },
    { value: "local", label: "Local" },
    { value: "terreno", label: "Terreno" },
    { value: "oficina", label: "Oficina" },
    { value: "galpon", label: "Galpón" },
  ];

  const dormsOptions = [
    { value: "1", label: "1 dormitorio" },
    { value: "2", label: "2 dormitorios" },
    { value: "3", label: "3 dormitorios" },
  ];

  const locationOptions = [
    { value: "buenosAires", label: "Buenos Aires" },
    { value: "capitalFederal", label: "Capital Federal" },
  ];

  const { propertyType, dormsAmount, location } = formik.values;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex justify-center">
        <Button
          type="button"
          onClick={() => {
            formik.setFieldValue("operationType", "rent");
          }}
          className={`w-[auto] md:w-[200px] bg-white !text-black hover:bg-green-700 hover:!text-white ${
            formik.values.operationType == "rent"
              ? "!bg-green-700 !text-white"
              : "bg-white"
          }`}
        >
          Alquiler
        </Button>

        <Button
          type="button"
          onClick={() => {
            formik.setFieldValue("operationType", "selling");
          }}
          className={`w-[auto] md:w-[200px] bg-white !text-black hover:bg-green-700 hover:!text-white ${
            formik.values.operationType == "selling"
              ? "!bg-green-700 !text-white"
              : "bg-white"
          }`}
        >
          Venta
        </Button>
        <Button
          type="button"
          onClick={() => {
            formik.setFieldValue("operationType", "empr");
          }}
          className={`w-[auto] md:w-[200px] bg-white !text-black hover:bg-green-700 hover:!text-white ${
            formik.values.operationType == "empr"
              ? "!bg-green-700 !text-white"
              : "bg-white"
          }`}
        >
          Emprendimientos
        </Button>
      </div>
      <div className="md:flex p-2">
        <Select
          id="propertyType"
          name="propertyType"
          options={options}
          onChange={(e) => {
            formik.setFieldValue("propertyType", e);
          }}
          value={propertyType}
          className="md:w-[260px] md:px-1 w-auto md:my-0 my-1"
          placeholder="Propiedad"
        />
        <Select
          id="dormsAmount"
          name="dormsAmount"
          options={dormsOptions}
          onChange={(e) => {
            formik.setFieldValue("dormsAmount", e);
          }}
          value={dormsAmount}
          className="md:w-[260px] md:px-1 w-auto md:my-0 my-1"
          placeholder="Dormitorios"
        />
        <Select
          id="location"
          name="location"
          options={locationOptions}
          onChange={(e) => {
            formik.setFieldValue("location", e);
          }}
          value={location}
          className="md:w-[260px] md:px-1 w-auto md:my-0 my-1"
          isSearchable
          placeholder="Localidad"
        />
        <Button
          className="!mx-0 rounded-md md:w-[50px] w-full md:py-0 md:px-1"
          type="submit"
        >
          <SearchIcon height={30} className="fill-white mt-1" />
        </Button>
      </div>
    </form>
  );
}
