import React from "react";
// import { useState } from "react";

function Header(props) {
  // const [buttonMode,setButtonMode] = useState(false);
  const buttonchange = () =>{
    props.onButton();
  }
  // {
  //   if (buttonMode === false){
  //     setButtonMode(true);
  //     let eve=true;
  //     props.onButton(eve);
  //   }else{
  //     setButtonMode(false);
  //     let eve=false;
  //     props.onButton(eve);
  //   }
  //   // event.preventDefault();
  // };
  return (
<nav className="navbar sticky-top navbar-expand-lg navbar-light news-header">
  <div className="row flex-nowrap justify-content align-items-center py-3">
  <div className="col-4 pt-1">
     <a className="text-muted" href="#">
       Subscribe
       </a>
         </div>
        <div className="col-4 text-center title_navbar-center nav_text_title">
          <img src="../../logo192.png" width="30" height="30" alt="" />
          <a className="navbar-title " href="/"> NewsX</a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center title_navbar-right">
           <button className="btn btn-sm btn-outline-secondary" onClick={buttonchange}>
             Dark mode
           </button>
         </div>
  </div>
</nav>
  );
}

export default Header;
