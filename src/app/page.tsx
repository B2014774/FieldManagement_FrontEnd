"use client";

import Card from "@/components/Card";
import SelectInput from "@/components/SelectInput";
import FieldService from "@/services/field.services";

async function retrieveFields() {
  try {
    const res = await FieldService.getAll();
    console.log(res);
    return res.json();
  } catch (error) {
    console.error();
  }
}

export default function Home() {
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
        <div className="basis-1/4">
          <Card></Card>
        </div>
        <div className="basis-1/4">
          <Card></Card>
        </div>
        <div className="basis-1/4">
          <Card></Card>
        </div>
        <div className="basis-1/4">
          <Card></Card>
        </div>
        <div className="basis-1/4">
          <Card></Card>
        </div>
        <div className="basis-1/4">
          <Card></Card>
        </div>
      </div>
      <button onClick={retrieveFields}>Click Me!!!</button>
    </main>
  );
}
