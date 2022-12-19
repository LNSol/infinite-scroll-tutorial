import { useEffect, useRef } from 'react';
import { VariableSizeList as List } from 'react-window';
import ChatMsg from './ChatMsg';

const Msgs = Array.from({ length: 100 }, (_, idx) => ({
  id: idx + 1,
  content: `Message ${idx + 1}`,
}));

const ChatBox = () => {
  const listRef = useRef({});
  const rowHeights = useRef({});

  const getRowHeight = (index) => {
    return rowHeights.current[index] || 50;
  };
  const setRowHeight = (index, size) => {
    // listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
    console.log('rowHeights.current > ', rowHeights.current);
  };

  const Row = ({ index, style }) => {
    const rowRef = useRef(null);

    useEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, rowRef.current.clientHeight);
      }
    }, [rowRef.current]);

    return (
      <div ref={rowRef} style={style}>
        <ChatMsg msg={Msgs[index]} />
      </div>
    );
  };

  return (
    <div>
      <h4>ChatBox</h4>
      <List
        width={400}
        height={600}
        itemCount={Msgs.length}
        itemSize={getRowHeight}
        ref={listRef}
      >
        {Row}
      </List>
    </div>
  );
};
export default ChatBox;
