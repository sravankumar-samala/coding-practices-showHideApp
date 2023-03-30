// Write your code here
import {Component} from 'react'
import './index.css'

const Name = props => {
  const {name} = props

  return <p>{name}</p>
}

class ShowHide extends Component {
  state = {showFirst: true, showLast: true}

  showFirstName = () => {
    this.setState(prevSate => ({showFirst: !prevSate.showFirst}))
  }

  showLastName = () => {
    this.setState(prevSate => ({showLast: !prevSate.showLast}))
  }

  render() {
    const {showFirst, showLast} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1>Show/Hide</h1>
          <div className="show-hide-container">
            <div className="name-cont">
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.showFirstName}
                >
                  Show/Hide Firstname
                </button>
              </div>

              {showFirst ? <Name name="Joe" /> : null}
            </div>
            <div className="name-cont">
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.showLastName}
                >
                  Show/Hide Lastname
                </button>
              </div>

              {showLast ? <Name name="Jonas" /> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
