import { useState } from 'react';

export function useInput<T>(initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);
    

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value as unknown as T;
        setValue(newValue);
        }
        const reset = () => setValue(initialValue);

        return{
            value,
            onChange,
            reset,
            setValue,
        };
}