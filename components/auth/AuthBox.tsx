"use client";
import React from "react";
import { Card } from "@nextui-org/card";
import { title } from "../primitives";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { EyeSlashFilledIcon, EyeFilledIcon } from "@/components/icons";

interface IData {
  text: string;
}

const AuthBox: React.FC<IData> = ({ text }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Card className="p-7 bg-opacity-60 border border-white/40 max-w-lg w-full flex flex-col items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
        {text}
      </h1>

      <div className="flex flex-col w-full gap-4">
        <div className="my-2">
          <Input type="email" variant={"underlined"} label="Email" />
        </div>

        <div className="my-2">
          <Input
            variant={"underlined"}
            label="Password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
        </div>
        <div className="my-2 w-full">
          <Button
            variant="shadow"
            className="w-full bg-gradient-to-t from-gray-300 to-white text-gray-800"
          >
            {text}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AuthBox;
