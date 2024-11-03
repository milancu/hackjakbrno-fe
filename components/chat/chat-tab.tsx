import ChatMessage from "@/components/chat/chat-message";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatTab = () => {
  return (
    <ScrollArea className="h-[76vh]">
      <div className={"flex flex-1 flex-col gap-2 overflow-scroll"}>
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={false} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
        <ChatMessage message={"Lorem ipsum"} isMessageFromSender={true} />
      </div>
    </ScrollArea>
  );
};

export default ChatTab;
