import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile(user) {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img className={s.avatar} src={avatar} alt="Аватар пользователя" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.stat}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.stat}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.stat}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
