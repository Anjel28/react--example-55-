import { useState } from  'react';


function useFormField<T>(initialValue: T){
    const[value, setValue] = useState<T>(initialValue);

    const onChange = (newValue: T) => {
        setValue(newValue);
    }

    return{
        value,
        onChange,
        reset: () => setValue(initialValue),
    };
}

export default useFormField;
