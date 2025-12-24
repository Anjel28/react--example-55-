//CUSTOM HOOKS WITH GENERICS - USE THE USESTATE

import { useState } from 'react';

function useFormInput<T>(initialValue: T){
    const [value, setValue] = useState<T>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const newValue = e.target.value as unknown as T;
     setValue(newValue);
    }

    return{
        value,
        onChange,
        setValue,
}

}

export default useFormInput;
