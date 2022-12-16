import { VariableSizeList } from 'react-window';

const ITEMS = Array.from({ length: 1000 }, (_, idx) => ({
  id: idx + 1,
  name: `Item ${idx + 1}`,
}));

const Item = ({ index }) => {
  const { id, name } = ITEMS[index];
  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

const Row = ({ index, style }) => (
  <div style={{ ...style, border: '1px solid red' }}>
    <Item index={index} />
  </div>
);

const VariableList = () => {
  return (
    <div>
      <h4>VariableSizeList</h4>
    </div>
  );
};
export default VariableList;
