import React, {useState} from "react";

export default function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);
  
    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    return (
      <div className="copy-address mb-0">
        <input type="text" value={copyText} readOnly />
        {/* Bind our handler function to the onClick button property */}
        <button onClick={handleCopyClick}>
          <span>{isCopied ? 'Copied!' : 'Copy Address'}</span>
        </button>
      </div>
    );
  }
  