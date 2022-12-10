import React from "react";
import './style.css';

const getHeaderComponent = (text) => {
 return (
  <div className="card-content-header">{text}</div>
 );
};

const getTextComponent = (text) => {
 return (
  <div className="card-content-text">{text}</div>
 );
};

const getListComponent = (elems) => {
 return (
  <ul className="card-content-list">
   {/* {elems.map(text => <li>{text}</li>)} */}
   {
    elems.map(function (text) {
     return <li>{text}</li>;
    })
   }
  </ul>
 );
};

function CardContent (props) {
 console.log(props);
 return (
  <div className="card">
   <div
    className="card-image"
    style={{ backgroundImage: `url(${props.image})` }}
   ></div>

    <div className="padding-40">
   {
    props.fullPage.map(elem => {
     switch (elem.type) {
      case 'header': {
       return getHeaderComponent(elem.text);
      }
      case 'text': {
       return getTextComponent(elem.text);
      }
      case 'list': {
       return getListComponent(elem.elems);
      }
      default: { }
     }
    })
   }
   </div>

  </div>
 );
}

export default CardContent;