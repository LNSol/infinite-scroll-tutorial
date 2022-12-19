import { memo } from 'react';
const ChatMsg = ({ msg }) => {
  return (
    <div
      style={{
        height: 50 + Math.round(Math.random() * 50),
        border: '1px solid red',
      }}
    >
      {msg.id}: {msg.content}
    </div>
  );
};
export default memo(ChatMsg);
