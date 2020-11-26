import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.isActive : s.status}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
