"use client";

import React, { useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { DocumentResponse, OrganisationResponse } from "@/openapi/requests";
import DocumentsTab from "@/components/chat/documents-tab";
import { Paperclip } from "lucide-react";
import OrganisationCard from "@/components/organisation/organisation-card";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  const [document, setDocument] = useState<File | null>(null);

  const { data: organisations } = useSWR<OrganisationResponse[]>(
    "/api/organisations",
    fetcher,
  );

  const { data: documents } = useSWR<DocumentResponse[]>(
    "/api/documents",
    fetcher,
  );

  console.log(documents);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setDocument(file);
        await handleFileUpload(file); // Předání souboru do funkce
      } catch (error) {
        toast.error("Chyba při nahrávání souboru");
      }
    }
  };

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("document", file);

    try {
      await axiosInstance.post("/api/documents", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.info("Soubor byl úspěšně nahrán.");
      setDocument(null);
    } catch (error) {
      toast.error("Chyba při nahrávání souboru");
    }
  };

  if (!organisations || !documents) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={"container relative mx-auto flex h-screen flex-col gap-4 p-4"}
    >
      <Tabs
        defaultValue="dokumenty"
        className={"flex flex-col justify-between"}
      >
        <TabsList className={"w-full"}>
          <TabsTrigger value="dokumenty" className={"flex-1"}>
            Dokumenty
          </TabsTrigger>
          <TabsTrigger value="chat" className={"flex-1"}>
            Ordinace
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chat" className={"flex-1"}>
          <div className={"text-2xl font-bold"}>Vaše naštěvované ordinace</div>
          <div className={"flex flex-col gap-4"}>
            {organisations.map((organisation: OrganisationResponse) => (
              <OrganisationCard
                key={organisation.organisation_id}
                organisation={organisation}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="dokumenty">
          <DocumentsTab documents={documents} />
          <div
            className={"absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2"}
          >
            <Button size={"lg"} className={"relative"}>
              <input
                type="file"
                onChange={handleFileChange}
                className={"absolute left-1/2 -translate-x-1/2 opacity-0"}
              />
              <Paperclip />
              Nahrát dokument
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Page;
