import style from './FriendsList.module.css';
import PropTypes from 'prop-types';

export function FriendsList({ friends }) {
  return (
    <section>
      <ul className={style.friendList}>
        {friends.map(friend => (
          <li className={style.item} key={friend.id}>
            <div
              className={
                friend.isOnline ? `${style.online}` : `${style.offline}`
              }
            ></div>
            <img
              className={style.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="54"
            />
            <p className={style.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
