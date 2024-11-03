// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.2

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  chatIndex,
  chatIndexMessaged,
  chatIndexPatientDataset,
  chatIndexSuggestions,
  chatShow,
  documentIndex,
  documentShow,
  meIndexWards,
  organisationIndex,
  organisationIndexPatients,
  organisationShow,
} from "../requests/services.gen";
import {
  ChatIndexError,
  ChatIndexMessagedData,
  ChatIndexMessagedError,
  ChatIndexPatientDatasetData,
  ChatIndexPatientDatasetError,
  ChatIndexSuggestionsData,
  ChatIndexSuggestionsError,
  ChatShowData,
  ChatShowError,
  DocumentIndexData,
  DocumentIndexError,
  DocumentShowData,
  DocumentShowError,
  MeIndexWardsError,
  OrganisationIndexError,
  OrganisationIndexPatientsData,
  OrganisationIndexPatientsError,
  OrganisationShowData,
  OrganisationShowError,
} from "../requests/types.gen";
import * as Common from "./common";
export const useChatIndexSuspense = <
  TData = Common.ChatIndexDefaultResponse,
  TError = ChatIndexError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<unknown, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseChatIndexKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatIndex({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useChatShowSuspense = <
  TData = Common.ChatShowDefaultResponse,
  TError = ChatShowError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ChatShowData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseChatShowKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatShow({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useChatIndexMessagedSuspense = <
  TData = Common.ChatIndexMessagedDefaultResponse,
  TError = ChatIndexMessagedError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ChatIndexMessagedData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseChatIndexMessagedKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatIndexMessaged({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useChatIndexSuggestionsSuspense = <
  TData = Common.ChatIndexSuggestionsDefaultResponse,
  TError = ChatIndexSuggestionsError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ChatIndexSuggestionsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseChatIndexSuggestionsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatIndexSuggestions({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useChatIndexPatientDatasetSuspense = <
  TData = Common.ChatIndexPatientDatasetDefaultResponse,
  TError = ChatIndexPatientDatasetError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ChatIndexPatientDatasetData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseChatIndexPatientDatasetKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatIndexPatientDataset({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useDocumentIndexSuspense = <
  TData = Common.DocumentIndexDefaultResponse,
  TError = DocumentIndexError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<DocumentIndexData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseDocumentIndexKeyFn(clientOptions, queryKey),
    queryFn: () =>
      documentIndex({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useDocumentShowSuspense = <
  TData = Common.DocumentShowDefaultResponse,
  TError = DocumentShowError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<DocumentShowData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseDocumentShowKeyFn(clientOptions, queryKey),
    queryFn: () =>
      documentShow({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useMeIndexWardsSuspense = <
  TData = Common.MeIndexWardsDefaultResponse,
  TError = MeIndexWardsError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<unknown, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMeIndexWardsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      meIndexWards({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useOrganisationIndexSuspense = <
  TData = Common.OrganisationIndexDefaultResponse,
  TError = OrganisationIndexError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<unknown, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseOrganisationIndexKeyFn(clientOptions, queryKey),
    queryFn: () =>
      organisationIndex({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useOrganisationShowSuspense = <
  TData = Common.OrganisationShowDefaultResponse,
  TError = OrganisationShowError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<OrganisationShowData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseOrganisationShowKeyFn(clientOptions, queryKey),
    queryFn: () =>
      organisationShow({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useOrganisationIndexPatientsSuspense = <
  TData = Common.OrganisationIndexPatientsDefaultResponse,
  TError = OrganisationIndexPatientsError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<OrganisationIndexPatientsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseOrganisationIndexPatientsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      organisationIndexPatients({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
