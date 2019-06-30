import React from 'react';
import './ClearButton.scss';



export const ClearButton = props => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
)
