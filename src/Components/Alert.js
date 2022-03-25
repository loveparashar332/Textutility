import React from 'react'

export default function Alert(props) {
    const capitalize = (w)=>{
           let word = w.toLowerCase();
           return w.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
     <>
      <div style={{height:'90px'}}>
       {
         props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>
                {capitalize(props.alert.type)}
            </strong> {props.alert.msg}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
         </div>
       } 
       </div>
    </>
  )
}
