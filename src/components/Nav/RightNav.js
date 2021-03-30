import React from 'react';

export default function RightNav() {
  return (
    <div id="top_icons" className="right_control">
      <span id="sync_state_icon"></span>
      <button
        type="button"
        id="quick_add_task_holder"
        data-track="navigation|quick_add"
        aria-label="Quick Add"
        className="top_bar_btn"
        data-reach-tooltip-trigger=""
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd" transform="translate(4 3)">
            <mask id="jd4FBg" fill="#fff">
              <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path>
            </mask>
            <g mask="url(#jd4FBg)">
              <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
            </g>
          </g>
        </svg>
      </button>
      <button
        type="button"
        id="top_completed_holder"
        data-track="navigation|karma"
        className="completed_pie_stat top_bar_btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <defs></defs>
          <g fill="none" fillRule="evenodd" transform="translate(3 3)">
            <mask id="4ZtaWA" fill="#fff">
              <path
                id="a"
                d="M12.3 5L7 10.3 5.4 8.6a.5.5 0 0 0-.8 0l-3.9 4a9 9 0 1 1 .5.9L5 9.7l1.6 1.7a.5.5 0 0 0 .8 0L13 5.7v3.8a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8z"
              ></path>
            </mask>
            <g mask="url(#4ZtaWA)">
              <path fill="rgba(255, 255, 255, 0.8)" d="M-3-3h24v24H-3z"></path>
            </g>
          </g>
        </svg>
        <span className="count">0/5</span>
      </button>
      <button
        type="button"
        aria-owns="notification_popup"
        aria-label="Notifications"
        aria-controls="notification_popup"
        aria-expanded="false"
        aria-haspopup="listbox"
        className="top_bar_btn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g fill="none" fillRule="evenodd" transform="translate(4 3)">
            <mask id="sm1/notifications/b" fill="#fff">
              <path
                id="sm1/notifications/a"
                d="M10.8 16a3 3 0 0 1-5.6 0h5.6zM5 15h6-6zm-3.8 0a1 1 0 0 1-.8-1.5 16 16 0 0 0 2.1-8 5.5 5.5 0 0 1 11 0c0 2.8.7 5.5 2.1 8a1 1 0 0 1-.8 1.5H1.2z"
              ></path>
            </mask>
            <g mask="url(#sm1/notifications/b)">
              <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
            </g>
          </g>
        </svg>
      </button>
      <button
        type="button"
        aria-owns="setting_menu"
        aria-controls="setting_menu"
        aria-label="Setting"
        aria-expanded="false"
        aria-haspopup="listbox"
        className="top_bar_btn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="gear_normal">
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M16.523 6.38l1.193-.598a1 1 0 0 1 1.314.394l1.529 2.648a1 1 0 0 1-.317 1.335l-1.204.793a7.263 7.263 0 0 1-.026 2.079l1.23.81a1 1 0 0 1 .317 1.335l-1.529 2.648a1 1 0 0 1-1.314.394l-1.345-.674a7.194 7.194 0 0 1-1.757 1.027l-.087 1.488a1 1 0 0 1-.998.941H10.47a1 1 0 0 1-.998-.941L9.39 18.65a7.188 7.188 0 0 1-1.883-1.045l-1.223.613a1 1 0 0 1-1.314-.394l-1.529-2.648a1 1 0 0 1 .317-1.335l1.05-.692a7.242 7.242 0 0 1-.03-2.318l-1.02-.672a1 1 0 0 1-.317-1.335L4.97 6.176a1 1 0 0 1 1.314-.394l1.068.536a7.191 7.191 0 0 1 2.05-1.173l.071-1.204A1 1 0 0 1 10.471 3h3.058a1 1 0 0 1 .998.941l.075 1.283a7.197 7.197 0 0 1 1.921 1.156zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
