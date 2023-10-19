import { Row } from "../interfaces/Row";

export const mapRowData = (value: string, data: Object, id?: string): Row => {
  const splitedValue = value.split("\n", 1);
  const row: Row = {
    reference: splitedValue[0],
    original: splitedValue[1],
    data,
    id: splitedValue[0],
  };
  return row;
};
