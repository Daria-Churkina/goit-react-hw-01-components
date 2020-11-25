import PropTypes from 'prop-types';

export default function StatItem({ label, percentage }) {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}%</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
