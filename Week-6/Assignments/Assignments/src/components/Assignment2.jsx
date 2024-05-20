import React, { useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

// first we have to create a function that generates an array of random words with 1000 sentences
const words = ["walt", "jesse", "saul", "mike", "gus", "skyler", "hank", "flynn"];
const totalLines = 500;
const allWords = [];

for (let i = 0; i < totalLines; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())]) + " ";
    }
    allWords.push(sentence.trim());
}

export function Assignment2() {
    // defining the states
    const [filter, setFilter] = useState("");

    const filteredSentences = useMemo(() => {
        return allWords.filter(sentence => sentence.includes(filter));
    }, [filter, allWords]);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Filter sentences" 
                onChange={(e) => setFilter(e.target.value)}
            />
            {filteredSentences.map((sentence, index) => (
                <div key={index}>{sentence}</div>
            ))}
        </div>
    );
}

export default Assignment2;
