// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.2

import { UseQueryResult } from "@tanstack/react-query";
import {
  chatIndex,
  chatIndexMessaged,
  chatIndexPatientDataset,
  chatIndexSuggestions,
  chatShow,
  chatStore,
  chatStoreMessage,
  documentIndex,
  documentShow,
  documentStore,
  login,
  meIndexWards,
  organisationIndex,
  organisationIndexPatients,
  organisationShow,
  register,
} from "../requests/services.gen";
export type ChatIndexDefaultResponse = Awaited<
  ReturnType<typeof chatIndex>
>["data"];
export type ChatIndexQueryResult<
  TData = ChatIndexDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useChatIndexKey = "ChatIndex";
export const UseChatIndexKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useChatIndexKey, ...(queryKey ?? [clientOptions])];
export type ChatShowDefaultResponse = Awaited<
  ReturnType<typeof chatShow>
>["data"];
export type ChatShowQueryResult<
  TData = ChatShowDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useChatShowKey = "ChatShow";
export const UseChatShowKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useChatShowKey, ...(queryKey ?? [clientOptions])];
export type ChatIndexMessagedDefaultResponse = Awaited<
  ReturnType<typeof chatIndexMessaged>
>["data"];
export type ChatIndexMessagedQueryResult<
  TData = ChatIndexMessagedDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useChatIndexMessagedKey = "ChatIndexMessaged";
export const UseChatIndexMessagedKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useChatIndexMessagedKey, ...(queryKey ?? [clientOptions])];
export type ChatIndexSuggestionsDefaultResponse = Awaited<
  ReturnType<typeof chatIndexSuggestions>
>["data"];
export type ChatIndexSuggestionsQueryResult<
  TData = ChatIndexSuggestionsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useChatIndexSuggestionsKey = "ChatIndexSuggestions";
export const UseChatIndexSuggestionsKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useChatIndexSuggestionsKey, ...(queryKey ?? [clientOptions])];
export type ChatIndexPatientDatasetDefaultResponse = Awaited<
  ReturnType<typeof chatIndexPatientDataset>
>["data"];
export type ChatIndexPatientDatasetQueryResult<
  TData = ChatIndexPatientDatasetDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useChatIndexPatientDatasetKey = "ChatIndexPatientDataset";
export const UseChatIndexPatientDatasetKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useChatIndexPatientDatasetKey, ...(queryKey ?? [clientOptions])];
export type DocumentIndexDefaultResponse = Awaited<
  ReturnType<typeof documentIndex>
>["data"];
export type DocumentIndexQueryResult<
  TData = DocumentIndexDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDocumentIndexKey = "DocumentIndex";
export const UseDocumentIndexKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useDocumentIndexKey, ...(queryKey ?? [clientOptions])];
export type DocumentShowDefaultResponse = Awaited<
  ReturnType<typeof documentShow>
>["data"];
export type DocumentShowQueryResult<
  TData = DocumentShowDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useDocumentShowKey = "DocumentShow";
export const UseDocumentShowKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useDocumentShowKey, ...(queryKey ?? [clientOptions])];
export type MeIndexWardsDefaultResponse = Awaited<
  ReturnType<typeof meIndexWards>
>["data"];
export type MeIndexWardsQueryResult<
  TData = MeIndexWardsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMeIndexWardsKey = "MeIndexWards";
export const UseMeIndexWardsKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useMeIndexWardsKey, ...(queryKey ?? [clientOptions])];
export type OrganisationIndexDefaultResponse = Awaited<
  ReturnType<typeof organisationIndex>
>["data"];
export type OrganisationIndexQueryResult<
  TData = OrganisationIndexDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOrganisationIndexKey = "OrganisationIndex";
export const UseOrganisationIndexKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useOrganisationIndexKey, ...(queryKey ?? [clientOptions])];
export type OrganisationShowDefaultResponse = Awaited<
  ReturnType<typeof organisationShow>
>["data"];
export type OrganisationShowQueryResult<
  TData = OrganisationShowDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOrganisationShowKey = "OrganisationShow";
export const UseOrganisationShowKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useOrganisationShowKey, ...(queryKey ?? [clientOptions])];
export type OrganisationIndexPatientsDefaultResponse = Awaited<
  ReturnType<typeof organisationIndexPatients>
>["data"];
export type OrganisationIndexPatientsQueryResult<
  TData = OrganisationIndexPatientsDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useOrganisationIndexPatientsKey = "OrganisationIndexPatients";
export const UseOrganisationIndexPatientsKeyFn = (
  clientOptions: Options<unknown, true> = {},
  queryKey?: Array<unknown>,
) => [useOrganisationIndexPatientsKey, ...(queryKey ?? [clientOptions])];
export type LoginMutationResult = Awaited<ReturnType<typeof login>>;
export const useLoginKey = "Login";
export const UseLoginKeyFn = (mutationKey?: Array<unknown>) => [
  useLoginKey,
  ...(mutationKey ?? []),
];
export type RegisterMutationResult = Awaited<ReturnType<typeof register>>;
export const useRegisterKey = "Register";
export const UseRegisterKeyFn = (mutationKey?: Array<unknown>) => [
  useRegisterKey,
  ...(mutationKey ?? []),
];
export type ChatStoreMutationResult = Awaited<ReturnType<typeof chatStore>>;
export const useChatStoreKey = "ChatStore";
export const UseChatStoreKeyFn = (mutationKey?: Array<unknown>) => [
  useChatStoreKey,
  ...(mutationKey ?? []),
];
export type ChatStoreMessageMutationResult = Awaited<
  ReturnType<typeof chatStoreMessage>
>;
export const useChatStoreMessageKey = "ChatStoreMessage";
export const UseChatStoreMessageKeyFn = (mutationKey?: Array<unknown>) => [
  useChatStoreMessageKey,
  ...(mutationKey ?? []),
];
export type DocumentStoreMutationResult = Awaited<
  ReturnType<typeof documentStore>
>;
export const useDocumentStoreKey = "DocumentStore";
export const UseDocumentStoreKeyFn = (mutationKey?: Array<unknown>) => [
  useDocumentStoreKey,
  ...(mutationKey ?? []),
];
