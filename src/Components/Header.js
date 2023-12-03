import React from "react";
import { Link } from 'react-router-dom';


const Header=()=>{
    return(
            <div>
           

                <div class="header">
                    <div class="left-head">
                        <h2>Dictionary App</h2>
                    </div>
                    <div >
                        <nav class="right-header">
                            <ul>
                             
                                <Link  className="linkStyle" to="/body">Home</Link>
                                
                                <li>
                                <Link  className="linkStyle" to="/history">History</Link> {/* Link to the History page */}
              </li>
                                </ul>
                           
                        </nav>
                    </div>

                </div>
                            

            </div>
    )
}
export default Header;