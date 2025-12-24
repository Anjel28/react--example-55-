import { useState, useEffect } from "react";
import { WeatherData } from "./Types";

 export function useFetch<T>(url:string){
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchData = async () => {
        try{
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network Response was not ok');
            const json = await response.json();
            setData(json);
        }catch (err: any){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }
    fetchData();
}, [url]);

return {data, loading, error}
 }


