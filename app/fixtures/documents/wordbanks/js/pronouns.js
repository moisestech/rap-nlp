console.log("Wordbank!");

var wordbank = {
  "name": "pronouns",
  "list": [
    "all",
    "another",
    "any",
    "anybody",
    "anyone",
    "anything",
    "both",
    "each",
    "either",
    "everybody",
    "everyone",
    "everything",
    "few",
    "he",
    "her",
    "hers",
    "herself",
    "him",
    "himself",
    "his",
    "I",
    "it",
    "its",
    "itself",
    "many",
    "me mine",
    "more",
    "most",
    "much",
    "my",
    "myself",
    "neither",
    "no one",
    "nobody",
    "none",
    "nothing",
    "one",
    "other",
    "others",
    "our",
    "ours",
    "ourselves",
    "several",
    "she",
    "some",
    "somebody",
    "someone",
    "something",
    "that",
    "their",
    "theirs",
    "them",
    "themselves",
    "these",
    "they",
    "this",
    "those",
    "us",
    "W",
    "we",
    "what",
    "whatever",
    "which",
    "whichever",
    "who",
    "whoever",
    "whom",
    "whomever",
    "whose",
    "you",
    "your",
    "yours",
    "yourself",
    "yourselves"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "pronouns_wordbank",
  "title": "Pronouns Wordbank 2017",
  "documentId": "pronouns_wordbank",
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
