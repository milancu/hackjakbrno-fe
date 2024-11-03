// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
  formDataBodySerializer,
} from "@hey-api/client-fetch";
import type {
  LoginData,
  LoginError,
  LoginResponse,
  RegisterData,
  RegisterError,
  RegisterResponse,
  ChatIndexError,
  ChatIndexResponse,
  ChatStoreData,
  ChatStoreError,
  ChatStoreResponse,
  ChatShowData,
  ChatShowError,
  ChatShowResponse,
  ChatIndexMessagedData,
  ChatIndexMessagedError,
  ChatIndexMessagedResponse,
  ChatStoreMessageData,
  ChatStoreMessageError,
  ChatStoreMessageResponse,
  ChatIndexSuggestionsData,
  ChatIndexSuggestionsError,
  ChatIndexSuggestionsResponse,
  ChatIndexPatientDatasetData,
  ChatIndexPatientDatasetError,
  ChatIndexPatientDatasetResponse,
  DocumentIndexData,
  DocumentIndexError,
  DocumentIndexResponse,
  DocumentStoreData,
  DocumentStoreError,
  DocumentStoreResponse,
  DocumentShowData,
  DocumentShowError,
  DocumentShowResponse,
  MeIndexWardsError,
  MeIndexWardsResponse,
  OrganisationIndexError,
  OrganisationIndexResponse,
  OrganisationShowData,
  OrganisationShowError,
  OrganisationShowResponse,
  OrganisationIndexPatientsData,
  OrganisationIndexPatientsError,
  OrganisationIndexPatientsResponse,
} from "./types.gen";

export const client = createClient(createConfig());

/**
 * Login a user
 * Handle an incoming authentication request.
 */
export const login = <ThrowOnError extends boolean = false>(
  options: Options<LoginData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    LoginResponse,
    LoginError,
    ThrowOnError
  >({
    ...options,
    url: "/api/login",
  });
};

/**
 * Register a user
 * Handle an incoming registration request.
 */
export const register = <ThrowOnError extends boolean = false>(
  options: Options<RegisterData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    RegisterResponse,
    RegisterError,
    ThrowOnError
  >({
    ...options,
    url: "/api/register",
  });
};

/**
 * Index all chats
 */
export const chatIndex = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ChatIndexResponse,
    ChatIndexError,
    ThrowOnError
  >({
    ...options,
    url: "/api/chats",
  });
};

/**
 * Store a new chat
 */
export const chatStore = <ThrowOnError extends boolean = false>(
  options: Options<ChatStoreData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ChatStoreResponse,
    ChatStoreError,
    ThrowOnError
  >({
    ...options,
    url: "/api/chats",
  });
};

/**
 * Show chat with given id
 */
export const chatShow = <ThrowOnError extends boolean = false>(
  options?: Options<ChatShowData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ChatShowResponse,
    ChatShowError,
    ThrowOnError
  >({
    ...options,
    url: "/api/chats/{chatId}",
  });
};

/**
 * Index all messages for a chat with given id
 */
export const chatIndexMessaged = <ThrowOnError extends boolean = false>(
  options?: Options<ChatIndexMessagedData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ChatIndexMessagedResponse,
    ChatIndexMessagedError,
    ThrowOnError
  >({
    ...options,
    url: "/api/chats/{chatId}/messages",
  });
};

/**
 * Store new message to a chat with given id
 */
export const chatStoreMessage = <ThrowOnError extends boolean = false>(
  options: Options<ChatStoreMessageData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ChatStoreMessageResponse,
    ChatStoreMessageError,
    ThrowOnError
  >({
    ...options,
    url: "/api/chats/{chatId}/messages",
  });
};

/**
 * Get suggestions what to reply
 */
export const chatIndexSuggestions = <ThrowOnError extends boolean = false>(
  options?: Options<ChatIndexSuggestionsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ChatIndexSuggestionsResponse,
    ChatIndexSuggestionsError,
    ThrowOnError
  >({
    ...options,
    url: "/api/chats/{chatId}/suggestions",
  });
};

/**
 * Get relevant information from patient database
 */
export const chatIndexPatientDataset = <ThrowOnError extends boolean = false>(
  options?: Options<ChatIndexPatientDatasetData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ChatIndexPatientDatasetResponse,
    ChatIndexPatientDatasetError,
    ThrowOnError
  >({
    ...options,
    url: "/api/chats/{chatId}/patient-dataset",
  });
};

/**
 * Index all documents
 */
export const documentIndex = <ThrowOnError extends boolean = false>(
  options?: Options<DocumentIndexData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    DocumentIndexResponse,
    DocumentIndexError,
    ThrowOnError
  >({
    ...options,
    url: "/api/documents",
  });
};

/**
 * Store a new document
 */
export const documentStore = <ThrowOnError extends boolean = false>(
  options: Options<DocumentStoreData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    DocumentStoreResponse,
    DocumentStoreError,
    ThrowOnError
  >({
    ...options,
    ...formDataBodySerializer,
    headers: {
      "Content-Type": null,
      ...options?.headers,
    },
    url: "/api/documents",
  });
};

/**
 * Show document with given id
 */
export const documentShow = <ThrowOnError extends boolean = false>(
  options?: Options<DocumentShowData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    DocumentShowResponse,
    DocumentShowError,
    ThrowOnError
  >({
    ...options,
    url: "/api/documents/{documentId}",
  });
};

/**
 * Get list of my wards (who am I guardian to e.g. children)
 */
export const meIndexWards = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    MeIndexWardsResponse,
    MeIndexWardsError,
    ThrowOnError
  >({
    ...options,
    url: "/api/me/wards",
  });
};

/**
 * Index all organisations
 */
export const organisationIndex = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    OrganisationIndexResponse,
    OrganisationIndexError,
    ThrowOnError
  >({
    ...options,
    url: "/api/organisations",
  });
};

/**
 * Show organisation with given id
 */
export const organisationShow = <ThrowOnError extends boolean = false>(
  options?: Options<OrganisationShowData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    OrganisationShowResponse,
    OrganisationShowError,
    ThrowOnError
  >({
    ...options,
    url: "/api/organisations/{organisationId}",
  });
};

/**
 * Index organisation patients
 */
export const organisationIndexPatients = <ThrowOnError extends boolean = false>(
  options?: Options<OrganisationIndexPatientsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    OrganisationIndexPatientsResponse,
    OrganisationIndexPatientsError,
    ThrowOnError
  >({
    ...options,
    url: "/api/organisations/{organisationId}/patients",
  });
};