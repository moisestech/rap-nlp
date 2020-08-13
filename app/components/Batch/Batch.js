import React from 'react'
import PropTypes from 'prop-types'
import Phrases from '../../fixtures/documents/phrases/phrases'
import { handleShuffle } from '../../utils/sorts'

const { multilingualPhrases, phonemePhrases } = Phrases

export default class Batch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      phrases: multilingualPhrases,
      phonemePhrases
    }
  }
  render () {
    const { phrases, phonemePhrases } = this.state

    handleShuffle(phonemePhrases)

    return (
      <div className='flex-center batch'>
        <div className='batch-wrapper'>
          { phonemePhrases.map((phrase, index) => (
            <ul className='phrase-wrapper' key={index}>
              { phrase.esp.map((wordsArray, index2) => (
                <li className='word-wrapper' key={index+index2}>
                  {/*console.log(Array.isArray(wordsArray), index+index2, wordsArray[0])*/}
                  {wordsArray.map((phoneme, index3) => (
                    <p className={"phoneme-color " + phoneme[Object.keys(phoneme)[0]]} key={index+index2+index3}>
                      {Object.keys(phoneme)[0].toUpperCase()}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <ul className='batch-wrapper'>
          { phrases.map((phrase, index) => (
            <li className='phrase-wrapper' key={index}>
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