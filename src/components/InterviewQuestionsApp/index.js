// Write you Code here
import {Component} from 'react'

import Filters from '../Filters'
import InterviewQuestion from '../InterviewQuestion'
import './index.css'

let filteredData
class InterviewQuestionsApp extends Component {
  state = {
    language: 'ALL',
    level: 'ALL',
  }

  onChangeLanguage = value => {
    this.setState({
      language: value,
    })
  }

  onChangeLevel = value => {
    this.setState({
      level: value,
    })
  }

  getFilteredData = () => {
    const {language, level} = this.state
    const {questionsData} = this.props
    if (language === 'ALL' && level === 'ALL') {
      filteredData = questionsData
    } else if (language === 'ALL' && level !== 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.difficultyLevel === level,
      )
    } else if (language !== 'ALL' && level === 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.language === language,
      )
    } else {
      filteredData = questionsData.filter(
        eachQuestion =>
          eachQuestion.language === language &&
          eachQuestion.difficultyLevel === level,
      )
    }
    return filteredData
  }

  render() {
    const filteredQuestionsData = this.getFilteredData()
    const {levelsData, categoryData} = this.props

    return (
      <div className="bg">
        <div className="heading-container">
          <h1 className="heading">30 Seconds of Interviews</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="img"
          />
        </div>
        <div className="container">
          <Filters
            levelsData={levelsData}
            categoryData={categoryData}
            onChangeLevel={this.onChangeLevel}
            onChangeLanguage={this.onChangeLanguage}
          />
          {filteredQuestionsData.map(eachQuestion => (
            <InterviewQuestion key={eachQuestion.id} question={eachQuestion} />
          ))}
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
