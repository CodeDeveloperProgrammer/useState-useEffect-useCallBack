import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  console.log(" Inicio useFetch");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  //useCallBack lo memoriza 1 sola vez
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al acceder a la API");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []); //Siempre poner el 2do argumento

  useEffect(() => {
    console.log("Inicia el useEffect");
    fetchData();
  }, []);

  return { data, loading, error };
};
