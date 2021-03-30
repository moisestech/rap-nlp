import React, { PropTypes, Component } from 'react';
import Phrase from '../Phrase/Phrase';

// import cn from 'classnames'

class Document extends Component {
  static displayName = 'Document';

  static propTypes = {
    allPhrases: PropTypes.object,
    phraseIds: PropTypes.object,
    phraseClick: PropTypes.func,
    layout: PropTypes.object,
  };

  state = {};

  constructor(props) {
    super(props);
    this.setVowelSoundColor = this.setVowelSoundColor.bind(this);
  }

  componentDidMount() {}

  setVowelSoundColor(vowelSound) {
    switch (vowelSound) {
      case 'ey':
        return 'gray'; // gray
      case 'ae':
      case 'aa':
      case 'aw':
      case 'ah':
        return 'magenta'; // '#222222' black // return '#e0bf9e' almond
      case 'i':
      case 'iy':
        return 'green'; // green // '#BFBDBD' silver
      case 'ih':
        return 'pink'; // pink
      case 'er':
      case 'eh':
        return 'red'; // red return // 'orange' orange
      case 'ai':
      case 'ay':
      case 'oy':
        return '#73c2e0'; // cyan ~
      case 'ow':
        return '#87552A'; // brown // #E488B9 rose
      case 'ao':
        return 'gold';
      case 'u':
      case 'yu':
      case 'uw':
      case 'uh':
        return 'blue'; // blue return '#ED203C' // scarlet
      default:
        return false;
    }
  }

  render() {
    const { phraseClick, phraseIds, allPhrases } = this.props;

    // console.log("CURRENT-PHRASE-IDS: ", phraseIds)
    // console.log("ALL-PHRASES: ", allPhrases)

    return (
      <div className="MapList">
        <div className="MapList-wrapper">
          <div className="phrases">
            {phraseIds.phraseIds.map((phraseId, index) => {
              return (
                <Phrase
                  key={index}
                  phraseId={phraseId}
                  allPhrases={allPhrases}
                  onClick={() => phraseClick(allPhrases[phraseId], index)}
                  bgSoundColor={this.setVowelSoundColor(
                    allPhrases[phraseId].phraseLastPhoneme.vowelPhoneme
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Document;
