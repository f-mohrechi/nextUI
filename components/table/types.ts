export interface IRow {
  key: string;
}

export interface IUsersPageRow extends IRow {
  name?: string;
  role?: string;
  position?: string;
  email?: string;
}

export interface IArticlesPageRow extends IRow {
  author?: string;
  title?: string;
  language?: string;
  date?: string;
}

export interface IColumn {
  key: string;
  label: string;
}

export interface ITable {
  rows: (IUsersPageRow | IArticlesPageRow)[];
  columns: IColumn[];
  title: string;
  icon?: React.ReactElement;
}
