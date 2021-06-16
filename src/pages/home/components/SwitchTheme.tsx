import React from "react";

export const SwitchTheme = ({ toggled, onClick }: any) => {
  return (
    <div className='container'>
      <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
        <div className="notch">
          <div className="crater" />
          <div className="crater" />
        </div>
        <div>
          <div className="shape sm" />
          <div className="shape sm" />
          <div className="shape md" />
          <div className="shape lg" />
        </div>
      </div>
    </div>
  );
};
