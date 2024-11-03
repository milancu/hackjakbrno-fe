import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Paperclip } from "lucide-react";
import Link from "next/link";

interface AttachmentMessageProps {
  name: string;
  id?: number;
  path: string;
}

const AttachmentMessage: React.FC<AttachmentMessageProps> = ({
  name,
  id,

  path,
}) => {
  return (
    <Link href={`/documents/${id}`}>
      <Card>
        <CardHeader className={"flex flex-row items-center gap-4"}>
          <Paperclip />
          <div>{name}</div>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default AttachmentMessage;
