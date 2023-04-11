import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMangoes = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1,
    }))
  }

  eatBananas = () => {
    this.setState(prevState => ({
      bananas: prevState.bananas + 1,
    }))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="mainHead">
            Bob ate<span className="number"> {mangoes} </span>mangoes
            <span className="number"> {bananas} </span> bananas
          </h1>
          <div className="subContainer">
            <div className="imageAndBtnContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
                className="imgAlter"
              />
              <button
                onClick={this.eatMangoes}
                type="button"
                className="BtnCSS"
              >
                Eat Mango
              </button>
            </div>
            <div className="imageAndBtnContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananas"
                className="imgAlter"
              />
              <button
                onClick={this.eatBananas}
                type="button"
                className="BtnCSS"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
