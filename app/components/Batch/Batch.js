import React from 'react'
import PropTypes from 'prop-types'
import Phrases from '../../fixtures/documents/phrases/phrases'

const { multilingualPhrases, phonemePhrases } = Phrases

export default class Batch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      phrases: multilingualPhrases,
      phonemePhrases
    }

    this.handleShuffle = this.handleShuffle.bind(this)
    this.handlePhoneme = this.handlePhoneme.bind(this)
  }
  handleShuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  handlePhoneme (phonemeKey) {
    console.log(phonemeKey)

    return (phonemeKey === "SPACE" ? null : phonemeKey)
  }
  render () {
    const { phrases, phonemePhrases } = this.state



    console.log(this.handleShuffle(phrases))

    return (
      <div className='flex-center batch'>
        <ul className='batch-wrapper'>
          <li className='word-wrapper'>
            { phonemePhrases.map((phrase, index) => (
              phrase.phonemes.map((phoneme, index2) => (

                <p className={phoneme[Object.keys(phoneme)[0]]} key={index+index2}>
                  {this.handlePhoneme(Object.keys(phoneme)[0].toUpperCase())}
                </p>

              ))
            ))}
          </li>
        </ul>
        <ul className='batch-wrapper'>
          { phrases.map((phrase, index) => (
            <li className='word-wrapper' key={index}>
              {phrase.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// {phrase.phonemes.map((phoneme, index) => (
//                   JSON.stringify(phoneme, null, 2)
//                 ))}


    // const phonemeColorType =  (selectedPhonemeTag === 'All') ? phonemeColor = null :
    //                       (selectedPhonemeTag === 'AH') ? phonemeColor = 'magenta' :
    //                       (selectedPhonemeTag === 'EH') ? phonemeColor = 'red' :
    //                       (selectedPhonemeTag === 'EEH') ? phonemeColor = 'green' :
    //                       (selectedPhonemeTag === 'OH') ? phonemeColor = 'gold' :
    //                       (selectedPhonemeTag === 'OOH') ? phonemeColor = 'blue': null