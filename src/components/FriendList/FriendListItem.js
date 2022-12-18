import PropTypes from 'prop-types';
import s from './friendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class={s.item}>
      <span class={s[isOnline]}>{isOnline}</span>
      <img class={s.avatar} src={avatar} alt={name} width="48" />
      <p class={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};

export default FriendListItem;
