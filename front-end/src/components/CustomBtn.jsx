import React from 'react';
import ReactDOM from 'react-dom/client';

export default function CustomBtn({ButtonText}){
	return (
    	<div className="author">
        <button type = "button" class ="btn btn-primary">{ButtonText}</button>
      </div>
    )
}
