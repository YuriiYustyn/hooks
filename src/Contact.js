import React from "react";
import "./App.css"

export const Contact = (el) => {
   return (
      <div className="contact">
         <div> <span>{el.firstName + " "}</span>
            <span>{el.lastName}</span>
         </div>
         <span>{el.phone}</span>
         <div >{el.gender}</div>
      </div>
   )
}