import React, { useEffect, useState } from "react";
import useForm from "./useForm";

import firebase from "firebase/app";
import "firebase/firestore";
import InputField from "./InputField";

export default function AddQuestion() {
    const db = firebase.firestore();
    const { values, inputProps } = useForm(null);
    const [value, setValue] = useState({});

    useEffect(() => {
        setValue(values);
    }, [values]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const docRef = await db.collection("questions").add(value);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <InputField
                    field="question"
                    inputProps={{ ...inputProps("question") }}
                />
                <InputField
                    field="option1"
                    inputProps={{ ...inputProps("option1") }}
                />
                <InputField
                    field="option2"
                    inputProps={{ ...inputProps("option2") }}
                />
                <InputField
                    field="option3"
                    inputProps={{ ...inputProps("option3") }}
                />
                <InputField
                    field="option4"
                    inputProps={{ ...inputProps("option4") }}
                />
                <InputField
                    field="correctAnswer"
                    inputProps={{ ...inputProps("correctAnswer") }}
                />
                <button className="btn btn-primary form-control" type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}
