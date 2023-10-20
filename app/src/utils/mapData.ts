import { Row } from "../interfaces/Row";

export const mapRowData = (value: string, data: Object, id?: string): Row => {
  const parts = value.split("\n");
  const newArray = [parts[0], parts.slice(1).join("\n")];

  const row: Row = {
    reference: parts[0],
    original: newArray[1],
    data,
    id: parts[0],
  };
  return row;
};
