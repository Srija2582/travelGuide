import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Travel from './components/Travel'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isLoading: true, travelData: []}

  componentDidMount() {
    this.renderTravelDetails()
  }

  renderTravelDetails = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const updatedData = data.packages.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      imageUrl: eachData.image_url,
      description: eachData.description,
    }))
    this.setState({travelData: updatedData, isLoading: false})
  }

  renderTravelItems = () => {
    const {travelData} = this.state
    // console.log(name)
    return (
      <ul className="list-container">
        {travelData.map(eachItem => (
          <Travel key={eachItem.id} eachPlace={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    // const {name} = travelData

    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="hr-line" />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div> {this.renderTravelItems()}</div>
        )}
      </div>
    )
  }
}
export default App
