// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {enterPhrase: 0}

  countLetters = event => {
    const inputText = event.target.value
    const wordCount = inputText.length

    this.setState({enterPhrase: wordCount})
  }

  render() {
    const {enterPhrase} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <div>
            <h1>Calculate the Letters you enter</h1>
            <label for="phraseInput">Enter the phrase</label>
            <input
              type="text"
              className="inputElement"
              id="phraseInput"
              placeholder="Enter the phrase"
              onChange={this.countLetters}
            />
            <p className="coutBackground">No.of letters: {enterPhrase}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="calciImage"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
