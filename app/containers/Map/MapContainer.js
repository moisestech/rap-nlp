import React, { Component } from 'react'

import Documents from '../../fixtures/documents'

import Document from '../../components/Document/Document'

import SVGFilters from '../../components/SVGFilters/SVGFilters'

// import styles from '../../fixtures/style/'

import textEffectsMap from '../../fixtures/style/textEffectsMap'

// import ReactPlayer from 'react-player'
// import jsonfile from 'jsonfile'

// ACTIVE DOCUMENTS
const { allPhrases,
        allPhraseIds,
        currentPhraseIds,
        lyrics_milo_folk_meta_physics } = Documents

class DocumentContainer extends Component {
  static displayName = 'DocumentContainer'

  state = {
    allDocuments: Documents,
    activeDocuments: {
      allPhrases,
      allPhraseIds,
      currentPhraseIds
    },
    activePhraseIds: [],
    parseDoc: true
  }

  constructor(props) {
    super(props)

    this.shouldParseDoc = this.shouldParseDoc.bind(this)
    this.parseDoc = this.parseDoc.bind(this)

    this.setPhrasesParsed = this.setPhrasesParsed.bind(this)
    this.setPhraseArray = this.setPhraseArray.bind(this)
    this.sortPhraseArray = this.sortPhraseArray.bind(this)
    this.sortByPhonemeLength = this.sortByPhonemeLength.bind(this)
    this.sortByPhonemeLengthVowelSound = this.sortByPhonemeLengthVowelSound.bind(this)
    this.sortPhraseArrayByPhonemeLengthVowelSound
      = this.sortPhraseArrayByPhonemeLengthVowelSound.bind(this)

    this.isVowel = this.isVowel.bind(this)

    this.getPOSName = this.getPOSName.bind(this)
    this.getPhonemeSound = this.getPhonemeSound.bind(this)
    this.getPhonemeLetter = this.getPhonemeLetter.bind(this)
    this.getVowels = this.getVowels.bind(this)

    this.phraseClick = this.phraseClick.bind(this)
    this.deletePhrase = this.deletePhrase.bind(this)
    this.addPhrase = this.addPhrase.bind(this)

    this.addLayer = this.addLayer.bind(this)
    this.removeLayer = this.removeLayer.bind(this)

    this.randTextEffect = this.randTextEffect.bind(this)
    this.shuffleArray = this.shuffleArray.bind(this)
  }

  componentDidMount() {
    const { RiTa } = window
    const docToParse = lyrics_milo_folk_meta_physics

    console.log("COMPONENT-DID-MOUNT!")
    // If docToParse is new
    // trigger parseDoc function cycle
    const shouldParseDoc = this.shouldParseDoc(docToParse)
    if (shouldParseDoc) this.parseDoc(RiTa, docToParse)
      console.log("SHOULD-PARSE-DOC: ", shouldParseDoc)
  }

  shouldParseDoc(docToParse) {
    const { allDocuments } = this.state
    let shouldParseDoc

    // console.log(allDocuments)

    if (allDocuments.docIds.docArray.length === 0) {
      shouldParseDoc = true
    }

    allDocuments.docIds.docArray.forEach((docId) => {
      if (docId !== docToParse.documentId) {
        shouldParseDoc = true
        return null
      }
      shouldParseDoc = false
      return null
    })
    return shouldParseDoc
  }

