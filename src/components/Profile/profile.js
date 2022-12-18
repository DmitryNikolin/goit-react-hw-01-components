import propTypes from 'prop-types';
import s from './profile.module.css';

const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <div class={s.profile}>
      <div class={s.description}>
        <img src={avatar} alt={username} class={s.avatar} />
        <p class={s.username}>{username}</p>
        <p class={s.tag}>@{tag}</p>
        <p class={s.location}>{location}</p>
      </div>

      <ul class={s.stats}>
        <li>
          <span class={s.label}>Followers</span>
          <span class={s.quantity}>{followers}</span>
        </li>
        <li>
          <span class={s.label}>Views</span>
          <span class={s.quantity}>{views}</span>
        </li>
        <li>
          <span class={s.label}>Likes</span>
          <span class={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  username: 'Petra Marica',
  tag: '@pmarica',
  location: 'Salvador, Brasil',
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers: 1000, views: 2000, likes: 3000 },
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
};

export default Profile;
