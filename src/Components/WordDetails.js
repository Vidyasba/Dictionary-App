import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WordDetails = () => {
  const { word } = useParams();
  const [wordDetails, setWordDetails] = useState(null);

  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();
        setWordDetails(data[0]); // Assuming the API returns an array with a single object for the word details
      } catch (error) {
        console.error("Error fetching word details:", error);
      }
    };

    fetchWordDetails();
  }, [word]);

  return (
    <div className="worddeatils">
      <h1>{word}</h1>
      {wordDetails && (
        <div>
          
          {wordDetails.phonetics &&
            wordDetails.phonetics.map((phonetic, index) => (
              <div key={index}>
                <p>Text: {phonetic.text}</p>
                {phonetic.audio && (
                  <audio controls>
                    <source src={phonetic.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ))}

         
          {wordDetails.meanings &&
            wordDetails.meanings.map((meaning, index) => (
              <div key={index}>
                <h3>Part of Speech: {meaning.partOfSpeech}</h3>
                {meaning.definitions &&
                  meaning.definitions.map((definition, idx) => (
                    <div key={idx}>
                      <p>Definition: {definition.definition}</p>
                      {definition.synonyms && definition.synonyms.length > 0 && (
                        <p>Synonyms: {definition.synonyms.join(", ")}</p>
                      )}
                      {definition.antonyms && definition.antonyms.length > 0 && (
                        <p>Antonyms: {definition.antonyms.join(", ")}</p>
                      )}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default WordDetails;