  parseDoc(RiTa, docToParse) {
    const { allDocuments } = this.state

    // Creates Phrases Parsed
    // in single Obj
    const phrasesParsed = this.setPhrasesParsed(
      RiTa, docToParse)
      // console.log("PHRASES-PARSED: ", phrasesParsed)
      // console.log(JSON.stringify(phrasesParsed, 0, 2))

    // Creates Phrases IDs Array
    // in sequential order
    const phraseArrayIDs =
      this.setPhraseArray(phrasesParsed.phrases)
      // console.log("PHRASES-ARRAY-IDS: ", phraseArrayIDs)
      // console.log(JSON.stringify(phraseArrayIDs, 0, 2))


    // Creates Phrases IDs Array
    // in sorted Phoneme Length Order
    const phraseArrayIDsSortedPhonemeLength =
      this.sortPhraseArray(phraseArrayIDs, phrasesParsed)
      // console.log("PHRASES-IDS-SORTED-PHONEME-LENGTH: ", phraseArrayIDsSortedPhonemeLength)
      // console.log(JSON.stringify(phraseArrayIDsSortedPhonemeLength, 0, 2))


    // // Creates Phrases Obj
    // // parsed by Phoneme Length Order
    // // const phrasesSortedPhonemeLength
    // //   = this.sortByPhonemeLength(
    // //       phraseArrayIDsSortedPhonemeLength,
    // //       allDocuments.docSortedLengthTemplate, docObj)

    // (GET THIS WORKING***)
    // Creates Phrases Obj
    // parsed by Phoneme Length Order
    // and Vowel Sound

    const phrasesSortedPhonemeVowel
      = this.sortByPhonemeLengthVowelSound(
          phraseArrayIDsSortedPhonemeLength,
          allDocuments.docParsedTemplate, phrasesParsed)

          // console.log("PHRASES-SORTED-PHONEME-VOWEL: ", phrasesSortedPhonemeVowel)
          // console.log(JSON.stringify(phrasesSortedPhonemeVowel, 0, 2))


    // Creates Phrases IDs Array
    // parsed by Phoneme Length Order
    // and Vowel Sound
    const phrasesSortedPhonemeVowelIDs
      = this.sortPhraseArrayByPhonemeLengthVowelSound(
          phrasesSortedPhonemeVowel)

          // console.log("PHRASES-SORTED-PHONEME-VOWEL-IDS: ", phrasesSortedPhonemeVowelIDs)
          // console.log(JSON.stringify(phrasesSortedPhonemeVowelIDs, 0, 2))
  }

