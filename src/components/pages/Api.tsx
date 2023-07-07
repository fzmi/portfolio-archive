import React from "react"

export function Api() {
  fetch("/.netlify/functions/dadjokes")
    .then(response => response.json())
    .then(json => console.log(json.msg))
  return (
    <div>
      
    </div>
  );
}
