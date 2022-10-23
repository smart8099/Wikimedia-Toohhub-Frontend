import React from "react";


const Home = () => {

  return (

    <div className="home">
      <div className="top">
        <div className="trms_intro">
          <h2>Toolhub Record Management System (TRM)</h2>
          <p>
            TRMS provides an interface to edit or provide information for
            wikimedia tools. TRMS also provides statistics about the current tools
            available, the count of missing fields, and the number of tools edited using TRMS.
          </p>
        </div>

        <div className="searh-field">
          <input type="text" name="search-field" id="search-field" placeholder="Search Tool Here" autofocus></input>
          {/* <input type="submit" name="submit_search" id="submit_search">Submit</input> */}
          <button id="submit" name="submit_search">Search</button>

        </div>
      </div>




      <div className="sampleTools">
        <h1>Choose and Edit Tool</h1>
        <div className="card--container">
          <div className="card">
            <div className="face1 face">
              <div className="content">
                <span className="starts">
                  <p className="description">Tool Type Missing</p>
                </span>
              </div>
            </div>
            <div className="face face2">
              <h2>Depictor</h2>
            </div>
          </div>

          <div className="card">
            <div className="face1 face">
              <div className="content">
                <span className="starts">
                  <p className="description">User Docs Url Missing</p>
                </span>
              </div>
            </div>
            <div className="face face2">
              <h2>Mine Field</h2>
            </div>
          </div>

          <div className="card">
            <div className="face1 face">
              <div className="content">
                <span className="starts">
                  <p className="description">Repository Url Missing</p>
                </span>
              </div>
            </div>
            <div className="face face2">
              <h2>Tinklify</h2>
            </div>
          </div>
          <div className="card">
            <div className="face1 face">
              <div className="content">
                <span className="starts">
                  <p className="description">Tool Icon Missing</p>
                </span>
              </div>
            </div>



            <div className="face face2">
              <h2>Abdul</h2>
            </div>
          </div> 
        </div>
      </div>
    </div>

  



  );
}

export default Home;