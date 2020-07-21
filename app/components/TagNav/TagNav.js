import React from 'react'

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
    const phonemeTags = ['All','AH', 'EH', 'EEH', 'OH', 'OOH']

    return (
      <ul className='flex-center'>
        {phonemeTags.map((phonemeTag, index) => (
            <li key={index}>
              <button
                className='btn-clear nav-link'
                style={phonemeTag === this.state.selectedPhonemeTag ? {color: this.state.phonemeColor} : null}
                onClick={() => this.updatePhonemeTag(phonemeTag)}>
                {phonemeTag}
              </button>
            </li>
          ))}
      </ul>
      )
  }
}