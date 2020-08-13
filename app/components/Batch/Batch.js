import React from 'react'
import PropTypes from 'prop-types'
import AllPhrases from '../../fixtures/documents/phrases/allPhrases'
import { handleShuffle } from '../../utils/sorts'

const { phonemePhrases } = AllPhrases


function Phonemes ({ phoneme, index }) {
  return (
    <p
      className={"phoneme-color " + phoneme[Object.keys(phoneme)[0]]}
      key={index}>
      {Object.keys(phoneme)[0].toUpperCase()}
    </p>
  )
}

Phonemes.propTypes = {
  phoneme: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

function Words ({ words, index }) {
  return (
    <li className='word-wrapper' key={index}>
      {/*console.log(Array.isArray(words), index+index2, words[0])*/}
      {words.map((phoneme, index3) => (
        <Phonemes
          phoneme={phoneme}
          index={index+index3}
          key={index3}
        />
      ))}
    </li>
  )
}

Words.propTypes = {
  words: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
}

function Phrases ({ phrases, index }) {
  return (
    <ul className='phrase-wrapper' key={index}>
      { phrases.esp.map((espWordsArray, index2) => (
        <Words
          words={espWordsArray}
          index={index+index2}
          key={index2}
        />
      ))}
    </ul>
  )
}

Phrases.propTypes = {
  phrases: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}


export default class Batch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      phrases: phonemePhrases
    }
  }
  render () {
    const { phrases } = this.state

    // shuffles array of phrases
    handleShuffle(phonemePhrases)

    return (
      <div className='flex-center batch'>
        <div className='batch-wrapper'>
          { phrases.map((phrases, index1) => (
            <Phrases
              phrases={phrases}
              index={index1}
              key={index1}
            />
          ))}
        </div>
      </div>
    )
  }
}




// {phrase.phonemes.map((phoneme, index) => (
//                   JSON.stringify(phoneme, null, 2)
//                 ))}

//        <ul className='batch-wrapper'>
//          { phrases.map((phrase, index) => (
//            <li className='phrase-wrapper' key={index}>
//              {phrase.toUpperCase()}
//            </li>
//          ))}
//        </ul>


    // const phonemeColorType =  (selectedPhonemeTag === 'All') ? phonemeColor = null :
    //                       (selectedPhonemeTag === 'AH') ? phonemeColor = 'magenta' :
    //                       (selectedPhonemeTag === 'EH') ? phonemeColor = 'red' :
    //                       (selectedPhonemeTag === 'EEH') ? phonemeColor = 'green' :
    //                       (selectedPhonemeTag === 'OH') ? phonemeColor = 'gold' :
    //                       (selectedPhonemeTag === 'OOH') ? phonemeColor = 'blue': null