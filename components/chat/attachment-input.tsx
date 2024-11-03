import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CameraIcon, Paperclip } from "lucide-react";

const AttachmentInput = () => {
  return (
    <div className={"flex justify-between gap-2"}>
      <Button className={"flex-1"}>
        <CameraIcon />
        Vyfotit dokument
      </Button>
      <Button className={"relative flex-1"}>
        <Input
          type="file"
          className={"absolute left-1/2 -translate-x-1/2 opacity-0"}
        />
        <Paperclip />
        Nahrát dokument
      </Button>
    </div>
  );
};

export default AttachmentInput;
