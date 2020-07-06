console.log("Wordbank!");

var wordbank = {
  "name": "emotions",
  "list": [
    "Adoration"
    "Agitation"
    "Amazement"
    "Amusement"
    "Anger"
    "Anguish"
    "Annoyance"
    "Anticipation"
    "Anxiety"
    "Confidence"
    "Conflicted"
    "Confusion"
    "Contempt"
    "Curiosity"
    "Defeat"
    "Defensiveness"
    "Denial"
    "Depression"
    "Desire"
    "Desperation"
    "Determination"
    "Disappointment"
    "Disbelief"
    "Disgust"
    "Doubt"
    "Dread"
    "Eagerness"
    "Elation"
    "Embarrassment"
    "Envy"
    "Excitement"
    "Fear"
    "Frustration"
    "Gratitude"
    "Guilt"
    "Happiness"
    "Hatred"
    "Hopefulness"
    "Humiliation"
    "Hurt"
    "Impatience"
    "Indifference"
    "Insecurity"
    "Irritation"
    "Jealousy"
    "Loneliness"
    "Love"
    "Nervousness"
    "Nostalgia"
    "Overwhelmed"
    "Paranoia"
    "Peacefulness"
    "Pride"
    "Rage"
    "Regret"
    "Relief"
    "Reluctance"
    "Remorse"
    "Resentment"
    "Resignation"
    "Sadness"
    "Satisfaction"
    "Scorn"
    "Shame"
    "Skepticism"
    "Smugness"
    "Somberness"
    "Surprise/Shock"
    "Suspicion"
    "Sympathy"
    "Terror"
    "Uncertainty"
    "Unease"
    "Wariness"
    "Worry"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "emotions_wordbank",
  "title": "Emotions Wordbank 2017",
  "documentId": "emotions_wordbank",
  "phrases": []
};

for (i = 0; i < wordbank.list.length; i++) {

  allPhrases.phrases.push(
    {
      "phrase": "",
      "phraseToParse": wordbank.list[i],
      "imgData": {
        "url": ""
      },
      "metaData": {}
    });
}

// console.log(allPhraseIds);
console.log(JSON.stringify(allPhrases, 0, 2));
