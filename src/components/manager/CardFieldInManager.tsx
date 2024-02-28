import React from "react";

import { Field } from "@/types/interfaces/field";
import { getFullAddress } from "@/utils/helpers";

interface props {
  FieldInfo: Field;
  onRemoveField: (FieldId: string) => void;
}

{
  /* Display field information in a card */
}
export default function CardFieldInManager(props: props) {
  // send FieldId back to Parent Component through onRemoveField()
  async function RemoveField(FieldId: string) {
    try {
      props.onRemoveField(FieldId);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="mb-10 w-[880px] overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {props.FieldInfo.fieldName}{" "}
              <button
                type="button"
                className="float-right mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => RemoveField(props.FieldInfo._id)}
              >
                Remove
              </button>
            </h3>

            <p className="text-sm text-slate-400">By George Johnson, jun3 28</p>
          </header>
          <p>{getFullAddress(props.FieldInfo.fieldAddress)}</p>
        </div>
      </div>
    </>
  );
}
