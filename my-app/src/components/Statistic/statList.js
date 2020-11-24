import PropTypes from 'prop-types';
import StatItem from "../Statistic/statItem";

export default function StatList({title, stats }) {
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map(stat => (
                    <StatItem key={stat.id} {...stat} />
                ))}
            </ul>
        </section>

    );
};

StatList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}