import React, { PropTypes, Component } from 'react'
import cn from 'classnames'
// import { Motion, spring } from 'react-motion'

import Word from '../Word/Word'

class Phrase extends Component {
  static displayName = 'Phrase'

  static propTypes = {
    'allPhrases': PropTypes.obj,
    'phraseId': PropTypes.obj,
    'onClick': PropTypes.func,
    'bgSoundColor': PropTypes.string
  }

  constructor(props) {
    super(props)

    this.resetAnim = this.resetAnim.bind(this)
  }

  state = {
    animIn: true,
    animOut: false,
    animating: true
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({
      mounted: true
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.phraseId !== this.props.phraseId || nextState.animOut === true) {
      console.log("TRUE | PHRASE-ID: ",
        `${nextProps.phraseId} !== ${this.props.phraseId}`)
      this.resetAnim()
      return true
    }
    return false
  }

  resetAnim() {
    this.setState({
      animIn: true,
      animOut: false,
      animating: true
    })
  }

  render() {
    const { animIn, animOut } = this.state
    const { allPhrases, phraseId,
            bgSoundColor, onClick } = this.props

    const phraseCN = cn(
      'Phrase', {
        '--animIn': animIn,
        '--animOut': animOut
      })

    return (
      <div className="Phrase-wrapper">
        <div className={phraseCN}
          onClick={() => {
            this.setState({
              animIn: false,
              animOut: true})
            setTimeout(onClick, 50)
          }}
          style={{background: bgSoundColor}}>

            {allPhrases[phraseId]
              .phraseWords.map((word, id) => {
                return (
                  <Word {...word}
                    {...this.props}
                    phonemes={word.wordPhoneme}
                    posTag={word.wordPosTag}
                    id={id} key={id}/>
                )
            })}
        </div>
      </div>
    )
  }
}

export default Phrase
