import PropTypes from 'prop-types';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div >
      <img
        src={avatar}
        alt="Аватар пользователя"
        
      />
      <p >{name}</p>
      <p >@{tag}</p>
      <p >{location}</p>
       
      <ul>
    <li>
      <span >Followers</span>
      <span>{ stats.followers }</span>
    </li>
    <li>
      <span >Views</span>
      <span>{ stats.views }</span>
    </li>
    <li>
      <span >Likes</span>
      <span>{ stats.likes}</span>
    </li>
  </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};


