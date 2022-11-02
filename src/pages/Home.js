import React from "react";
import Search from "./components/Search";
import depictor_logo from '../assets/Icon_Maintenance.svg.png';
import toollogo_two from '../assets/Globe.svg.png'
import logo from '../assets/Toolhub_community_logo.svg'

const Home = () => {

  return (

    <div className="home">
      <div className="top">
        <div className="nav-logo">
          <img className="toolhub-logo" src={logo} alt="toolhub logo" />
        </div>

        <div className="trms_intro">
          <h2>Toolhub Record Management System</h2>
          <p>
            We provides an interface to edit or provide information for
            wikimedia missing tools. Discover statistics about the current tools
            available, the count of missing fields, and the number of tools edited here.
          </p>
        </div>

      </div>

      <div className="search-container">
        <Search />
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
            <button className="btn" type="button">Provide Data</button>


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

            <button className="btn" type="button">Provide Data</button>

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

            <button className="btn" type="button">Provide Data</button>
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


            <button className="btn" type="button">Provide Data</button>
          </div>

        </div>




      </div>




    </div>







  );
}

export default Home;