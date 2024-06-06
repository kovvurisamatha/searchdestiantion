import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchinput: ''}
  onchangesearchinput = event => {
    this.setState({searchinput: event.target.value})
  }
  render() {
    const {searchinput} = this.state
    const {destinationsList} = this.props

    const searchresults = destinationsList.filter(eachdestination =>
      eachdestination.name.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="card-container">
          <input
            type="search"
            placeholder="search"
            value={searchinput}
            onClick={this.onchangesearchinput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul>
          {searchresults.map(eachdestination => (
            <DestinationItem
              key={eachdestination.id}
              destinationdetails={eachdestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
