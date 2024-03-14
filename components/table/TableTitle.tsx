import { Button } from "@nextui-org/react";
import React from "react";

interface IData {
  title: string;
  icon: React.ReactElement;
}

const TableTitle: React.FC<IData> = ({ title, icon }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full mb-5">
        <h2 className="text-3xl font-semibold">{title}</h2>

        {icon && icon != null && (
          <Button
            isIconOnly
            variant="light"
            aria-label="Add new user"
            className="bg-gradient-to-t from-gray-300 to-white text-gray-800 flex justify-center items-center"
          >
            {icon}
          </Button>
        )}
      </div>
    </>
  );
};

export default TableTitle;
