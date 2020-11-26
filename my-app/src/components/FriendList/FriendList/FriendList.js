import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from '../FriendList/FriendList.module.css';

export default function FriendList({ friends = [] }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
