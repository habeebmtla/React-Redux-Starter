import React, { Component } from 'react';
import './style.scss';

export default function loader(){
  return (
      <div className="loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    );
}