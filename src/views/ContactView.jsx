import React from 'react';

export default function Contact() {
  return (
    <>
      <h1>Kontakt</h1>
      
      <div className="Abot-Wrapper">
        <div className="Grid-Contact">
          {/* GitHub */}
          <a href="https://github.com/MarcinM7" target="_blank" rel="noopener noreferrer">
            <svg className="Contact-img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#333333"/>
              <path d="M50 20a30 30 0 0 0-9.5 58.5c1.5 0.3 2-0.6 2-1.4 0-0.7 0-2.5 0-4.9-8.2 1.8-9.9-3.9-9.9-3.9-1.3-3.4-3.3-4.3-3.3-4.3-2.7-1.8 0.2-1.8 0.2-1.8 3 0.2 4.5 3 4.5 3 2.7 4.5 7 3.2 8.7 2.4 0.3-1.9 1-3.2 1.9-4-6.5-0.7-13.4-3.3-13.4-14.5 0-3.2 1.1-5.8 3-7.9-0.3-0.7-1.3-3.6 0.3-7.5 0 0 2.4-0.8 8 3 2.3-0.6 4.8-1 7.3-1 2.5 0 5 0.3 7.3 1 5.6-3.8 8-3 8-3 1.6 3.9 0.6 6.8 0.3 7.5 1.9 2 3 4.7 3 7.9 0 11.3-6.9 13.8-13.4 14.5 1 0.9 2 2.6 2 5.2 0 3.8 0 6.8 0 7.7 0 0.8 0.5 1.6 2 1.4A30 30 0 0 0 50 20z" fill="white"/>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/marcin-muszy%C5%84ski-1b6234191/" target="_blank" rel="noopener noreferrer">
            <svg className="Contact-img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#0077B5"/>
              <rect x="32" y="32" width="12" height="36" fill="white"/>
              <circle cx="38" cy="23" r="6" fill="white"/>
              <path d="M53 32v6c2.5-3 6.3-6 12-6 13 0 15 9 15 18v18H68V51c0-5-2-8-6.5-8-5.5 0-8.5 4-8.5 8v17H41V32h12z" fill="white"/>
            </svg>
          </a>
          
          {/* Email */}
          <a href="mailto:marcin_muszynski@icloud.com">
            <svg className="Contact-img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#EA4335"/>
              <rect x="25" y="35" width="50" height="30" rx="3" ry="3" fill="white"/>
              <path d="M25 35l25 15 25-15" stroke="#EA4335" strokeWidth="2" fill="none"/>
            </svg>
          </a>
          
          {/* YouTube */}
          <a href="https://www.youtube.com/@T3chDocRepair" target="_blank" rel="noopener noreferrer">
          <svg className="Contact-img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#FF0000"/>
              <path d="M70 42.5c0-3.7-3-6.7-6.7-6.7H36.7c-3.7 0-6.7 3-6.7 6.7v15c0 3.7 3 6.7 6.7 6.7h26.6c3.7 0 6.7-3 6.7-6.7v-15z" fill="white"/>
              <polygon points="45,58 59,50 45,42" fill="#FF0000"/>
            </svg>
          </a>
          
          {/* WhatsApp */}
          <a href="https://wa.me/794975775" target="_blank" rel="noopener noreferrer">
            <svg className="Contact-img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#25D366"/>
              <path d="M50 27c-12.7 0-23 10.3-23 23 0 4.4 1.2 8.5 3.4 12l-3.6 13 13.4-3.5c3.3 1.8 7.1 2.8 11.1 2.8 12.7 0 23-10.3 23-23S62.7 27 50 27z" fill="white"/>
              <path d="M50 31c-10.5 0-19 8.5-19 19 0 4.1 1.3 7.9 3.5 11l-2.3 8.3 8.6-2.2c2.9 1.6 6.3 2.5 9.8 2.5 10.5 0 19-8.5 19-19S60.5 31 50 31z" fill="#25D366"/>
              <path d="M61.5 54.2c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-1 .2-.3.4-1.2 1.3-1.5 1.5-.3.2-.5.3-.9.1-2.4-1.2-4-2.1-5.6-4.8-.4-.7.4-.7 1.2-2.3.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.6 4.2 1.8 4.5c.2.3 3.1 4.8 7.7 6.5 4.3 1.5 4.3 1 5.1.9.8-.1 2.5-1 2.8-2 .3-1 .3-1.8.2-2-.1-.1-.4-.3-.8-.5z" fill="white"/>
            </svg>
          </a>
          
          {/* Facebook */}
          <a href="https://www.facebook.com/marcin.muszynski.5439" target="_blank" rel="noopener noreferrer">
            <svg className="Contact-img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#1877F2"/>
              <path d="M58 75V65h10l2-12H58v-8c0-3 1-5 6-5h6V29c-1 0-5-1-9-1-9 0-15 5-15 15v10H36v12h10v25h12z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}