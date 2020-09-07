console.log("Wordbank!");

var wordbank = {
  "name": "selfhealing_by_thought_force",
  "list": [
    "Thought Force in Business and Everyday Life",
    "The Law of the New Thought",
    "Nuggets of the New Thought",
    "Memory Culture The Science of Observing Remembering and Recalling",
    "Dynamic Thought or The Law of Vibrant Energy",
    "Thought Vibration or the Law of Attraction in Thought World",
    "Practical Mind Reading",
    "Practical Psychomancy and Crystal Gazing",
    "The Mind Building of a Child",
    "The Secret of Mental Magic",
    "Mental Fascination",
    "Self Healing by Thought Force",
    "Mind Power The Law of Dynamic Mentation",
    "Practical Mental Influence",
    "Reincarnation and the Law of Karma",
    "The Inner Consciousness",
    "The Secret of Success",
    "Memory How to Develop Train and Use it",
    "Subconscious and the Superconscious Planes of Mind",
    "Suggestion and Auto Suggestion",
    "The Art of Expression",
    "The Art of Logical Thinking",
    "The New Psychology Its Message Principles and Practice",
    "The Will",
    "Thought Culture",
    "Human Nature Its Inner States and Outer Forms",
    "Mind and Body or Mental States and Physical Condition",
    "Telepathy Its Theory Facts and Proof",
    "The Crucible of Modern Thought",
    "The Psychology of Salesmanship",
    "The Psychology of Success",
    "Scientific Parenthood",
    "The Message of the New Thought",
    "Your Mind and How to Use it",
    "The Mastery of Being",
    "Mind Power The Secret of Mental Magic",
    "The New Psychology of Healing",
    "New Thought Its History and Principles"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "thoughtforce_wordbank",
  "title": "Thoughtforce Wordbank 2017",
  "documentId": "thoughtforce_wordbank",
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
