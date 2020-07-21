import React, { PropTypes, Component } from 'react'
import cn from 'classnames'
import { textEffectsMap } from '../../fixtures/style/textEffectsMap'
import { backgroundEffectsMap } from '../../fixtures/style/backgroundEffectsMap'
// import SVGFilters from '../SVGFilters/SVGFilters'

class Word extends Component {
  static displayName = 'Word'

  static propTypes = {
    'setColor': PropTypes.func,
    'syllableCount': PropTypes.number,
    'word': PropTypes.string,
    'vowelsound': PropTypes.array,
    'phonemes': PropTypes.string,
    'phonemesArray': PropTypes.array,
    'posTag': PropTypes.object,
    'posActive': PropTypes.boolean,
    'phonemesActive': PropTypes.boolean
  }

  constructor(props) {
    super(props)

    this.getVowels = this.getVowels.bind(this)
    this.isVowel = this.isVowel.bind(this)
    this.setVowelSoundColor = this.setVowelSoundColor.bind(this)

    this.changeAllLayers = this.changeAllLayers.bind(this)
    this.changeBackgroundEffect = this.changeBackgroundEffect.bind(this)
    this.changeTextEffect = this.changeTextEffect.bind(this)
  }

  state = {
    layerId1: "layerId1",
    text: "",
    background: ""
  }

  changeTextEffect() {
    const text = textEffectsMap[
      Math.floor(
        (Math.random() * textEffectsMap.length)
      )]

    const { layers } = this.state
    layers.text = text

    this.setState({layers})
  }

  changeBackgroundEffect() {
    const background = backgroundEffectsMap[
      Math.floor(
        (Math.random() * backgroundEffectsMap.length)
      )]

    const { layers } = this.state
    layers.background = background

    this.setState({layers})
  }

  changeAllLayers(ev) {
    ev.preventDefault()
    this.changeTextEffect()
    this.changeBackgroundEffect()
  }

  setSyllableColor(syllableCount) {
    switch (syllableCount) {
      case 1:
        return 'red'
      case 2:
        return 'green'
      case 3:
        return 'blue'
      case 4:
        return 'orange'
      case 5:
        return 'magenta'
      default:
        return ''
    }
  }

  // setVowelSoundColor(vowelsound) {
  //   switch (vowelsound) {
  //     case 'oʊ':
  //       return '#E488B9' // rose
  //     case 'ɑ':
  //       return '#222222' // black
  //     case 'aʊ':
  //       return '#87552A' // brown
  //     case 'ɪ':
  //       return '#BFBDBD' // silver
  //     case 'ɜ':
  //       return '#ED203C' // scarlet
  //     case 'aɪ':
  //       return '#004C79' // white
  //     case 'æ':
  //       return '#e0bf9e' // almond
  //     case 'i':
  //       return 'green' // green
  //     case 'ə':
  //       return 'orange' // orange
  //     case 'eɪ':
  //       return 'gray' // gray
  //     case 'ɛ':
  //       return 'red' // red
  //     case 'u':
  //       return 'blue' // blue
  //     case 'ʌ':
  //       return '#E3C228' // mustard
  //     case 'ɪɪ':
  //       return 'cyan'
  //     case 'ɔ':
  //       return 'plum'
  //     default:
  //       return 'black'
  //   }
  // }

  setVowelSoundColor(vowelSound) {
    switch (vowelSound) {
      case 'ey' :
        return 'gray' // gray
      case 'ae' :
      case 'aa' :
      case 'aw' :
      case 'ah' :
        return 'magenta' // '#222222' black return '#e0bf9e' // almond
      case 'i' :
      case 'iy' :
        return 'green' // green return '#BFBDBD' // silver
      case 'ih' :
        return 'pink' // pink
      case 'er' :
      case 'eh' :
        return 'red' // red return 'orange' // orange
      case 'ai' :
      case 'ay' :
      case 'oy' :
        return '#73c2e0' // cyan ~
      case 'ow' :
        return '#87552A' // brown
      case 'ao' :
        return 'gold' // '#E488B9' rose
      case 'u' :
      case 'yu' :
      case 'uw' :
      case 'uh' :
        return 'blue' // blue return '#ED203C' // scarlet
      default:
        return false
    }
  }

  isVowel(phoneme) {
    switch (phoneme) {
      case 'ey' :
      case 'ae' :
      case 'aa' :
      case 'aw' :
      case 'ah' :
      case 'i' :
      case 'ih' :
      case 'er' :
      case 'eh' :
      case 'iy' :
      case 'ai' :
      case 'ay' :
      case 'oy' :
      case 'ow' :
      case 'ao' :
      case 'u' :
      case 'yu' :
      case 'uw' :
      case 'uh' :
        return true
      default:
        return false
    }
  }

  getVowels(phonemesArray) {
    const vowelsArray = []
    for (let i = 0; i < phonemesArray.length; i++) {
      if (this.isVowel(phonemesArray[i])) {
        vowelsArray.push(phonemesArray[i])
      }
    }
    return vowelsArray
  }

  render() {
    // const styles = _.cloneDeep(this.constructor.styles)
    // const { text, background } = this.state

    // console.log(text)
    // console.log(background)

    // const textStyle = cn(`${text}`)
    // const bgStyle = cn(`${background}`)

    // console.log(textStyle)
    // console.log(bgStyle)

    const { word, phonemes, posTag, posActive,
            phonemesActive } = this.props

    const WordClasses = cn('Word-wrapper', {
      'complete': false
    })

    const WordPosClasses = cn('Word-pos', {
      '--off': !posActive
    })

    const WordSymbolWrapperClasses = cn('Word-symbol-wrapper', {
      '--off': !phonemesActive
    })

    const phonemesArray = phonemes.split('-')

    const vowelsArray = this.getVowels(phonemesArray)
    // console.log(`${word}: `, vowelsArray)

    const vowelsounds = []
    const vowelSoundsArray = []

    for (let i = 0; i < vowelsArray.length; i++) {
      vowelSoundsArray.push(vowelsArray[i])
      vowelsounds.push(
        <span className={"Word-symbol"} id={i} key={i}
          style={{color: this.setVowelSoundColor(vowelsArray[i])}}>
          {vowelsArray[i]}
        </span>
      )
    }

    const lastVowel = vowelSoundsArray[vowelSoundsArray.length - 1]
    // console.log('LAST-VOWEL: ', lastVowel)
    // console.log('PHONEMES-ACTIVE: ', phonemesActive)

    return (
      <div className={WordClasses} style={
          {background: this.setVowelSoundColor(lastVowel),
           borderColor: this.setVowelSoundColor(lastVowel)}}>
        <span className={WordSymbolWrapperClasses}>
          {vowelsounds}
        </span>
        <span className={WordPosClasses}>
          {posTag.posTag}
        </span>
        <span className={"Word-content"}>
          {word}
        </span>
      </div>
    )
  }
}

export default Word
