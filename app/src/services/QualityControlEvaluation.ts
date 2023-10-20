const URL = process.env.NEXT_PUBLIC_API_URL;

export const retrieveQualityControlEvaluation = async (value: string) => {
  const requestOptions = {
    method: "POST",
    body: value,
  };
  const request = fetch(`${URL}/log`, requestOptions);
  return (await request).json();
};

export const generateQualityControlEvaluation = async () => {
  const requestOptions = {
    method: "GET",
  };
  const request = fetch(`${URL}/random`, requestOptions);
  return (await request).json();
};
