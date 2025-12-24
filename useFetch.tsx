import { useEffect, useState } from 'react';

function useFetch<T>(url: string){
    const [data,setData] = useState<T | null>(null);
    const [loading,setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try{
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                const result: T = await response.json();
                if (isMounted) {
                 setData(result);
                 setLoading(false);
                }       
                 }catch (err: any){
                    if (isMounted){
                        setError(err.message);
                        setLoading(false);
                    }
                 }
        }
        fetchData();

        return () => {
            isMounted = false;
        }
    }, [url]);

    return {data, loading,error};
}