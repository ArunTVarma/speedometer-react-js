// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed + 10}))
    }
  }

  brake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="logo"
        />
        <h1 className="description">Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="button-accelerate button"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            className="button-applyBrake button"
            type="button"
            onClick={this.brake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
