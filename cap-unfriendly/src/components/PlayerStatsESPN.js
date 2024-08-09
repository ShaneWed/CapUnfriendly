import React, { Component } from 'react'

export class PlayerStatsESPN extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items: [],
       DataIsLoaded: false,
    }
  }
  
  componentDidMount(espnID) {
    console.log('did mount');
    const url = `https://tank01-nhl-live-in-game-real-time-statistics-nhl.p.rapidapi.com/getNHLPlayerInfo?playerID=${espnID}&getStats=true`;
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
          DataIsLoaded: true,
        });     
      });
  }

  render() {
    const {DataisLoaded, items} = this.state;
    if(!DataisLoaded)
      return (
        <div>
          <h1>Please wait guh</h1>
        </div>
      );

    return (
      console.log(items),
      <React.Fragment>
        {items.body.roster.map((item) => (
          <div>
            <ol key={item.id}>
              <div>
                <strong>
                  {"child component"}
                </strong>
                {item.espnName}
              </div>
            </ol>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default PlayerStatsESPN
