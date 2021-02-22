import React from 'react';
import PropTypes from 'prop-types';
import s from './Transactions.module.css';

function Transactions({ items }) {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.tHeadRow}>
          <th className={s.tHeadCell}>Type</th>
          <th className={s.tHeadCell}>Amount</th>
          <th className={s.tHeadCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.tBodyRow} key={id}>
            <td className={s.tBodyCell}>{type}</td>
            <td className={s.tBodyCell}>{amount}</td>
            <td className={s.tBodyCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Transactions;
