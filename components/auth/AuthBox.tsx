"use client";
import React from "react";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { EyeSlashFilledIcon, EyeFilledIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";
import { IData } from "./types";

const AuthBox: React.FC<IData> = ({ text, title, link, linkPath }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Card className="p-7 bg-opacity-60 backdrop-blur-sm border border-white/40 max-w-lg w-full flex flex-col items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
        {title}
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

        <div className="flex items-center justify-center sm:justify-between flex-col sm:flex-row">
          <div className="">
            <Checkbox
              color="default"
              isSelected={isSelected}
              onValueChange={setIsSelected}
            >
              Remember me
            </Checkbox>
          </div>

          {title === "Login" ? (
            <div className="mt-2 sm:mt-0">
              <Link href="#" color="foreground" underline="always">
                Forgot password?
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="my-2 w-full">
          <Button
            variant="shadow"
            className="w-full bg-gradient-to-t from-gray-300 to-white text-gray-800"
          >
            {title}
          </Button>
        </div>

        <div className="text-center flex items-center justify-center flex-wrap sm:flex-nowrap">
          <p>{text}</p>
          &nbsp;
          <Link
            href={linkPath}
            color="foreground"
            underline="always"
            className="mt-1 sm:mt-0"
          >
            {link}
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AuthBox;
