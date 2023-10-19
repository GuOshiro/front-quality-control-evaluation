const URL = "http://localhost:3001/dev/log";

export const retrieveQualityControlEvaluation = async (value: string) => {
  const requestOptions = {
    method: "POST",
    body: value,
  };
  const request = fetch(URL, requestOptions);
  return (await request).json();
};

export const generateQualityControlEvaluation = async () => {
  const requestOptions = {
    method: "GET",
  };
  const request = fetch(`${URL}/random`, requestOptions);
  return (await request).json();
};
