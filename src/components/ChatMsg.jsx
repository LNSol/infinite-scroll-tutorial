import { memo } from 'react';

const ChatMsg = ({ msg }) => {
  return (
    <div style={{ border: '1px solid red' }}>
      {msg.id}: {msg.content}
    </div>
  );
};
export default memo(ChatMsg);
