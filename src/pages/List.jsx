import { Outlet, Link } from 'react-router-dom';

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
        <li>
          <Link to='/list/chat'>Chat</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default List;
