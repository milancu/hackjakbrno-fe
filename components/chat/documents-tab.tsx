import AttachmentMessage from "@/components/chat/attachment-message";
import { DocumentResponse } from "@/openapi/requests";
import React from "react";

interface DocumentTabProps {
  documents: DocumentResponse[];
}

const DocumentsTab: React.FC<DocumentTabProps> = ({ documents }) => {
  return (
    <div className={"flex max-h-[76vh] flex-col gap-2"}>
      {documents.map((doc: DocumentResponse) => {
        return (
          <AttachmentMessage
            id={doc.document_id}
            name={"PDF_2034348234"}
            path={""}
            key={doc.document_id}
          />
        );
      })}
    </div>
  );
};

export default DocumentsTab;
