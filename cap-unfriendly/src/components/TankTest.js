import React, { Component } from 'react'
import PlayerStatsESPN from './PlayerStatsESPN';

class TankTest extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items: [],
       DataisLoaded: false,
    }
  }

  componentDidMount() {
    //const url = 'https://tank01-nhl-live-in-game-real-time-statistics-nhl.p.rapidapi.com/getNHLPlayerInfo?playerName=panarin&getStats=true';
    const url = 'https://tank01-nhl-live-in-game-real-time-statistics-nhl.p.rapidapi.com/getNHLTeamRoster?teamID=20&getStats=average';
    const options = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': '432a9d63a0msh19261010ace7abep1d3688jsn66c034cfb609',
		    'x-rapidapi-host': 'tank01-nhl-live-in-game-real-time-statistics-nhl.p.rapidapi.com'
	    }
    };  

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const {DataisLoaded, items} = this.state;
    if(!DataisLoaded)
      return (
        <div>
          <h1>Please wait</h1>
        </div>
      );

    return (
      <div>
        {items.body.roster.map((item) => (
          <div>
            <ol key={item.id}>
              <div>
                <strong>
                  {"API Stats"}
                </strong>
                <PlayerStatsESPN espnID={item.espnID}/>
              </div>
            </ol>
          </div>
        ))}
      </div>
    );
  }
}

export default TankTest