"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { MailIcon, PositionIcon, RoleIcon, UserIcon } from "../icons";

interface ITable {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddUserModal: React.FC<ITable> = ({ isOpen, onOpenChange }) => {
  return (
    <>
      <Modal
        className="backdrop-opacity-20"
        isOpen={isOpen}
        size="md"
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl font-semibold">
                Add User
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Full Name"
                  placeholder="Enter user's name"
                  type="text"
                  variant="bordered"
                  key={"name"}
                  labelPlacement={"outside-left"}
                  className="w-full flex justify-between"
                  endContent={
                    <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />

                <Input
                  autoFocus
                  key={"email"}
                  type="email"
                  label="Email"
                  labelPlacement={"outside-left"}
                  placeholder="Enter user's email"
                  className="w-full flex justify-between"
                  variant="bordered"
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
                <Input
                  autoFocus
                  key={"position"}
                  type="position"
                  label="Position"
                  labelPlacement={"outside-left"}
                  placeholder="Enter user's position"
                  className="w-full flex justify-between"
                  variant="bordered"
                  endContent={
                    <PositionIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
                <Input
                  autoFocus
                  key={"role"}
                  type="role"
                  label="Role"
                  labelPlacement={"outside-left"}
                  placeholder="Enter user's role"
                  className="w-full flex justify-between"
                  variant="bordered"
                  endContent={
                    <RoleIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="default"
                  onPress={onClose}
                  className="bg-gradient-to-t from-gray-300 to-white text-gray-800 flex justify-center items-center"
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddUserModal;
