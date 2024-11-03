"use client";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import React from "react";
import { pdfjs } from "react-pdf";
import { Document, Page as PagePdf } from "react-pdf";
import { DocumentResponse } from "@/openapi/requests";

interface PageProps {
  params: {
    id: string;
  };
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Page = ({ params: { id } }: PageProps) => {
  const { data: document } = useSWR<DocumentResponse>(
    `/api/documents/${id}`,
    fetcher,
  );

  if (!document) return <div>Loading...</div>;

  return (
    <div className={"p-4"}>
      {document.hl7_fhir_data}
      {document.raw_text}
      <embed
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/documents/${id}/download`}
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />

      {/*<Document*/}
      {/*  file={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/documents/${id}/download`}*/}
      {/*>*/}
      {/*  <PagePdf pageNumber={1} />*/}
      {/*</Document>*/}
    </div>
  );
};

export default Page;
