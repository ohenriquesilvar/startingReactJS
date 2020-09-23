import React from 'react';
import './Button.css';

export default props => {
  const { label, operation, double, triple, click } = props;
  return (
    <button
      onClick={() => click(label)}
      className={`
      button
      ${operation ? 'operation' : ''}
      ${double ? 'double' : ''}
      ${triple ? 'triple' : ''}
    `} type='button'>{label}</button>
  );
}