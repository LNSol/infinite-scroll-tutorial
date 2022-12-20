import { useEffect, useRef } from 'react';
import { VariableSizeList as List } from 'react-window';
import { LoremIpsum } from 'lorem-ipsum';
import ChatMsg from './ChatMsg';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 32,
    min: 4,
  },
});

const Msgs = Array.from({ length: 1000 }, (_, idx) => ({
  id: idx + 1,
  content: lorem.generateSentences(1),
}));

const ChatBox = () => {
  const listRef = useRef({});
  const rowHeights = useRef({});

  const getRowHeight = (index) => {
    return rowHeights.current[index] || 0; /* import!!! */
  };
  const setRowHeight = (index, size) => {
    listRef.current.resetAfterIndex(0); /* issue */
    rowHeights.current = { ...rowHeights.current, [index]: size };
  };
  /* ------------------- Row ----------------------- */
  const Row = ({ index, style }) => {
    const rowRef = useRef({});

    useEffect(() => {
      if (rowRef.current && !rowHeights.current[index])
        setRowHeight(index, rowRef.current.clientHeight);
    }, [rowRef.current]);

    return (
      <div style={style}>
        <div ref={rowRef}>
          <ChatMsg msg={Msgs[index]} />
        </div>
      </div>
    );
  };
  /* ------------------------------------------------- */
  const onClick = (item) => {
    listRef.current.scrollToItem(item, 'start');
  };

  useEffect(() => {
    listRef.current.scrollToItem(Msgs.length - 1, 'end');
  }, []);

  return (
    <div>
      <h4>ChatBox</h4>
      <List
        style={{ border: '1px solid black' }}
        width={400}
        height={600}
        itemCount={Msgs.length}
        itemSize={getRowHeight}
        ref={listRef}
      >
        {Row}
      </List>
      <button onClick={() => onClick(20)}>Scroll To 20</button>
      <button onClick={() => onClick(50)}>Scroll To 50</button>
      <button onClick={() => onClick(80)}>Scroll To 80</button>
    </div>
  );
};
export default ChatBox;
