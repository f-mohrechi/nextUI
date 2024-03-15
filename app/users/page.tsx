import { GrayPlusIcon } from "@/components/icons";
import TableView from "@/components/table/Table";
import React from "react";
import { IColumn, IRow } from "./types";

const UserPage: React.FC = () => {
  const rows: IRow[] = [
    {
      key: "1",
      email: "example@gmail.com",
      name: "Tony Reichert",
      role: "CEO",
      position: "developer",
    },
  ];

  const columns: IColumn[] = [
    {
      key: "email",
      label: "Email",
    },
    {
      key: "name",
      label: "Full Name",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "position",
      label: "Position",
    },
  ];

  return (
    <TableView
      rows={rows}
      columns={columns}
      title={"users"}
      icon={<GrayPlusIcon />}
    />
  );
};

export default UserPage;
