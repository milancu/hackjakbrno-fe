import { client } from "@/openapi/requests/services.gen";

client.setConfig({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
});