import Nav from '../components/Nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <hr />
      {children}
    </div>
  );
};
export default Layout;
