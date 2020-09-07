import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../Modal'
import RightNav from './RightNav'
import { ThemeConsumer } from '../../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

function PhonemeNav ({selectedPhonemeTag, phonemeColor, onUpdatePhonemeTag}) {
  const phonemeTags = ['All','AH', 'EH', 'EEH', 'OH', 'OOH']

  return (
    <ul className='flex-center phoneme-nav'>
      {phonemeTags.map((phonemeTag, index) => (
          <li key={index}>
            <button
              className='btn-clear nav-link'
              style={phonemeTag === selectedPhonemeTag ? {color: phonemeColor} : null}
              onClick={() => onUpdatePhonemeTag(phonemeTag)}>
              {phonemeTag}
            </button>
          </li>
        ))}
    </ul>
  )
}

PhonemeNav.propTypes = {
  selectedPhonemeTag: PropTypes.string.isRequired,
  phonemeColor: PropTypes.string,
  onUpdatePhonemeTag: PropTypes.func.isRequired
}

export default class TopNav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedPhonemeTag: 'All',
      phonemeColor: null
    }

    this.updatePhonemeTag = this.updatePhonemeTag.bind(this)
  }
  updatePhonemeTag(selectedPhonemeTag) {
    let phonemeColor

    const phonemeColorType =  (selectedPhonemeTag === 'All') ? phonemeColor = null :
                              (selectedPhonemeTag === 'AH') ? phonemeColor = 'magenta' :
                              (selectedPhonemeTag === 'EH') ? phonemeColor = 'red' :
                              (selectedPhonemeTag === 'EEH') ? phonemeColor = 'green' :
                              (selectedPhonemeTag === 'OH') ? phonemeColor = 'gold' :
                              (selectedPhonemeTag === 'OOH') ? phonemeColor = 'blue': null

    this.setState({
      selectedPhonemeTag,
      phonemeColor
    })
  }
  render() {
    const { selectedPhonemeTag,
            phonemeColor } = this.state

    return (
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <div className='top-nav'>
            <NavLink
              to='/batches'
              exact
              className='nav-link'>
              Posts
            </NavLink>
            <NavLink
              to='/create-phrase'
              exact
              className='nav-link'>
              Create Phrase
            </NavLink>
            <PhonemeNav
              selectedPhonemeTag={selectedPhonemeTag}
              phonemeColor={phonemeColor}
              onUpdatePhonemeTag={this.updatePhonemeTag}
            />
            <button
              style={{fontSize: 30}}
              className='btn-clear'
              onClick={toggleTheme}
            >
              {theme === 'light' ? '🔦' : '💡'}
            </button>
            <RightNav />
          </div>
        )}
      </ThemeConsumer>
    )
  }
}