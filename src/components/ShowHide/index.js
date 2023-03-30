// Write your code here
import {Component} from 'react'
import './index.css'

const Name = props => {
  const {name} = props

  return <p>{name}</p>
}

class ShowHide extends Component {
  state = {firstNameHidden: true, lastNameHidden: true}

  showFirstName = () => {
    this.setState(prevState => ({firstNameHidden: !prevState.firstNameHidden}))
  }

  showLastName = () => {
    this.setState(prevState => ({lastNameHidden: !prevState.lastNameHidden}))
  }

  render() {
    const {firstNameHidden, lastNameHidden} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1>Show/Hide</h1>
          <div className="show-hide-container">
            <div className="name-cont">
              <button
                type="button"
                className="button"
                onClick={this.showFirstName}
              >
                Show/Hide Firstname
              </button>

              {firstNameHidden ? null : <Name name="Joe" />}
            </div>
            <div className="name-cont">
              <button
                type="button"
                className="button"
                onClick={this.showLastName}
              >
                Show/Hide Lastname
              </button>

              {lastNameHidden ? null : <Name name="Jonas" />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
