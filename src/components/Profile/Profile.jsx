import style from './Profile.module.css';
import PropTypes from 'prop-types';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <section className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
