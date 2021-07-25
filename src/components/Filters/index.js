// Write you Code here
import {Component} from 'react'

import './index.css'

class Filters extends Component {
  onChangeLevel = event => {
    const {onChangeLevel} = this.props
    const {value} = event.target

    return onChangeLevel(value)
  }

  onChangeOptions = event => {
    const {value} = event.target
    const {onChangeLanguage} = this.props

    return onChangeLanguage(value)
  }

  render() {
    const {levelsData, categoryData} = this.props
    return (
      <div className="filter">
        <div className="select-options">
          <label htmlFor="language" className="name">
            LANGUAGE
          </label>
          <select className="select-item" onChange={this.onChangeOptions}>
            {categoryData.map(({id, language}) => (
              <option key={id} className="option" value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className="select-options">
          <label htmlFor="difficulty-level" className="name">
            DIFFICULTY LEVEL
          </label>
          <select className="select-item" onChange={this.onChangeLevel}>
            {levelsData.map(({id, level}) => (
              <option key={id} className="option" value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
