import { VariableSizeList } from 'react-window';

const Row = ({ index, style }) => (
  <div style={{ ...style, border: '1px solid red' }}>Row {index}</div>
);

const VariableList = () => {
  return (
    <div>
      <h4>VariableSizeList</h4>
      <VariableSizeList
        style={{ border: '1px solid black' }}
        width={400}
        height={500}
        itemCount={100}
        itemSize={(index) => 25 + Math.round(Math.random() * 50)}
      >
        {Row}
      </VariableSizeList>
    </div>
  );
};
export default VariableList;
