import React from 'react';
import { useSelector } from 'react-redux';

function Score() {
  const value = useSelector((x) => x.counter.value);
  return <h3>{value}</h3>;
}

export default Score;
