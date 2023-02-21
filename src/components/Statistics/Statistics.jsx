import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

export function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map((stat, index) => (
          <li
            key={stat.id}
            className={style.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={style.label}> {stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
