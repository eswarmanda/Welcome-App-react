import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isTrue: false}

  isClicked = () => {
    const {isTrue} = this.state
    this.setState(prevState => {
      console.log(`${prevState.isTrue}`)
      if (isTrue === false) {
        return {isTrue: true}
      }
      return {isTrue: false}
    })
  }

  render() {
    const {isTrue} = this.state
    return (
      <div className="cont">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="text">Thank you! Happy Learning</p>
          <button className="btn" type="submit" onClick={this.isClicked}>
            {isTrue ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
