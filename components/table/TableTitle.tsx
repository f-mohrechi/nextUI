import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import AddUserModal from "../modals/AddUserModal";

interface IData {
  title: string;
  icon?: React.ReactElement;
}

const TableTitle: React.FC<IData> = ({ title, icon }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex items-center justify-between w-full mb-5">
        <h2 className="text-3xl font-semibold">{title}</h2>

        {icon && icon != null && (
          <Button
            onPress={onOpen}
            isIconOnly
            variant="light"
            aria-label="Add new user"
            className="bg-gradient-to-t from-gray-300 to-white text-gray-800 flex justify-center items-center"
          >
            {icon}
          </Button>
        )}
      </div>

      <AddUserModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default TableTitle;
