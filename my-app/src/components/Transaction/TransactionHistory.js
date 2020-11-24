import PropTypes from 'prop-types';
import TransactionHistoryItem from "./TransactionHistoryItem"

export default function TransactionHistory({items}) {
    return (
<table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <TransactionHistoryItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}