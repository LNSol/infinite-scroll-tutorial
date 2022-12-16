import { Outlet, Link } from 'react-router-dom';
import FixedList from '../components/FixedList';
import VariableList from '../components/VariableList';

const List = () => {
  return (
    <div>
      <h2>List Page</h2>
      <ul>
        <li>
          <Link to='/list/fixed'>FixedList</Link>
        </li>
        <li>
          <Link to='/list/variable'>VariableList</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default List;
