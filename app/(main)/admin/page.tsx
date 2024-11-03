"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import PatientCard from "@/components/patient/patient-card";
import {
  ChatResponse,
  OrganisationIndexPatientsResponse,
  OrganisationResponse,
  UserResponse,
} from "@/openapi/requests";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Page = () => {
  const { data: patients } = useSWR<OrganisationIndexPatientsResponse>(
    `/api/organisations/1/patients`,
    fetcher,
  );

  const { data: organisations } = useSWR<OrganisationResponse>(
    `/api/organisations/1`,
    fetcher,
  );

  const { data: chats } = useSWR<ChatResponse>(`/api/chats`, fetcher);

  if (!patients || !organisations) {
    return <div>loading...</div>;
  }

  return (
    <div className={"container mx-auto flex flex-col gap-4 p-4"}>
      <Card>
        <CardHeader>
          <div className={"text-2xl font-bold"}>{organisations.name}</div>
          <div className={"text-xl"}>{organisations.hospital?.name}</div>
        </CardHeader>
      </Card>
      <div className={"text-2xl font-bold"}>Pacienti</div>
      <div className={"flex flex-col gap-4"}>
        {patients.map((patient: UserResponse) => {
          return <PatientCard user={patient} key={patient.user_id} />;
        })}
      </div>
    </div>
  );
};

export default Page;
