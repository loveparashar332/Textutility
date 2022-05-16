import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const state1={
          'name':"love",
          'class':'4uu'
    }
    const [state,setState]=useState(state1);
    const update=()=>{
          setTimeout(()=>{
              setState({
                  'name':'kohli',
                  'class':'188884'
              })
          },1000);
    }
    return(
     <NoteContext.Provider value={{state,update}}>
         {props.children}
     </NoteContext.Provider>
    )
}
export default NoteState;




