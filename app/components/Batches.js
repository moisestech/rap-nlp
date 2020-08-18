import React, { useState } from "react";
import PropTypes from 'prop-types'



/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app.
    By default, each post preview is cut off until the user clicks "Open".
    Only one post can be "Open" at a time.
*/

function BatchesList ({ posts }) {
  const [openIndex, setOpenIndex ] = useState(0)

  return (
    <ul>
      {posts.map(({ id, img, text }, index) => {
        const isOpen = openIndex === index

        const textToShow = isOpen ? text: text.substring(0, 100) + '...'

        return (
          <li key={id} style={{border: isOpen ? '1px solid black': 'none'}}>
            <img src={img} alt='Post avatar'/>
            <p>{textToShow}</p>
            {!isOpen && (
              <button onClick={() => setOpenIndex(index)}>
                Open
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}

BatchesList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default class Batches extends React.Component {
  state = {
    postsArray: [
    {
      id: 0,
      img: 'https://ui.dev/images/content/code-splitting.png',
      text: 'Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router.'
    },
    {
      id: 1,
      img: 'https://ui.dev/images/content/composition-vs-inheritance.png',
      text: 'The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong.'
    },
    {
      id: 2,
      img: 'https://ui.dev/images/content/modules.png',
      text: 'I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today.'
    }
  ]}

  render() {
    const { postsArray } = this.state

    return (
      <BatchesList posts={postsArray} />
    )
  }
}