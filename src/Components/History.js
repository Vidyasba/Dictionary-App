import React from "react";
import { Link } from "react-router-dom";
const History =() =>{
  
  const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
   
    return(
        <div className="history">
            
            <div class="data1">

            
            <h2>Search History</h2>
      <ul>
        {searchHistory.map((word, index) => (
         <li key={index}>
         {/* Generate a Link for each word */}
         <Link to={`/word/${word}`}>{word}</Link>
       </li>
        ))}
      </ul>
      </div>
        </div>
    )
}

export default History;