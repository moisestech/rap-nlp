import React from 'react'

export default class TagNav extends React.Component {
  render() {
    const phonemeTags = ['AH', 'EH', 'EEH', 'OH', 'OOH']

    return (
      <ul className='flex-center'>
        {phonemeTags.map((phonemeTag, index) => (
            <li key={index}>
              {phonemeTag}
            </li>
          ))}
      </ul>
      )
  }
}