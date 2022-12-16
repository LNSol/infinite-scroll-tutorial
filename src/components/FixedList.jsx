import { FixedSizeList } from 'react-window';

// db에서 가져온 채팅 메시지 데이터
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

const FixedList = () => {
  return (
    <div>
      <h4>FixedSizeList</h4>
      <FixedSizeList
        style={{ border: '1px solid black' }}
        height={500}
        width={300}
        itemSize={50}
        itemCount={1000}
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};
export default FixedList;
