import { useEffect, useState } from "react"

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    // new Promise<Response>(resolve => {
    //   setTimeout(() => {
    //     fetch(url).then(resolve);
    //   }, 2000);
    // })
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed');
        }

        return response.json() as Promise<T>;
      })
      .then(json => {
        if(!cancelled) {
          setData(json);
          setError(null);
        }
      })
      .catch(error =>{
        if (!cancelled) {
          setError(
            error instanceof Error ? error.message : 'Something went wrong'
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;