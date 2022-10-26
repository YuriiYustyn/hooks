import React, { useState } from "react";
import { Contact } from "./Contact.js"

export const contacts = [{
   firstName: "Барней",
   lastName: "Стинсовський",
   phone: "+380956319521",
   gender: "male"
}, {
   firstName: "Робін",
   lastName: "Щербатська",
   phone: "+380931460123",
   gender: "female"
}, {
   firstName: "Анонімний",
   lastName: "Анонімус",
   phone: "+380666666666"
}, {
   firstName: "Лілія",
   lastName: "Олдровна",
   phone: "+380504691254",
   gender: "female"
}, {
   firstName: "Маршен",
   lastName: "Еріксонян",
   phone: "+380739432123",
   gender: "male"
}, {
   firstName: "Теодор",
   lastName: "Мотсбес",
   phone: "+380956319521",
   gender: "male"
}];

export const Contacts = () => {
   let [state, renderState] = useState(contacts)
   const handleSearchChange = (e) => {
      state = contacts
      let filterState = state.filter(el => (`${el.firstName} ${el.lastName}`).toLowerCase().includes(String(e.target.value).toLowerCase()) || el.phone.includes(e.target.value))
      renderState(filterState)
   }
   return (
      <div>
         <h2> Контакти</h2>
         <input className="search" placeholder="пошук" onChange={(e) => handleSearchChange(e)} />
         {state.map((el, i) => <Contact key={i} {...el} />)}
      </div>
   )
}


