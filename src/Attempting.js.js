import React, { useEffect, useState } from "react";

import firebase from "firebase/app";
import "firebase/firestore";

export default function Attempting() {
    const db = firebase.firestore();
    const [collection, setCollection] = useState([]);
    const [current, setCurrent] = useState(null);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const arr = [];
        async function getData() {
            try {
                const querySnapshot = await db.collection("questions").get();
                await querySnapshot.forEach((doc) => {
                    arr.push({
                        id: doc.id,
                        data: doc.data(),
                    });
                });
                setCollection(arr);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [db]);

    useEffect(() => {
        setCurrent(collection[index]);
    }, [collection, index]);

    function handleNext() {
        setIndex((prev) => prev + 1);
    }

    function handlePrev() {
        setIndex((prev) => prev - 1);
    }

    if (!current) {
        return <h1>Loading...</h1>;
    }

    function handleOption(index, id) {
        let state = { ...answers };

        state[id] = {
            index,
            correct: true,
        };

        setAnswers(state);

        // console.log(answers);
        return;
    }

    function isSelected(key) {
        if (!answers[current.id]) {
            return false;
        }

        // console.log(current.id);
        return key === answers[current.id].index;
    }

    // console.log(current.data);
    return (
        <div>
            <h3>
                Question {index + 1} / {collection.length}
            </h3>
            <h1>{current.data.question}</h1>
            {current.data.answers.map((item, key) => {
                return (
                    <button
                        key={item}
                        className="btn btn-primary m-2"
                        onClick={() => handleOption(key, current.id)}
                        disabled={isSelected(key)}
                    >
                        {item}
                    </button>
                );
            })}
            <p> index: {current.data.correct}</p>
            <p>id: {current.id}</p>
            <button
                className="btn btn-success"
                disabled={index === 0}
                onClick={handlePrev}
            >
                Prev
            </button>
            <button
                className="btn btn-success"
                disabled={index === collection.length - 1}
                onClick={handleNext}
            >
                Next
            </button>
            {Object.keys(answers).map((ans) => (
                <p key={ans}>
                    {ans}: {answers[ans].index}
                </p>
            ))}
        </div>
    );
}
