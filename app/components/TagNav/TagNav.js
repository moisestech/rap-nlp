import React from 'react'
import PropTypes from 'prop-types'

function PhonemeNav ({selectedPhonemeTag, phonemeColor, onUpdatePhonemeTag}) {
  const phonemeTags = ['All','AH', 'EH', 'EEH', 'OH', 'OOH']

  return (
    <ul className='flex-center'>
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
  phonemeColor: PropTypes.string.isRequired,
  onUpdatePhonemeTag: PropTypes.func.isRequired
}

export default class TagNav extends React.Component {
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
      <React.Fragment>
        <PhonemeNav
          selectedPhonemeTag={selectedPhonemeTag}
          phonemeColor={phonemeColor}
          onUpdatePhonemeTag={this.updatePhonemeTag}
        />
      </React.Fragment>
    )
  }
}