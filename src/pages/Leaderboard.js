import React from 'react';

const Leaderboard = () => (
  <div className="lboard-container">
    <div className="lboard-header">
      <h1>Leaderboard</h1>
      <p>Below are the names of Top Editors in the last 30 days</p>
    </div>
    <div className="lboard-table">
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Username</th>
            <th>Total Number of Tools Edited</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Brian Nelson</td>
            <td>87</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Michael Perkins</td>
            <td>86</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Justin Day</td>
            <td>83</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Joseph Allen</td>
            <td>82</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Alyssa Wilson</td>
            <td>80</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Erik Murphy</td>
            <td>78</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Emily Bryant</td>
            <td>74</td>
          </tr>

          <tr>
            <td>8</td>
            <td>Joshua Newman</td>
            <td>70</td>
          </tr>

          <tr>
            <td>9</td>
            <td>Joshua Moore</td>
            <td>68</td>
          </tr>

          <tr>
            <td>10</td>
            <td>Hannah Chapman</td>
            <td>65</td>
          </tr>

          <tr>
            <td>11</td>
            <td>Paul Meyer</td>
            <td>61</td>
          </tr>

          <tr>
            <td>12</td>
            <td>David Morales</td>
            <td>60</td>
          </tr>

          <tr>
            <td>13</td>
            <td>Hannah Chapman</td>
            <td>59</td>
          </tr>

          <tr>
            <td>14</td>
            <td>Eugene Russo</td>
            <td>57</td>
          </tr>

          <tr>
            <td>15</td>
            <td>Michael Smith</td>
            <td>55</td>
          </tr>

          <tr>
            <td>16</td>
            <td>Jack Smith</td>
            <td>52</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Leaderboard;