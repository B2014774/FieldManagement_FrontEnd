"use client";

import React, { useState, FormEvent } from "react";
import fieldServices from "@/services/field.services";

const sport = {
  soccer: "Bóng đá",
  volleyball: "Bóng chuyền",
  tennis: "Quần vợt",
  badminton: "Cầu lông",
  basketball: "Bóng rổ",
};

const sportId: {
  [key: string]: string;
} = {
  soccer: "65af8051b08f6fbff6b02c72", //Bong da
  volleyball: "65af8059b08f6fbff6b02c74", //Bong chuyen
  tennis: "65af8061b08f6fbff6b02c76", //Tennis
  badminton: "65af807cb08f6fbff6b02c78", //Cau long
  basketball: "65b0cd8632d1a59c9d7f5e33", //Bong ro
};

interface formSport {
  fieldName: string;
  duong: string;
  phoneNumber: string;
  phuong: string;
  quan: string;
  sports: any;
}

const AddFieldForm = () => {
  const [fieldName, setFieldName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [duong, setDuong] = useState<string>("");
  const [phuong, setPhuong] = useState<string>("");
  const [quan, setQuan] = useState<string>("");
  const [sports, setSports] = useState<{ [key: string]: boolean }>({
    soccer: false,
    volleyball: false,
    tennis: false,
    badminton: false,
    basketball: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObject: formSport = {
      fieldName: fieldName,
      duong: duong,
      phoneNumber: phoneNumber,
      phuong: phuong,
      quan: quan,
      sports: [],
    };

    Object.keys(sports).forEach((key, index) => {
      if (sports[key] !== false) {
        formDataObject.sports.push(sportId[key]);
      }
    });

    console.log(formDataObject.sports);

    await fieldServices.addField(formDataObject);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-120 p-6 bg-gray-100 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6">Sân </h2>
        <div className="mb-4">
          <label htmlFor="fieldName" className="block text-gray-700">
            fieldName
          </label>
          <input
            type="text"
            id="fieldName"
            className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your Field name"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <select
            onChange={(e) => setPhuong(e.target.value)}
            className="px-3 py-2 w-36 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="0">Phường</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <select
            onChange={(e) => setQuan(e.target.value)}
            className="px-3 py-2 w-36 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="0">Quận</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <input
            type="text"
            className="px-3 py-2 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Đường"
            value={duong}
            onChange={(e) => setDuong(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">
            PhoneNumber
          </label>
          <input
            type="tex"
            id="phoneNumber"
            className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-2">Chọn môn thể thao</label>
          {Object.entries(sport).map(([sportName, sportInfo], index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={sportName}
                name={sportName}
                checked={sports.sportName}
                value={sportName}
                onChange={(e) =>
                  setSports({ ...sports, [sportName]: e.target.checked })
                }
              />
              <label htmlFor={sportName}>{sportInfo}</label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddFieldForm;
