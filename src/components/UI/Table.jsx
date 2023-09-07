import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { useFavorites } from '../../contexts';

const Table = ({ item, i }) => {
  const { removeItem } = useFavorites();
  return (
    <section className='favorites-table'>
      <table className='table rresponsive-table table-bordered'>
        <tbody>
          <tr>
            <th scope='row' className='col-1'>
              {i}
            </th>
            <td>{item}</td>
            <td className='col-1'>
              <button className='btn' onClick={() => removeItem(item)}>
                <FaTrashCan className='text-primary fs-5' />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
