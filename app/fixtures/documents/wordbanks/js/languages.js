console.log("Wordbank!");

var wordbank = {
  "name": "languages",
  "list": [
    "Abkhaz",
    "Afrikaans",
    "Albanian",
    "Amharic",
    "Arabic",
    "Armenian",
    "Assamese",
    "Basque",
    "Belarusian",
    "Bengali",
    "Berber",
    "Bhojpuri",
    "Bosnian",
    "Bulgarian",
    "Burmese",
    "Cantonese Chinese",
    "Catalan",
    "Chichewa",
    "Chinese",
    "Chipewyan",
    "Cree",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Estonian",
    "Faroese Fijian",
    "Filipino",
    "Finnish",
    "French",
    "Frisian",
    "Fula",
    "Gaelic",
    "Gan",
    "Georgian",
    "German",
    "Greek",
    "Gujarati",
    "Haitian Creole",
    "Hakka",
    "Hausa",
    "Hawaiian",
    "Hebrew",
    "Hindi",
    "Hmong",
    "Hungarian",
    "Ibibio",
    "Icelandic",
    "Igbo",
    "Inuinnaqtun",
    "Inukitut",
    "Irish",
    "Italian",
    "Japanese",
    "Javanese",
    "Kannada",
    "Kashmiri",
    "Kazakh",
    "Khmer",
    "Korean",
    "Kurdish",
    "Kyrgyz",
    "Lao",
    "Latvian",
    "Lithuanuan",
    "Lugandan",
    "Luxembourgish",
    "Macedonian",
    "Madurese",
    "Maithili",
    "Malagasy",
    "Malay (or Maysian)",
    "Malayalam",
    "Maltese",
    "Mandarin Chinese",
    "Manx Gaelic",
    "Maori",
    "Marathi",
    "Mayan",
    "Min",
    "Moldovian",
    "Mongolian",
    "Montenegran",
    "Ndebele",
    "Nepali",
    "Northern Sotho",
    "Norwegian",
    "Oriya",
    "Oromo",
    "Ossetian",
    "Pashto",
    "Persian",
    "Polish",
    "Portuguese",
    "Punjabi",
    "Quechua",
    "Romanian",
    "Russian",
    "Sami",
    "Sanskrit",
    "Serbian",
    "Shona",
    "Sign Language",
    "Sindhi",
    "Sinhala",
    "Slovak",
    "Slovene",
    "Somali",
    "Sotho",
    "Spanish",
    "Sranan Tongo",
    "Sunda",
    "Swahili",
    "Swati",
    "Swedish",
    "Tagalog",
    "Tahitian",
    "Tibetan",
    "Tajik",
    "Tamil",
    "Telugu",
    "Tetum",
    "Thai",
    "Tok Pisin",
    "Tsonga",
    "Turkish",
    "Turkmen",
    "Twi",
    "Ukrainian",
    "Urdu",
    "Uzbek",
    "Venda",
    "Vietnamese",
    "Welsh",
    "Wu",
    "Xhosa",
    "Xiang",
    "Yiddish",
    "Yoruba",
    "Yue",
    "Zhuang",
    "Zulu"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "languages_wordbank",
  "title": "Languages Wordbank 2017",
  "documentId": "languages_wordbank",
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