
import { useState } from "react";

export const useForm = initialValue => {
    const [values,setValues] = useState(initialValue);

    return [
        values,
        (formType, fomValues) => {
            if(formType === 'reset')
             return setValues(initialValue);
            endif:
            return setValues({...values, [formType]: fomValues})
        }
   ];
}