import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { UserResponse } from "@/openapi/requests";

interface PatientCardProps {
  user: UserResponse;
}

const PatientCard: React.FC<PatientCardProps> = ({ user }) => {
  return (
    <Link href={"/chats/123/"}>
      <Card>
        <CardHeader className={"flex flex-row items-center justify-between"}>
          <div>
            <CardTitle className={"text-xl"}>{user.name}</CardTitle>
            <CardDescription>{user.email}</CardDescription>
          </div>
          <Button asChild variant={"ghost"} size={"icon"}>
            <Link href={`/chats/${user.user_id}/`}>
              <ChevronRightIcon />
            </Link>
          </Button>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default PatientCard;
