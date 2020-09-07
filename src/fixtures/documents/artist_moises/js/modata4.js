console.log("Wordbank!");

var wordbank = {
  "name": "modata4",
  "list": [
    "The Originality of The Design",
    "The Reproducibility of The Product",
    "New Terms for situations that have always existed",
    "Clients Will Only Pay You For Reality",
    "Meaningful Structure",
    "The Chaos of Possible Meanings",
    "Context Intertextuality",
    "Hyper textuality Multimedia Networks",
    "Contexts References and Interpretations",
    "often more important than the Raw Data",
    "Neither Order Information",
    "Nor Simply Decorate It",
    "unfocused in a macro sense",
    "incredibly focused in a micro sense",
    "a computer is an object",
    "store and process data",
    "Domains people would buy",
    "offer opinions both biased and unbiased",
    "GPU accelerated algorithms",
    "They had become increasingly dependent on their identity",
    "What does the search engine of twenty twenty five look like",
    "How to break the rules of graphic design for creative success",
    "Everything was Cross Origin Compliant and Nothing Errored",
    "What comes after post modernism and post post modernism",
    "The Web Became Focused On Consumers Rather Than Scientist And Theorist",
    "The Future is Moulded Plastic and Molten Metal",
    "The Future Was Yesterday",
    "The Future Was Perfect",
    "The Future Was Plastic",
    "Politics and Ethics Cannot Progress Whereas Science And Technology Can",
    "Living Under a Dictatorship But Imagining It Is A Utopia",
    "Everything that has been done before remixed together",
    "Conceptual Functionalism rather than Visual Virtuosity",
    "The Medium is a Message",
    "The Message Constitutes The Medium",
    "The Medium Massages The Message",
    "Why are we so obsessed with editing photos beyond reality",
    "Instead of Advancing towards the senses",
    "the image recedes beneath the mark of the tool",
    "Editorial intervention always introduces bias",
    "Faith in an algorithm that can be completely objective",
    "the recipient is usually not stupid",
    "insert word as a cultural coping mechanism",
    "There is no negotiation between the artist and the platform",
    "what do you do after you have already bought the sex robot",
    "taking over the souls of the friend request",
    "we are actually an extended feedback",
    "Homogeneous Monoliths",
    "Radically Heterogeneous Microservices Architecture",
    "He who posesses art and science has religion",
    "he who does not posesses them needs religion",
    "There is a point out there where the universe does not exist",
    "Toward a Unification of Relativity and Quantum Theory via Circularly Casual Modeling",
    "database driven graphic design",
    "not a standard icon",
    "The moment you realize life is meant to not be lived forever",
    "The moment you realize life is meant to be lived forever",
    "cultural coping mechanism",
    "we are feedback",
    "Utopian Impulses Become More Possible In The Virtual World",
    "One to Many",
    "Solitude To Multitude",
    "Individual To Collective",
    "The limits of my language mean the limits of my world",
    "Sphere of Illusions",
    "false images",
    "inflated signs projections"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "modata4",
  "title": "modata4",
  "documentId": "modata4",
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
