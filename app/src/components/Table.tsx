import { Row } from "../interfaces/Row";
import { JSONView } from "./JSONView";

export default function Table({
  rows,
  handleOnRemove,
}: {
  rows: Array<Row>;
  handleOnRemove: (arg1: string) => void;
}) {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Reference
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Original Data
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Response
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr
              key={row.id}
              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
            >
              <td className="w-full lg:w-[200px] p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                {row.reference}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                {row.original}
              </td>
              <td className="w-full lg:w-[300px] p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                <JSONView data={row.data} />
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Actions
                </span>
                <button
                  onClick={() => handleOnRemove(row.id)}
                  className="text-blue-400 hover:text-blue-600 underline "
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
