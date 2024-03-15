// ParentComponent.tsx
import { GrayPlusIcon } from "@/components/icons";
import TableView from "@/components/table/Table";
import React from "react";

interface IRow {
  key: string;
  author: string;
  title: string;
  language: string;
  date: string;
}

interface IColumn {
  key: string;
  label: string;
}

const AritclesPage: React.FC = () => {
  const rows: IRow[] = [
    {
      key: "1",
      title: "learn next UI",
      author: "Tony Reichert",
      date: "15/03/2024",
      language: "English",
    },
  ];

  const columns: IColumn[] = [
    {
      key: "title",
      label: "Title",
    },
    {
      key: "language",
      label: "Language",
    },
    {
      key: "author",
      label: "Aritcle",
    },
    {
      key: "date",
      label: "Publish date",
    },
  ];

  return <TableView rows={rows} columns={columns} title={"articles"} />;
};

export default AritclesPage;
