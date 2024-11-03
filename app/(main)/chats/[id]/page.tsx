"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import ChatTab from "@/components/chat/chat-tab";
import DocumentsTab from "@/components/chat/documents-tab";
import ChatInput from "@/components/chat/chat-input";
import { useCallback, useState } from "react";
import AttachmentInput from "@/components/chat/attachment-input";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState<string>("chat");

  const handleTabChange = useCallback((value: string) => {
    setSelectedTab(value);
  }, []);

  return (
    <div
      className={
        "container relative mx-auto flex h-full flex-col justify-between gap-4 p-4"
      }
    >
      <div className={"flex w-full items-center gap-6 border-b pb-4"}>
        <Button size={"icon"} asChild>
          <Link href={"/"}>
            <ChevronLeftIcon className={"h-5 w-5"} />
          </Link>
        </Button>
        <div>
          <div className={"font-bold"}>Fakultní nemocnice Brno</div>
          <div className={"text-sm text-muted-foreground"}>
            Endoskopické centrum
          </div>
        </div>
      </div>
      <Tabs
        onValueChange={handleTabChange}
        value={selectedTab}
        defaultValue="chat"
        className={"relative flex flex-1 flex-col justify-between"}
      >
        <TabsList className={"w-full"}>
          <TabsTrigger value="chat" className={"flex-1"}>
            Chat
          </TabsTrigger>
          <TabsTrigger value="dokumenty" className={"flex-1"}>
            Dokumenty
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chat" className={"flex-1"}>
          <ChatTab />
        </TabsContent>
        <TabsContent value="dokumenty">
          <DocumentsTab />
        </TabsContent>
      </Tabs>
      <hr />
      {selectedTab === "chat" && <ChatInput />}
      {selectedTab === "dokumenty" && <AttachmentInput />}
    </div>
  );
};

export default Page;
