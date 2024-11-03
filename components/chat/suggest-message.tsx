import Typewriter from "typewriter-effect";
import React from "react";
import { Sparkles } from "lucide-react";

interface SuggestMessageProps {
  message: string;
}

const SuggestMessage: React.FC<SuggestMessageProps> = ({ message }) => {
  return (
    <div
      className={
        "relative m-2 rounded-sm border-4 border-blue-200 p-4 text-left"
      }
    >
      <Sparkles
        fill={"#3b82f6"}
        stroke={"#3b82f6"}
        className={"absolute right-0 top-0 -translate-y-1/2"}
      />
      <Typewriter
        options={{
          strings: message,
          autoStart: true,
          loop: false,
          delay: 20,
          deleteSpeed: 0,
        }}
      />
    </div>
  );
};

export default SuggestMessage;
