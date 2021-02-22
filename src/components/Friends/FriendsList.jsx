import React from 'react';
import FriendsItem from './FriendsItem';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.container}>
      {friends.map(friend => (
        <FriendsItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
