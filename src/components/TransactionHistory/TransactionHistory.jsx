import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export function Transactions({ items }) {
  return (
    <section className={style.transactions}>
      <table className={style.transactionsTable}>
        <thead className={style.tableHeader}>
          <tr className={style.tableHeaderTr}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id} className={style.tableBodyTr}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

Transactions.propTypes = {
  items: PropTypes.array.isRequired,
};
