"use client";
import { useEffect, useState } from "react";
import { retrieveQualityControlEvaluation } from "./src/services/QualityControlEvaluation";
import Table from "./src/components/Table";
import { mapRowData } from "./src/utils/mapData";
import { Row } from "./src/interfaces/Row";

export default function Home() {
  const [data, setData] = useState<Array<Row>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const defaultPost =
    "reference 70.0 45.0 6\nthermometer temp-1\n2007-04-05T22:00 72.4\n2007-04-05T22:01 76.0\n2007-04-05T22:02 79.1\n2007-04-05T22:03 75.6\n2007-04-05T22:04 71.2\n2007-04-05T22:05 71.4\n\n2007-04-05T22:06 69.2\n2007-04-05T22:07 65.2\n2007-04-05T22:08 62.8\n2007-04-05T22:09 61.4\n\n2007-04-05T22:10 64.0\n2007-04-05T22:11 67.5\n2007-04-05T22:12 69.4\n\n\nthermometer temp-2\n2007-04-05T22:01 69.5\n2007-04-05T22:02 70.1\n2007-04-05T22:03 71.3\n2007-04-05T22:04 71.5\n2007-04-05T22:05 69.8\n\nhumidity hum-1\n2007-04-05T22:04 45.2\n2007-04-05T22:05 45.3\n2007-04-05T22:06 45.1\n\n\nhumidity hum-2\n2007-04-05T22:04 44.4\n2007-04-05T22:05 43.9\n2007-04-05T22:06 44.9\n2007-04-05T22:07 43.8\n2007-04-05T22:08 42.1\n\n\nmonoxide mon-1\n2007-04-05T22:04 5\n2007-04-05T22:05 7\n2007-04-05T22:06 9\n\n\nmonoxide mon-2\n2007-04-05T22:04 2\n2007-04-05T22:05 4\n2007-04-05T22:06 10\n2007-04-05T22:07 8\n2007-04-05T22:08 6\n";

  useEffect(() => {
    if (isLoading) {
      retrieveData();
    }
  }, [isLoading]);

  const retrieveData = async () => {
    const response = await retrieveQualityControlEvaluation(defaultPost);
    const row = mapRowData(defaultPost, response);
    const updatedRow = [...data, row];
    setData(updatedRow);
    setIsLoading(false);
  };

  const handleOnRemove = () => {};

  const handleOnGenerateRandomData = () => {};

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Data not available.</div>;
  }

  return (
    <main className="flex min-h-screen flex-col gap-10 p-24">
      <div>
        <h1 className="text-5xl	font-light">Audition Assignment</h1>
        <h3 className="text-xl mt-2 font-normal">Software Engineer</h3>
        <h3 className="text-sm mt-1 font-light">
          Test: Quality Control Evaluation
        </h3>
      </div>
      <div>
        <button
          onClick={handleOnGenerateRandomData}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
        >
          Generate Random Data
        </button>
      </div>
      <Table rows={data} handleOnRemove={handleOnRemove} />
    </main>
  );
}
