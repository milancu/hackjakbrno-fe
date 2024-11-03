"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useCallback, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import SuggestMessage from "@/components/chat/suggest-message";

const ChatInput = () => {
  const [value, setValue] = useState("");

  const handleValue = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    <div className={"flex w-full items-center gap-2"}>
      <Drawer>
        <DrawerTrigger className={"w-full"}>
          <Input
            type="text"
            placeholder="Vaše zpráva"
            className={"w-full"}
            value={value}
          />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <SuggestMessage
              message={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              }
            />
            <SuggestMessage
              message={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              }
            />
            <SuggestMessage
              message={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
              }
            />
          </DrawerHeader>
          <div className={"p-4"}>
            <Textarea
              autoFocus={true}
              className={"h-24"}
              value={value}
              onChange={(e) => handleValue(e.target.value)}
            />
          </div>
          <DrawerFooter className={"w-full"}>
            <Button className={"w-full"}>Odeslat</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Button>Odeslat</Button>
    </div>
  );
};

export default ChatInput;
