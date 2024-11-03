import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useCallback } from "react";
import { OrganisationResponse } from "@/openapi/requests";
import Image from "next/image";
import axiosInstance from "@/lib/axiosInstance";

interface OrganisationProps {
  id?: string;
  organisation: OrganisationResponse;
}

const OrganisationCard: React.FC<OrganisationProps> = ({ organisation }) => {
  const handleCreateChat = useCallback(() => {
    axiosInstance.post("api/chats", {
      organisation_id: organisation.organisation_id,
      ward_id: 1,
    });
  }, [organisation]);

  return (
    <Card>
      <CardHeader
        className={"flex flex-row items-center justify-between gap-4"}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${organisation.logo?.asset_location}`}
          alt={"hospital"}
          width={80}
          height={80}
        />
        <div className={"flex flex-col"}>
          <CardTitle className={"text-xl"}>{organisation.name}</CardTitle>
          <CardDescription>{organisation.hospital?.name}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Button className={"w-full"} onClick={handleCreateChat}>
          Otevřít Chat
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrganisationCard;
