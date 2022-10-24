import React from "react";
import Search  from "./Search";
import depictor_logo from '../assets/Icon_Maintenance.svg.png';
import toollogo_two from '../assets/Globe.svg.png'

const Home = () => {

  return (

    <div className="home">
      <div className="top">
        <div className="trms_intro">
          <h2>Toolhub Record Management System (TRMS)</h2>
          <p>
            TRMS provides an interface to edit or provide information for
            wikimedia tools. TRMS also provides statistics about the current tools
            available, the count of missing fields, and the number of tools edited using TRMS.
          </p>
        </div>
        <div className="search-container">
          <Search />
        </div>
      </div>

      <div className="tools-list">
        <div className="sample-tools">
          <h1>Choose Tool to Edit</h1>
        </div>

        <div className="card-container">
          <div className="card">

            <div className="title">Translate</div>
           
            <div className="tool-icon">
              <img className="icon" src={toollogo_two} alt="Depictor logo" />
            </div>
            <h3 className="m-title">Missing fields</h3>
            <div className="missing-fields">
              <ul>
                <li>replaced_by</li>
                <li>for_wikis</li>
                <li>icon</li>
              </ul>
            </div>

            <a href="#" className="btn">Provide Data</a>

          </div>

          <div className="card">

            <div className="title">Depictor</div>

            
            <div className="tool-icon">
              <img className="icon" src={depictor_logo} alt="Minefield logo" />
            </div>
            <h3 className="m-title">Missing fields</h3>
            <div className="missing-fields">
              <ul>
                <li>privacy_policy_url</li>
                <li>for_wikis</li>
                <li>api_url</li>
              </ul>
            </div>

            <a href="#" className="btn">Provide Data</a>

          </div>


          <div className="card">
            <div className="title">QSML</div>
            <div className="tool-icon">
              <img className="icon" src={toollogo_two} alt="QSML logo" />
            </div>
            <h3 className="m-title">Missing fields</h3>
           
             
            <div className="missing-fields">
              <ul>
                <li>feedback_url</li>
                <li>user_docs_url</li>
                <li>api_url</li>
              </ul>
            </div>

            <a href="#" className="btn">Provide Data</a>
          </div>

          <div className="card">
            <div className="title">Minefield</div>
            
            <div className="tool-icon">
              <img className="icon" src={depictor_logo} alt="Minefield logo" />
            </div>
            <h3 className="m-title">Missing fields</h3>
            <div className="missing-fields">
              <ul>
                <li>feedback_url</li>
                <li>user_docs_url</li>
                <li>api_url</li>
              </ul>
            </div>
            

            <a href="#" className="btn">Provide Data</a>
          </div>

        </div>




      </div>




    </div>







  );
}

export default Home;