import PropTypes from 'prop-types';

export default function FriendListItem({isOnline, avatar, name}) {
    return (
<li>
            <span>{isOnline}</span>
  <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
</li>    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};