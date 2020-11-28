import { useEffect, useState } from "react";

export default function useForm(receivedValues) {
    const [values, setValues] = useState(receivedValues);

    useEffect(() => {
        setValues(receivedValues);
    }, [receivedValues]);

    function handleInputChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return {
        values,
        inputProps: (inputName) => ({
            name: inputName,
            value: values?.[inputName] || "",
            onChange: handleInputChange,
        }),
    };
}
