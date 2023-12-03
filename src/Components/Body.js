import React, { useState } from "react";


const Body = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      console.log(data); // Display the fetched data in the console
      // Process the data as needed for your application

      const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    const updatedHistory = [...searchHistory, searchTerm];
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          id="searchbar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-search" onClick={handleSearch}>Search</button>
      </div>
      {searchResults && (
        <div class="data">
          {searchResults.map((entry, index) => (
            <div key={index}>
              <h2>{entry.word}</h2>
              {entry.phonetics && entry.phonetics.length > 0 && (
                <div>
                  <h4>Phonetics:</h4>
                  {entry.phonetics.map((phonetic, pIndex) => (
                    <div key={pIndex}>
                      <p>Text: {phonetic.text}</p>
                      {phonetic.audio && <audio controls src={phonetic.audio}></audio>}
                    </div>
                  ))}
                </div>
              )}
              {/* {entry.phonetic && <p>Phonetic: {entry.phonetic}</p>} */}
              {entry.meanings && (
               <div style={{ lineHeight: '1.2' }}>
               {entry.meanings.map((meaning, mIndex) => (
                 <div key={mIndex}>
                   <h3>{meaning.partOfSpeech}</h3>
                   {meaning.definitions && (
                     <div>
                       {meaning.definitions.map((definition, dIndex) => (
                         <div key={dIndex}>
                           <p style={{ margin: '0', padding: '0' }}>{definition.definition}</p>
                           {definition.synonyms && definition.synonyms.length > 0 && (
                             <p style={{ margin: '0', padding: '0' }}>
                               <strong>Synonyms:</strong> {definition.synonyms.join(', ')}
                             </p>
                           )}
                           {definition.antonyms && definition.antonyms.length > 0 && (
                             <p style={{ margin: '0', padding: '0' }}>
                               <strong>Antonyms:</strong> {definition.antonyms.join(', ')}
                             </p>
                           )}
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
               ))}
             </div>
             
              
              )}
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
