console.log("Wordbank!");

var wordbank = {
  "name": "irregular_verbs",
  "list": [
    "arise arose arisen",
    "awake awoke awoken",
    "be was were been",
    "bear bore born borne",
    "beat beat beaten",
    "become became become",
    "begin began begun",
    "bend bent bent",
    "bet bet bet",
    "bind bound bound",
    "bite bit bitten",
    "bleed bled bled",
    "blow blew blown",
    "break broke broken",
    "breed bred bred",
    "bring brought brought",
    "build built built",
    "burn burned burnt burned burnt",
    "burst burst burst",
    "buy bought bought",
    "cast cast cast",
    "catch caught caught",
    "choose chose chosen",
    "cling clung clung",
    "come came come",
    "cost cost cost",
    "creep crept crept",
    "cut cut cut",
    "deal dealt dealt",
    "dig dug dug",
    "do did done",
    "draw drew drawn",
    "dream dreamed dreamt dreamed dreamt",
    "drive drove driven",
    "drink drank drunk",
    "eat ate eaten",
    "fall fell fallen",
    "feed fed fed",
    "feel felt felt",
    "fight fought fought",
    "find found found",
    "flee fled fled",
    "fling flung flung",
    "fly flew flown",
    "forbid forbade forbidden",
    "forecast forecast forecast",
    "foresee foresaw foreseen",
    "foretell foretold foretold",
    "forget forgot forgotten",
    "forgive forgave forgiven",
    "freeze froze frozen",
    "get got gotten",
    "give gave given",
    "go went gone",
    "grind ground ground",
    "grow grew grown",
    "handwrite handwrote handwritten",
    "hang hung hung",
    "have had had",
    "hear heard heard",
    "hide hid hidden",
    "hit hit hit",
    "hold held held",
    "hurt hurt hurt",
    "inbreed inbred inbred",
    "inlay inlaid inlaid",
    "interweave interwoven interwoven",
    "keep kept kept",
    "kneel knelt kneeled knelt kneeled",
    "know knew known",
    "lay laid laid",
    "lead led led",
    "learn learned learnt learned learnt",
    "leave left left",
    "lend lent lent",
    "let let let",
    "lie lay lain",
    "lose lost lost",
    "make made made",
    "mean meant meant",
    "meet met met",
    "mislead misled misled",
    "mistake mistook mistook",
    "misunderstand misunderstood misunderstood",
    "offset offset offset",
    "outbid outbid outbid",
    "outdo outdid outdone",
    "outgrow outgrew outgrown",
    "outrun outran outrun",
    "overdo overdid overdone",
    "overeat overate overeaten",
    "overhear overheard overheard",
    "oversee oversaw overseen",
    "overspend overspent overspent",
    "overtake overtook overtaken",
    "overthrow overthrew overthrown",
    "partake partook partaken",
    "pay paid paid",
    "prove proved proven proved",
    "put put put",
    "quit quit quit",
    "read read read",
    "rid rid rid",
    "ride rode ridden",
    "ring rang rung",
    "rise rose risen",
    "run ran run",
    "say said said",
    "see saw seen",
    "seek sought sought",
    "sell sold sold",
    "send sent sent",
    "set set set",
    "sew sewed sewed sewn",
    "shake shook shaken",
    "shed shed shed",
    "shoot shot shot",
    "show showed showed shown",
    "shrink shrank shrunk",
    "shut shut shut",
    "sing sang sung",
    "sit sat sat",
    "sleep slept slept",
    "slide slid slid",
    "sling slung slung",
    "slit slit slit",
    "speak spoke spoken",
    "spend spent spent",
    "spin spun spun",
    "spread spread spread",
    "spring sprang sprung sprung",
    "stand stood stood",
    "stick stuck stuck",
    "sting stung stung",
    "stride strode stridden",
    "string strung strung",
    "swear swore sworn",
    "sweep swept swept",
    "swim swam swum",
    "swing swung swung",
    "take took taken",
    "teach taught taught",
    "tear tore torn",
    "tell told told",
    "think thought thought",
    "throw threw thrown",
    "thrust thrust thrust",
    "tread trod trodden trod",
    "understand understood understood",
    "undo undid undone",
    "uphold upheld upheld",
    "upset upset upset",
    "wake woke woken",
    "waylay waylaid waylaid",
    "wear wore worn",
    "weave wove weaved woven weaved",
    "weep wept wept",
    "wet wet wet",
    "win won won",
    "wind wound wound",
    "withdraw withdrew withdrawn",
    "withhold withheld withheld",
    "wring wrung wrung",
    "write wrote written"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "irregular_verbs_wordbank",
  "title": "Irregular Verbs Wordbank 2017",
  "documentId": "irregular_verbs_wordbank",
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
