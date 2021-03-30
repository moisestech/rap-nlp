# rap-nlp

Rhythm and Poetry UI powered by natural language processing and react.

![rap-nlp logo](https://github.com/moisestech/rap-nlp/blob/master/public/assets/rap-nlp_logo.png)

## **Front-End** 🎨

- React.JS
- Styled Components

## **Middleware**

- Apollo
- Next.JS

## **Back-End** ⚙

- Node.JS
- GraphQL
- Relay
- [NaturalNode](https://github.com/NaturalNode/natural)
- [Compromise](https://github.com/spencermountain/compromise)

## **Alternative Back-End** ⚙

- Flask

## **Python Packages**

- NLTK
- Word2Vec

---

## **About:**

- The interface will suggest bilingual phrases divided by color coded phonemes.

## **Create Mode:**

- Users can create a batch of phrases.
- Users can link phrases from other batches.
- Users can tag a batch, phrases, and words.

## **Play Mode:**

- Users can shuffle batch orders.
- Users can search by tag.
- Users can search by phoneme sounds.

---

## **UX Request**

- Scroll session batches
- Shuffle batch phrases
- Suggest similar batches

## **UI Demos**

Interface UI Flow Examples — More Coming Soon!

![rap-nlp Batch ui](https://raw.githubusercontent.com/Moises404/rapbot/master/rapbot.png)

Bilingual Phoneme phrase mapping
![rap-nlp Batch ui](https://github.com/moisestech/rap-nlp/blob/master/public/assets/rap-nlp-ui-v1.png)

---

## **GraphQL Schema**

![rap-nlp schema V1](https://raw.githubusercontent.com/moisestech/rap-nlp/master/public/assets/qraphql-schema-flow-v1.png)
Made with [graphqleditor.com ](graphqleditor.com)

## **App Root**

```bash
├── README.md
├── _redirects
├── app
│   ├── components
│   │   ├── Batch.js
│   │   ├── Batches.js
│   │   ├── Battle.js
│   │   ├── CreatePhrase.js
│   │   ├── Document.js
│   │   ├── MapContainer.js
│   │   ├── Modal.js
│   │   ├── Nav
│   │   │   ├── RightNav.js
│   │   │   └── TopNav.js
│   │   ├── Phrase.js
│   │   ├── Popular.js
│   │   ├── Results.js
│   │   ├── Uidev
│   │   │   ├── AdvJs
│   │   │   ├── Hooks
│   │   │   │   ├── CustomHooks
│   │   │   │   ├── NavCustomHooks.js
│   │   │   │   ├── NavHooks.js
│   │   │   │   ├── NavUseEffect.js
│   │   │   │   ├── NavUseState.js
│   │   │   │   ├── UseEffect
│   │   │   │   │   ├── CharLimit.js
│   │   │   │   │   └── WaitDelay.js
│   │   │   │   └── UseState
│   │   │   ├── ModernJs
│   │   │   ├── NavUidev.js
│   │   │   ├── React
│   │   │   ├── ReactRouter
│   │   │   ├── Redux
│   │   │   ├── Uidev.css
│   │   │   └── router-test.js
│   │   └── Word.js
│   ├── contexts
│   │   └── theme.js
│   ├── fixtures
│   │   └── phrases
│   │       └── allphrases.js
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   ├── styles
│   │   ├── _Document.scss
│   │   ├── _MapContainer.scss
│   │   ├── _Phrase.scss
│   │   ├── _Word.scss
│   │   └── main.css
│   └── utils
│       └── sorts.js
├── package-lock.json
├── public
│   └── assets
│       ├── createPhrase_ui_test_1.png
│       ├── createPhrase_ui_test_2.png
│       ├── createPhrase_ui_test_3.png
│       ├── createPhrase_ui_test_4.png
│       ├── qraphql-schema-flow-v1.png
│       ├── rap-nlp-ui-v1.png
│       └── rap-nlp_logo.png
└── webpack.config.js
```
