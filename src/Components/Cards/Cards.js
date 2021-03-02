import userEvent from "@testing-library/user-event";
import React, { useState, useContext } from "react";

import { GlobalContext } from "../../Context/AppContext";

function Cards() {
   const [user, setUser] = useState("");
   const [pass, setPass] = useState("");

   const [userAuth, setUserAuth] = useState(false);
   const [pokeName, setName] = useState("");

   const updateFields = (e) => {
      let field = e.target.name;
      let value = e.target.value;
      switch (field) {
         case "user":
            setUser(value);
            break;
         case "pass": 
            setPass(value);
            break;
         case "pokeName":
            setName(value);
            break;
         default:
            break;
      }
   };

   const loginUser = (e) => {
      e.preventDefault();
   };

   const pokemonSearch = (e) => {
      e.preventDefault();
   };

   // Form for signing in as a trainer
   // Form to search for pokemon/cards, hide unless trainer logs in

   return (
      <div>
         <h1>Cards</h1>
         <div>
            {userAuth ? (
               <div>
                  <h3>Find your cards...</h3>
                  <form onSubmit={pokemonSearch}>
                     <label>Pokemon Name: </label>
                     <input type="text" name="pokeName" value={pokeName} onChange={updateFields} />
                     <button type='submit'>Search</button>
                  </form>
               </div>
            ) : (
               <div>
                  <h3>Sign In Trainer...</h3>
                  <form onSubmit={loginUser}>
                     <label>Username: </label>
                     <input type="text" name="user" value={user} onChange={updateFields} />
                     <label>Password: </label>
                     <input type="text" name="pass" value={pass} onChange={updateFields} />
                     <button type='submit'>Search</button>
                  </form>
               </div>
            )}
         </div>
      </div>
   );
}

export default Cards;
