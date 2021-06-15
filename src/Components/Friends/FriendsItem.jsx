import React from 'react';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

function FriendsItem({ avatar, name, isOnline }) {
  let bgColor;
  isOnline ? (bgColor = 'green') : (bgColor = 'red');

  return (
    <li className={s.item}>
      <span style={{ backgroundColor: bgColor }} className={s.status}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <h3 className="name">{name}</h3>
    </li>
  );
}

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;
