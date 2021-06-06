import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function StatisticsItem({ label, percentage }) {
  return (
    <li
      className={s.item}
      style={{ backgroundColor: generateItemColor(0, 255) }}
    >
      <span className={s.lable}>{label} </span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

function generateItemColor(min, max) {
  const itemColor = `rgb(
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min},
      ${Math.random() * (max - min) + min}
  )`;

  return itemColor;
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
