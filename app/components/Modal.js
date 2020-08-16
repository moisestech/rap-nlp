import React from 'react'

export default class Modal extends React.Component {
  render () {
    return (
      <div data-reach-dialog-overlay="">
        <div data-focus-lock-disabled="false">
          <div aria-modal="true" role="dialog" aria-label="modal box" id="reactist-modal-box-0" className="reactist_modal_box quick_add focus-marker-enabled-within" data-reach-dialog-content="">
            <header className="reactist_modal_box__header quick_add__header">
              <hgroup>
                <h1>Quick Add Phrase</h1>
              </hgroup>
              <div className="reactist_modal_box__header_button">
                <button type="button" aria-label="Close">
                  <svg viewBox="0 0 24 24" className="icon_close" width="24" height="24">
                    <path fill="currentColor" fillRule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path>
                  </svg>
                </button>
              </div>
            </header>
          </div>
        </div>
      </div>
    )
  }
}