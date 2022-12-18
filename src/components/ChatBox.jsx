import { useEffect } from 'react';
import { VariableSizeList } from 'react-window';
import ChatMsg from './ChatMsg';

const allChats = Array.from({ length: 200 }, (_, idx) => ({
  id: idx,
  content: `Message ${idx}`,
}));

const Row = ({ index, style }) => {
  return (
    <div style={{ ...style, border: '1px solid red' }}>
      <ChatMsg msg={allChats[index]} />
    </div>
  );
};

const compArr = [
  {
    component: <ChatMsg msg={allChats[0]} />,
  },
  {
    component: <ChatMsg msg={allChats[1]} />,
  },
  {
    component: <ChatMsg msg={allChats[2]} />,
  },
  {
    component: <ChatMsg msg={allChats[3]} />,
  },
];

const ChatBox = () => {
  useEffect(() => {
    const chatMsgs = document.getElementsByClassName('msg0');
    [...chatMsgs].forEach((msg) =>
      console.log('msg.height >', msg.clientHeight)
    );
  });

  return (
    <div>
      <h4>ChatBox</h4>
      <VariableSizeList
        style={{ border: '1px solid blue' }}
        width={400}
        height={300}
        itemCount={allChats.length}
        itemSize={() => 70}
      >
        {Row}
      </VariableSizeList>
    </div>
  );
};
export default ChatBox;
