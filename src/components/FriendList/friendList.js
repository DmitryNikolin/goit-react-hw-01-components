import propTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul class={s.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
