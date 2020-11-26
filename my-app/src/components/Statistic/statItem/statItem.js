import PropTypes from 'prop-types';
import s from '../statItem/statItem.module.css';
import { randomColor } from './randomColor';

export default function StatItem({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
