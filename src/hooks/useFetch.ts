import { useState, useEffect, useCallback } from "react";
import axios from "axios";

interface Props {
  url: string;
}

const useFetch = <T>({ url }: Props) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | undefined>({
    message: "error",
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError({ message: "Error fetching task" });
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
