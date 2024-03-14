"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import React from "react";
import TableTitle from "./TableTitle";

interface IRow {
  key: string;
  name: string;
  role: string;
  position: string;
  email: string;
}

interface IColumn {
  key: string;
  label: string;
}

interface ITable {
  rows: IRow[];
  columns: IColumn[];
  title: string;
  icon: React.ReactElement;
}

const TableView: React.FC<ITable> = ({ rows, columns, title, icon }) => {
  return (
    <>
      <TableTitle title={title} icon={icon} />
      <Table aria-label={`table of ${title}`}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default TableView;
