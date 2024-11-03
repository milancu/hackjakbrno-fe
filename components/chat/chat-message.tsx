import React from "react";

interface ChatMessageProps {
  message: string;
  isMessageFromSender: boolean;
}

const getSenderFlexClass = (isMessageFromSender: boolean) =>
  isMessageFromSender ? "block" : "hidden";

const getReceiverFlexClass = (isMessageFromSender: boolean) =>
  isMessageFromSender ? "hidden" : "block";

const getMessageClass = (isMessageFromSender: boolean) =>
  isMessageFromSender ? "bg-primary text-white" : "bg-secondary";

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isMessageFromSender,
}) => {
  return (
    <div className={"flex"}>
      <div className={`flex-1 ${getSenderFlexClass(isMessageFromSender)}`} />
      <div
        className={`${getMessageClass(isMessageFromSender)} max-w-[300px] rounded-2xl px-6 py-2`}
      >
        {message}
      </div>
      <div className={`flex-1 ${getReceiverFlexClass(isMessageFromSender)}`} />
    </div>
  );
};

export default ChatMessage;
