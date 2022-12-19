import { useEffect, useRef, memo } from 'react';
import { VariableSizeList as List, areEqual } from 'react-window';
import { LoremIpsum } from 'lorem-ipsum';
import ChatMsg from './ChatMsg';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 32,
    min: 4,
  },
});

const Msgs = Array.from({ length: 100 }, (_, idx) => ({
  id: idx + 1,
  content: lorem.generateSentences(1),
}));

const ChatBox = () => {
  const listRef = useRef({});
  const rowHeights = useRef({});

  console.log('render');

  const getRowHeight = (index) => {
    return rowHeights.current[index] || 50;
  };
  const setRowHeight = (index, size) => {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  };

  const Row = memo(({ index, style }) => {
    const rowRef = useRef({});

    useEffect(() => {
      if (rowRef.current) {
        console.log('>> ', rowRef.current.clientHeight);
        setRowHeight(index, rowRef.current.clientHeight);
      }
    }, [rowRef.current]);

    return (
      <div style={style}>
        <div ref={rowRef}>
          <ChatMsg msg={Msgs[index]} />
        </div>
      </div>
    );
  }, areEqual);

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
    </div>
  );
};
export default ChatBox;
