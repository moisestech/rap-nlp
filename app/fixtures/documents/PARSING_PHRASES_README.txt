///////////////////////////
// PARSED DOCUMENT STEPS //
///////////////////////////



Step1: Create Array of Phrases Document based on docTemplate.json
       `${doc}`

       Caveat: Phrases can not have any symbols, numbers, commas, quotes, apostrophes
       (.''-/)

Step2: Add `${doc}` to /fixtures/index.js

Step3: MapContainer.js
       Load new doc and run through RiTa in CompDidMount to log json
       parsedPhrases, copy logged out into new file named: `${doc}_Parsed`

       /////////////
       // ERRORS: //
       /////////////

       Uncaught TypeError: Cannot read property 'phonemeLength1' of undefined
       --- Solution:

Step4: In MapContainer load `${doc}_Parsed` and log/copy into new file
       `${doc}_Array_IDs`

Step5: In MapContainer load `${doc}_Parsed` and log/copy into new file
       `${doc}_Array_IDs`


----

Step1:
nvm use 5
npm start

Step2:
add docTemplate.json to fixtures/index.json

Step3:
create  `${doc}_Array_IDs`

Step4:
Add to docId.json Array `${doc}`

Step5:
Add document Array to currentPhraseIds.json




/////////////
// ERRORS: //
/////////////

ERROR1: (Loading Document)
Uncaught TypeError: Cannot read property 'documentId' of undefined
--- Solution: Add document name to fixtures/index.json

PHRASE:
Uncaught TypeError: Cannot read property 'length' of null
--- Solution:

ERROR2:
ERROR RENDERING APP [TypeError: Cannot read property 'phraseLastPhoneme' of undefined]
--- Solution:  parsedPhrases aren't probably added to both
currentPhraseIds.json, allPhraseIds.json & allPhrases.json





///////////////////////////
// PARSED DOCUMENT STEPS //
///////////////////////////

`${doc}`                          = Array of Phrases
`${doc}_Parsed`                   = All Phrases and Words in Phrases
                                    accessed through objectIds parsed with Parts of Speech, and Phonemes
`${doc}_Array_IDs`                =
`${doc}_Array_IDs_PhonemeLength`  =
`${doc}_Array_IDs_PhonemeSorted`  =
`${doc}_ParsedPhonemeLength`      =




currentPhraseIds


///////////
// TO-DO //
///////////

phrasesSortedPhonemeVowel
sortByPhonemeLength
sortPhraseArrayByPhonemeLengthVowelSound
sortByPhonemeLengthVowelSound

/////////////////
// Not Reading //
/////////////////


// HINT: Search for "phraseVowelsArray": [], an Empty Array in  phrases sorted file.

// HINT: Check for apostrophes that split the phonemes causing parsing errors

"dances_wordbank-65",
"dances_wordbank-68",
"driving_wordbank-48",
"driving_wordbank-49",
"driving_wordbank-77",
"driving_wordbank-78",
"driving_wordbank-103",
"driving_wordbank-122",
"family_wordbank-123",
"family_wordbank-124",
"family_wordbank-125",
"geography_wordbank-37",
"geography_wordbank-40",
"interjections_wordbank-19",
"interjections_wordbank-60",
"interjections_wordbank-71",
"interjections_wordbank-80",
"interjections_wordbank-100",
"interjections_wordbank-129",
"interjections_wordbank-133",
"interjections_wordbank-147",
"interjections_wordbank-154",
"interjections_wordbank-161",
"interjections_wordbank-167",
"interjections_wordbank-168",
"interjections_wordbank-169",
"interjections_wordbank-217",
"people_wordbank-51",
"people_wordbank-59",
"people_wordbank-60",
"sports_wordbank-163",
"sports_wordbank-238",
"time_wordbank-37",
"time_wordbank-96",
"transportation_wordbank-210",
"transportation_wordbank-229",
"transportation_wordbank-231",
"transportation_wordbank-241",
"weather_wordbank-71",
"weather_wordbank-154",
"modata-19", air bnb
"modata-583",
"modata-722",
"lyrics_milo_folk_meta_physics-42",




// ("UNCOMMENT TO SHUFFLE ARRAY")
// currentPhraseIdsCopy.phraseIds = this.shuffleArray(currentPhraseIds.phraseIds)



ERROR RENDERING APP [TypeError: Cannot read property 'vowelPhoneme' of undefined]