  setPhrasesParsed(RiTa, phraseArrayObjs) {
    const documentId = phraseArrayObjs.documentId
    const phrasesParsed = {
      title: phraseArrayObjs.title,
      phrases: {}
    }

    phraseArrayObjs.phrases.map((phraseObj, phraseId) => {
        const { phraseToParse } = phraseObj
        const phrase = phraseToParse

        console.log("PHRASE: ", phrase)
        // PHRASE CONSTANTS
        const parsedPhrase = phrase.replace(/[?,'!]/g, '')
        const wordsInPhrase = parsedPhrase.split(' ')
        const phrasePhonemes = RiTa.getPhonemes(parsedPhrase)
        const phrasePhonemesArray = phrasePhonemes.match(/[^\s-]+/g)
        const phraseVowelsArray = this.getVowels(phrasePhonemesArray)

        // WORDS IN PHRASE
        const textArray = wordsInPhrase.map((word, wordId) => {
          // WORD CONSTANTS
          const parsedWord = word.replace(/'/, '')
          const wordPhoneme = RiTa.getPhonemes(parsedWord)
          const wordPhonemesArray = wordPhoneme.match(/[^\s-]+/g)
          const wordVowelsArray = this.getVowels(wordPhonemesArray)
          const wordPOSTag = RiTa.getPosTags(word)[0]

          // WORD OBJECT RETURNED
          return ({
            wordId: `${documentId}-${phraseId}-${wordId}`,
            word,
            wordPhoneme,
            wordPhonemesArray,
            wordVowelsArray,
            wordPhonemeCount: wordVowelsArray.length,
            wordPosTag: {
              posTag: wordPOSTag,
              posName: this.getPOSName(wordPOSTag)
            },
            wordStresses: RiTa.getStresses(parsedWord),
            documentId,
            wordCategory: {
              "wordCategory1Id": "wordCategory1",
              "wordCategory2Id": "wordCategory2"
            }
          })
        })

        const phraseLastPhoneme = textArray[textArray.length - 1]
          .wordVowelsArray[textArray[textArray.length - 1].wordVowelsArray.length - 1]

        const phraseParsed = {
          phraseId: `${documentId}-${phraseId}`,
          phrase,
          parsedPhrase,
          phrasePhonemes,
          phrasePhonemesArray,
          phraseVowelsArray,
          phraseWordCount: wordsInPhrase.length,
          phrasePhonemeCount: phraseVowelsArray.length,
          phraseLastPhoneme,
          phraseWords: textArray,
          documentId,
          phraseCategory: {
            "phraseCategory1Id": "phraseCategory1",
            "phraseCategory2Id": "phraseCategory2"
          },
          phraseMetaData: phraseObj.metaData,
          phraseImgData: phraseObj.imgData
        }

        // MASTER PHRASE OBJECT
        allPhrases[`${documentId}-${phraseId}`] = phraseParsed

        // DOC PHRASE OBJECT
        phrasesParsed.phrases[`${documentId}-${phraseId}`] = phraseParsed

        // MASTER PHARASE IDS
        allPhraseIds.phraseIds.push(`${documentId}-${phraseId}`)

        // console.log("PHRASES-PARSED: ", phrasesParsed)
        console.log(JSON.stringify(phrasesParsed, 0, 2))
        // return phrasesParsed

        // just log the last object log
        return null
    })

    // console.log("ALL-PHRASES: ", allPhrases)
    // console.log(JSON.stringify(allPhrases, 0, 2))
    // console.log("ALL-PHRASE-IDS: ", allPhraseIds)
    // console.log(JSON.stringify(allPhraseIds, 0, 2))
    return phrasesParsed
  }

  setPhraseArray(parsedPhrases) {
    const setPhraseArray = []

    Object.keys(parsedPhrases).forEach((key) => {
      setPhraseArray.push(key)
    })

    return setPhraseArray
  }

  sortPhraseArray(phraseArrayIDs, docObj) {
    return phraseArrayIDs.sort((a, b) => {
      return parseFloat(docObj.phrases[a].phrasePhonemeCount)
        - parseFloat(docObj.phrases[b].phrasePhonemeCount)
    })
  }

  // (GET THIS WORKING**)
  sortByPhonemeLength(phraseArraySorted, sortedLengthTemplate, docObj) {
    const phrasesSortedPhonemeLength = sortedLengthTemplate

    phraseArraySorted.map((phraseId) => {
      phrasesSortedPhonemeLength[`phraseLength${docObj
        .phrases[phraseId].phrasePhonemeCount}`]
          [`${phraseId}`] = docObj
            .phrases[phraseId]

      return null
    })

    return phrasesSortedPhonemeLength
  }

  // (GET THIS WORKING**)
  sortByPhonemeLengthVowelSound(phraseArraySorted, docParsedTemplate, docObj) {
    const phrasesSortedPhonemeVowel = docParsedTemplate

    phraseArraySorted.map((phraseId) => {
      console.log("PHRASE-ID: ", phraseId)
      const phonemeCount = docObj.phrases[phraseId].phrasePhonemeCount
      const vowelLetter = docObj.phrases[phraseId].phraseLastPhoneme.vowelLetter
      const vowelSound = docObj.phrases[phraseId].phraseLastPhoneme.vowelSound

      docParsedTemplate[`phonemeLength${phonemeCount}`]
        [`${vowelLetter}_${vowelSound}`]
          [`${phraseId}`] = docObj.phrases[phraseId]

      return null
    })

    return phrasesSortedPhonemeVowel
  }

  // (GET THIS WORKING**)
  sortPhraseArrayByPhonemeLengthVowelSound(phrasesSortedPhonemeVowel) {
    // Loop through keys and log the phrases
    // in Phoneme Length and Vowel Sound Order
    const phrasesParsedIDs = []
    Object.keys(phrasesSortedPhonemeVowel).forEach((phonemeLength) => {
      Object.keys(phrasesSortedPhonemeVowel[phonemeLength]).forEach((vowelSound) => {
        Object.keys(phrasesSortedPhonemeVowel[phonemeLength][vowelSound]).forEach((phraseId) => {
          phrasesParsedIDs.push(phraseId)
          // console.log(phrasesSortedPhonemeVowel[phonemeLength][vowelSound][phraseId].phrase)
          return null
        })
      })
    })

    return phrasesParsedIDs
  }

  getVowels(phonemesArray) {
    const vowelsArray = []
    for (let i = 0; i < phonemesArray.length; i++) {
      console.log("PHONEMES-ARRAY: ", phonemesArray.length)
      if (this.isVowel(phonemesArray[i])) {
        vowelsArray.push({
          vowelPhoneme: phonemesArray[i],
          vowelSound: this.getPhonemeSound(phonemesArray[i]),
          vowelLetter: this.getPhonemeLetter(phonemesArray[i])
        })
      }
    }
    return vowelsArray
  }

  getPhonemeLetter(phoneme) {
    switch (phoneme) {
      case 'ey' :
        return 'A' // gray
      case 'ae' :
      case 'aa' :
        return 'A' // black
      case 'aw' :
      case 'ah' :
        return 'A' // almond
      case 'i' :
      case 'ih' :
        return 'E' // green
      case 'er' :
        return 'E' // orange
      case 'eh' :
        return 'E' // red
      case 'iy' :
        return 'I' // silver
      case 'ai' :
      case 'ay' :
      case 'oy' :
        return 'I' // white
      case 'ow' :
        return 'O' // rose
      case 'ao' :
        return 'O' // brown
      case 'u' :
      case 'yu' :
        return 'U' // scarlet
      case 'uw' :
      case 'uh' :
        return 'U' // blue
      default:
        return false
    }
  }

  getPhonemeSound(phoneme) {
    switch (phoneme) {
      case 'ey' :
        return 'long' // gray A
      case 'ae' :
      case 'aa' :
        return 'short' // black A
      case 'aw' :
      case 'ah' :
        return 'short' // almond A
      case 'i' :
      case 'ih' :
        return 'long' // green E
      case 'er' :
        return 'long' // orange E
      case 'eh' :
        return 'short' // red E
      case 'iy' :
        return 'short' // silver I
      case 'ai' :
      case 'ay' :
      case 'oy' :
        return 'long' // white I
      case 'ow' :
        return 'long' // rose O
      case 'ao' :
        return 'short' // brown O
      case 'u' :
      case 'yu' :
        return 'long' // scarlet U
      case 'uw' :
      case 'uh' :
        return 'short' // blue U
      default:
        return false
    }
  }

  getPOSName(posTag) {
    switch (posTag) {
      case 'cc' :
        return 'Coordinating conjunction'
      case 'cd' :
        return 'Cardinal number'
      case 'dt' :
        return 'Determiner'
      case 'ex' :
        return 'Existential there'
      case 'fw' :
        return 'Foreign word'
      case 'in' :
        return 'Preposition or subordinating conjunction'
      case 'jj' :
        return 'Adjective'
      case 'jjr' :
        return 'Adjective, comparative'
      case 'jjs' :
        return 'Adjective, superlative'
      case 'ls' :
        return 'List item marker'
      case 'md' :
        return 'Modal'
      case 'nn' :
        return 'Noun, singular or mass'
      case 'nns' :
        return 'Noun, plural'
      case 'nnp' :
        return 'Proper noun, singular'
      case 'nnps' :
        return 'Proper noun, plural'
      case 'pdt' :
        return 'Predeterminer'
      case 'pos' :
        return 'Possessive ending'
      case 'prp' :
        return 'Personal pronoun'
      case 'prp$' :
        return 'Possessive pronoun'
      case 'rb' :
        return 'Adverb'
      case 'rbr' :
        return 'Adverb, comparative'
      case 'rbs' :
        return 'Adverb, superlative'
      case 'rp' :
        return 'Particle'
      case 'sym' :
        return 'Symbol'
      case 'to' :
        return 'to'
      case 'uh' :
        return 'Interjection'
      case 'vb' :
        return 'Verb, base form'
      case 'vbd' :
        return 'Verb, past tense'
      case 'vbg' :
        return 'Verb, gerund or present participle'
      case 'vbn' :
        return 'Verb, past participle'
      case 'vbp' :
        return 'Verb, non-3rd person singular present'
      case 'vbz' :
        return 'Verb, 3rd person singular present'
      case 'wdt' :
        return 'Wh-determiner'
      case 'wp' :
        return 'Wh-pronoun'
      case 'wp$' :
        return 'Possessive wh-pronoun'
      case 'wrb' :
        return 'Wh-adverb'
      default :
        console.log("getPOSName error", posTag)
        return false
    }
  }

  isVowel(phoneme) {
    switch (phoneme) {
      case 'ey' :
        return 'gray' // gray
      case 'ae' :
      case 'aa' :
      case 'aw' :
      case 'ah' :
        return 'magenta' // '#222222' // black return '#e0bf9e' // almond
      case 'i' :
      case 'ih' :
      case 'iy' :
        return 'green' // green return '#BFBDBD' // silver
      case 'er' :
      case 'eh' :
        return 'red' // red return 'orange' // orange
      case 'ai' :
      case 'ay' :
      case 'oy' :
        return '#004C79' // white
      case 'ow' :
        return 'gold' // '#E488B9' // rose
      case 'ao' :
        return '#87552A' // brown
      case 'u' :
      case 'yu' :
      case 'uw' :
      case 'uh' :
        return 'blue' // blue return '#ED203C' // scarlet
      default:
        return false
    }
  }

  phraseClick(phraseObj, phraseIndex) {
    // console.log("PHRASE-OBJ: ", phraseObj)
    this.addLayer(phraseObj.phraseId)
    this.deletePhrase(phraseObj, phraseIndex)
  }

  deletePhrase(phraseObj, phraseIndex) {
    const { currentPhraseIds } = this.state.activeDocuments
    // const { activeDocuments } = this.state

    // console.log("CURRENT-PHRASE-ID: ", currentPhraseIds.phraseIds[phraseIndex])
    // console.log("PHRASE-INDEX: ", phraseIndex)

    // delete currentPhraseIds.phraseIds[phraseIndex]
    currentPhraseIds.phraseIds.splice(phraseIndex, 1)
    // activeDocuments.currentPhraseIds = currentPhraseIds

    // this.setState({activeDocuments}, cb)
    this.addPhrase(currentPhraseIds, phraseIndex)
  }

  addPhrase(nextPhraseIds, prevPhraseIndex) {
    console.log("ADD-PHRASE")

    const { allPhraseIds } = this.state.activeDocuments
    const { activeDocuments } = this.state
    const allPhraseIdsArray = allPhraseIds.phraseIds

    const randPhraseId =
      allPhraseIdsArray[
        Math.floor(Math.random() *
        allPhraseIdsArray.length)]

    nextPhraseIds.phraseIds.splice(prevPhraseIndex, 0, randPhraseId)

    activeDocuments.currentPhraseIds = nextPhraseIds
    this.setState({activeDocuments})
  }

  addLayer(layerId) {
    // const { activePhraseIds } = this.state
    // activePhraseIds.push(layerId)
    this.setState({activePhraseIds: [layerId]})
    // this.setState({activePhraseIds})
  }

  removeLayer() {
    // layerId, layerIndex
    const { activePhraseIds } = this.state
    console.log("ACTIVE-PHRASE-IDS: ", activePhraseIds)
    activePhraseIds.splice(0, 1)
    this.setState({activePhraseIds})
  }

  randTextEffect() {
    return textEffectsMap.textEffectsMap[Math.floor(Math.random() * 32)]
  }

  shuffleArray(array) {
    let arrayClone = []

    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const itemAtIndex = array[randomIndex]

      array[randomIndex] = array[i]
      array[i] = itemAtIndex

      arrayClone = array
    }

    return arrayClone
  }

  render() {
    const { allPhrases, currentPhraseIds
          } = this.state.activeDocuments

    const { activePhraseIds } = this.state

    const currentPhraseIdsCopy = currentPhraseIds
    // ("UNCOMMENT TO SHUFFLE ARRAY")
    // currentPhraseIdsCopy.phraseIds = this.shuffleArray(currentPhraseIds.phraseIds)

    return (
      <div className="Map">
        <div className="Background-wrapper"></div>

        <Document {...this.props}
          allPhrases={allPhrases}
          phraseIds={currentPhraseIdsCopy}
          phraseClick={this.phraseClick}/>

        <div className="Renderer">
          { activePhraseIds.map((phraseId, index) => {
            console.log("PHRASE-OBJ: ", allPhrases[phraseId])
            const { phraseImgData, phrase } = allPhrases[phraseId]

            // ,phraseMetaData
            // console.log("PHRASE-META-DATA: ", phraseMetaData)

            // Use phrase IMG
            // or use default
            console.log("PHRASE-IMG-DATA: ", phraseImgData.url)
            let phraseImgPath = "default"
            let phraseImgSrc = "default.gif"
            if (phraseImgData.url.length) {
              phraseImgPath = allPhrases[phraseId].documentId
              phraseImgSrc = phraseImgData.url
            }

            const phraseImgEl = <img className="Phrase-image" src={
              require(`../../assets/${phraseImgPath}/${phraseImgSrc}`)} />

            // const phraseImgEl = (<div style={
            //   {height: 500,
            //   width: 500,
            //   border: '1px solid red',
            //   backgroundImage: `url(../../images/art404_logo.png)`,
            //   backgroundSize: 'contain',
            //   position: 'absolute'
            // }}></div>)

            console.log(`assets/${phraseImgPath}/${phraseImgSrc}`)

            // META DATA ELEMENT
            // const phraseMetaDataEl = []
            // Object.keys(phraseMetaData).forEach((metaData, index) => {
            //   // console.log(`${metaData}: `, phraseMetaData[metaData])
            //   phraseMetaDataEl.push(
            //     <div key={index} className="Render-subtext motion">
            //       <div className="Render-keytext">{metaData}</div>
            //       <div className="Render-keyvalue">{phraseMetaData[metaData]}</div>
            //     </div>)
            // })
            // {phraseMetaDataEl}

            // console.log(phraseMetaDataEl)
            // setTimeout(() => this.removeLayer(phraseId, index), 10000)
            // this.removeLayer(phraseId, index)


            const textEffect = this.randTextEffect()

            return (
              <div key={index}
                className={`Render-layer layer-${index}`}
                style={{zIndex: (index * 2)}}>
                <div className="Render-info">
                  <div>
                    <div className={`Render-text ${textEffect}`}>
                      {phrase}
                    </div>
                  </div>


                </div>
                <div className="Render-image">
                  {phraseImgEl}
                </div>
              </div>
            )
          })}
        </div>

        <SVGFilters />
      </div>
    )
  }
}

export default DocumentContainer


// <div className={`Render-text ${textEffect}-before`}>
//                       {phrase}
//                     </div>
// <div className={`Render-text ${textEffect}-after`}>
//                       {phrase}
//                     </div>

// <div className="Background-wrapper">
//   <div className="Background-infinite-grid"></div>
// </div>

// <div className="Background-wrapper">
//   <div className="Background">
//     <img className="img-big" src="https://dl.dropboxusercontent.com/u/55385731/ART404/RAP-BOT/grid_perspective.png" />
//     <img className="img-small" src="https://dl.dropboxusercontent.com/u/55385731/ART404/RAP-BOT/grid_perspective.png" />
//   </div>
// </div>

// <div className="Video-wrapper">
//   <div className="BlendMode"></div>
//   <ReactPlayer className="Video" playing
//     volume={0}
//     url="https://www.youtube.com/watch?v=SCE-QeDfXtA" />
// </div>

// const file = '/../../fixtures/styles/stylesConfig.json'
// const obj = { "title": "Style Config 1", "styles": [{"header": null}]}
// jsonfile.writeFile(file, obj, function (err) {
//   console.error(err)
// })
