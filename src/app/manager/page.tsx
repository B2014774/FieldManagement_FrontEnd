"use client";

import Link from "next/link";

import fieldServices from "@/services/field.services";
import CardFieldInManager from "@/components/manager/CardFieldInManager";
import { removeFieldById } from "@/utils/helpers";

import { useEffect, useState } from "react";

interface sportsType {
  [key: string]: {
    sportName: string;
    id: string;
  };
}

// A Manager Page which help admin manage, observe data from web.
function ManagerHome() {
  const [fieldsInfo, setFieldsInfo] = useState<any>([]); //fieldsInfo store fields which is from Database

  //Default sports information
  const sports: sportsType = {
    soccer: {
      sportName: "Bóng đá",
      id: "65af8051b08f6fbff6b02c72",
    },
    volleyball: {
      sportName: "Bóng chuyền",
      id: "65af8059b08f6fbff6b02c74",
    },
    tennis: {
      sportName: "Quần vợt",
      id: "65af8061b08f6fbff6b02c76",
    },
    badminton: {
      sportName: "Cầu lông",
      id: "65af807cb08f6fbff6b02c78",
    },
    basketball: {
      sportName: "Bóng rổ",
      id: "65b0cd8632d1a59c9d7f5e33",
    },
  };

  const [sportId, setSportId] = useState<string>(sports.soccer.id);

  // const addField = async () => {
  //   const res = await fieldServices.addField();
  // };

  // const deleteField = async () => {
  //   const res = await fieldServices.deleteField("65d769ac98ab9125fa62f2e8");
  // };

  // Get Field from Database filter by SportId
  async function receiveFieldBySport(sportId: string) {
    try {
      const fields = await fieldServices.getAllBySport(sportId);
      setFieldsInfo(fields);
    } catch (error) {
      console.error("Error fetching fields: ", error);
    }
  }

  async function handleRemoveField(FieldId: string) {
    try {
      await removeFieldById(FieldId);
      await receiveFieldBySport(sportId);
    } catch (error) {
      console.error("Error while handle remove field: " + error);
    }
  }

  //Set up value for fieldsInfo.
  useEffect(() => {
    receiveFieldBySport(sports.soccer.id);
  }, []);

  return (
    <>
      {/* Display button when clicked will trigger receiveFieldBySport */}
      <div className="inline-flex h-[120px] w-full items-center justify-center overflow-hidden rounded">
        {Object.entries(sports).map(([sportKey, sportInfo], index) => {
          return (
            <button
              onClick={() => {
                setSportId(sportId); // update selected sport Id
                receiveFieldBySport(sportInfo.id);
              }}
              key={index}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              <span>{sportInfo.sportName}</span>
            </button>
          );
        })}
      </div>

      {/* Display field cards */}
      <div className="grid w-full justify-center">
        {fieldsInfo &&
          fieldsInfo.map((field: any, index: number) => {
            return (
              <div key={index}>
                <CardFieldInManager
                  FieldInfo={field}
                  onRemoveField={handleRemoveField}
                ></CardFieldInManager>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ManagerHome;
