import propTypes from 'prop-types';
import s from './statistics.module.css';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section class={s.statistics}>
      {title && <h2 class={s.title}>{title}</h2>}

      <ul class={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            class={s.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span class={s.label}>{label}</span>
            <span class={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};

export default Statistics;
