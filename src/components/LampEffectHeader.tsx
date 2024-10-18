import React from 'react';
import './LampEffectHeader.css'; // We'll define custom styles in this CSS file

const LampEffectHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="lamp-container">
      <div className="lamp-content">
        <h1 className="lamp-text">{text}</h1>
        <div className="lamp"></div>
      </div>
    </div>
  );
};

export default LampEffectHeader;
