const ChatMsg = ({ msg }) => {
  return (
    <div
      className={`msg${msg.id}`}
      style={{ height: 25 + Math.round(Math.random() * 50) }}
    >
      {msg.id}: {msg.content}
    </div>
  );
};
export default ChatMsg;
