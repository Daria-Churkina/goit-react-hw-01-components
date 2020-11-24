import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";


export default function FriendList({ friends = [] }) {
    return (
        <ul>
            {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
</ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
}