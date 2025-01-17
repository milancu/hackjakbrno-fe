// This file is auto-generated by @hey-api/openapi-ts

export const DocumentResponseSchema = {
  properties: {
    document_id: {
      type: "integer",
    },
    raw_text: {
      type: "string",
    },
    patient_id: {
      type: "integer",
    },
    hl7_fhir_data: {
      type: "object",
    },
  },
  type: "object",
} as const;

export const ChatResponseSchema = {
  properties: {
    chat_id: {
      type: "integer",
    },
    organisation: {
      $ref: "#/components/schemas/OrganisationResponse",
    },
    patient: {
      $ref: "#/components/schemas/UserResponse",
    },
    guardian: {
      oneOf: [
        {
          $ref: "#/components/schemas/UserResponse",
        },
      ],
      nullable: true,
    },
  },
  type: "object",
} as const;

export const MessageResponseSchema = {
  properties: {
    message_id: {
      type: "integer",
    },
    author: {
      $ref: "#/components/schemas/UserResponse",
    },
    chat_id: {
      type: "integer",
    },
    is_organisation_message: {
      type: "boolean",
    },
    text: {
      type: "string",
    },
  },
  type: "object",
} as const;

export const ChatSuggestionResponseSchema = {
  properties: {
    hash: {
      type: "string",
    },
    text: {
      type: "string",
    },
  },
  type: "object",
} as const;

export const PatientDatasetItemResponseSchema = {
  properties: {
    hash: {
      type: "string",
    },
    summary: {
      type: "string",
    },
    sources: {
      type: "array",
      items: {
        $ref: "#/components/schemas/DocumentResponse",
      },
    },
  },
  type: "object",
} as const;

export const OrganisationResponseSchema = {
  properties: {
    organisation_id: {
      type: "integer",
    },
    name: {
      type: "string",
    },
    address: {
      type: "string",
    },
    logo: {
      $ref: "#/components/schemas/FileUploadResponse",
    },
    hospital: {
      $ref: "#/components/schemas/HospitalResponse",
    },
  },
  type: "object",
} as const;

export const UserResponseSchema = {
  properties: {
    user_id: {
      type: "integer",
    },
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
  type: "object",
} as const;

export const FileUploadResponseSchema = {
  properties: {
    file_upload_id: {
      type: "integer",
    },
    asset_location: {
      type: "string",
    },
  },
  type: "object",
} as const;

export const HospitalResponseSchema = {
  properties: {
    hospital_id: {
      type: "integer",
    },
    name: {
      type: "string",
    },
    address: {
      type: "string",
    },
    logo: {
      $ref: "#/components/schemas/FileUploadResponse",
    },
  },
  type: "object",
} as const;
