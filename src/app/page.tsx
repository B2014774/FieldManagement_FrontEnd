"use client";

import Card from "@/components/Card";
import SelectInput from "@/components/SelectInput";
import FieldService from "@/services/field.services";
import { useEffect, useState } from "react";
export default function Home() {
  const [fieldsInfo, setFieldsInfo] = useState([]);

  useEffect(() => {
    const retrieveFields = async () => {
      const res = await FieldService.getAll();
      setFieldsInfo(res);
      console.log(fieldsInfo);
    };

    retrieveFields();
    return () => {};
  }, []);

  return (
    <main>
      <div className="w-max mb-10 px-20 border border-solid border-stone-10">
        {" "}
        <div className="flex flex-row gap-6 items-center">
          <SelectInput></SelectInput>
        </div>
      </div>
      <p>Sân bóng đá</p>
      <div className="p-10 grid grid-cols-4 gap-6">
        {fieldsInfo &&
          fieldsInfo.map((field: any, index: any) => {
            return (
              <div className="basis-1/4" key={index}>
                <Card field={field}></Card>
              </div>
            );
          })}
      </div>
    </main>
  );
}
