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

        //   <div aria-modal="true" role="dialog" tabindex="-1" aria-label="modal box" id="reactist-modal-box-0" className="reactist_modal_box quick_add focus-marker-enabled-within" data-reach-dialog-content="">
        //     <header className="reactist_modal_box__header quick_add__header">
        //       <hgroup>
        //         <h1>Quick Add Task</h1>
        //       </hgroup>
        //       <div className="reactist_modal_box__header_button">
        //         <button type="button" aria-label="Close">
        //           <svg viewBox="0 0 24 24" className="icon_close" width="24" height="24">
        //             <path fill="currentColor" fillRule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path>
        //           </svg>
        //         </button>
        //       </div>
        //     </header>
        //     <section className="reactist_modal_box__body quick_add__body">
        //       <form className="task_editor focus-marker-enabled-within">
        //         <div className="task_editor__editing_area">
        //           <div className="task_editor__content_field no-focus-marker">
        //             <div className="richtextinput">
        //               <div className="DraftEditor-root">
        //                 <div className="DraftEditor-editorContainer">
        //                   <div aria-describedby="placeholder-7mbu2" className="notranslate public-DraftEditor-content" contentEditable="true" role="textbox" spellCheck="true" style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;">
        //                     <div data-contents="true">
        //                       <div className="" data-block="true" data-editor="7mbu2" data-offset-key="1g5hn-0-0">
        //                         <div data-offset-key="1g5hn-0-0" className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-br-key="1g5hn-0-0"></span></div>
        //                       </div>
        //                     </div>
        //                   </div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div className="task_editor__extra_fields">
        //             <div className="task_editor__extra_fields__pills">
        //               <button type="button" aria-expanded="false" className="item_due_selector icon_pill">
        //                 <div className="calendar_icon date_today">
        //                   <svg data-svgs-path="sm1/calendar_small.svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        //                     <path fill="currentColor" fillRule="nonzero" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"></path>
        //                   </svg>
        //                 </div>
        //                 <span className="date date_today">Today</span>
        //               </button>
        //               <button type="button" id="dropdown-select-17" aria-owns="dropdown-select-17-popup" aria-controls="dropdown-select-17-popup" aria-expanded="false" aria-haspopup="listbox" aria-label="Select a project" className="icon_pill projectSectionPill--container" data-reach-tooltip-trigger="">
        //                 <div className="projectSectionPill">
        //                   <div className="projectSectionPill--text">
        //                     <span className="projectSectionPill--icon">
        //                       <svg width="12" height="12" viewBox="0 0 12 12" style="color: rgb(184, 184, 184);">
        //                         <circle cx="6" cy="6" r="4" fill="currentColor" fillRule="nonzero"></circle>
        //                       </svg>
        //                     </span>
        //                     <span>Inbox</span>
        //                   </div>
        //                 </div>
        //               </button>
        //             </div>
        //             <div className="item_actions" data-item-actions-root="">
        //               <button type="button" aria-label="Add label(s)" data-action-hint="task-actions-add-labels" aria-owns="dropdown-select-18-popup" aria-controls="dropdown-select-18-popup" aria-expanded="false" aria-haspopup="listbox" className="item_action" data-reach-tooltip-trigger="">
        //                 <span>
        //                   <svg data-svgs-path="sm1/label_outline.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        //                     <path fill="currentColor" fillRule="nonzero" d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"></path>
        //                   </svg>
        //                 </span>
        //               </button>
        //               <button type="button" aria-label="Set the priority" aria-owns="dropdown-select-20-popup" aria-controls="dropdown-select-20-popup" aria-expanded="false" aria-haspopup="listbox" className="item_action item_actions_priority" data-reach-tooltip-trigger="">
        //                 <span data-action-hint="task-actions-priority-picker">
        //                   <svg data-svgs-path="sm1/priority_flag.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        //                     <path fill="currentColor" fillRule="nonzero" d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z"></path>
        //                   </svg>
        //                 </span>
        //               </button>
        //               <button type="button" aria-label="Add reminder(s)" data-action-hint="task-actions-reminders" className="item_action item_action__reminders" data-reach-tooltip-trigger="">
        //                 <span>
        //                   <svg data-svgs-path="sm1/reminder.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        //                     <path fill="currentColor" fillRule="nonzero" d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z"></path>
        //                   </svg>
        //                 </span>
        //               </button>
        //               <button type="button" data-action-hint="task-actions-quick-comment" className="item_action quick_note_action" data-reach-tooltip-trigger="">
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-svgs-path="sm1/comments.svg">
        //                   <path fill="currentColor" fillRule="nonzero" d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"></path>
        //                 </svg>
        //               </button>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="task_editor__form_actions" data-item-actions-root=""><button type="submit" disabled="" className="ist_button ist_button_red" aria-disabled="true">Add Task</button></div>
        //       </form>
        //     </section>
        //   </div>



        //  <div data-focus-guard="true" tabIndex="0" style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;">
        // </div>