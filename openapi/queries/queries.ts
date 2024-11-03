// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.2

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
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
  ChatStoreData,
  ChatStoreError,
  ChatStoreMessageData,
  ChatStoreMessageError,
  DocumentIndexData,
  DocumentIndexError,
  DocumentShowData,
  DocumentShowError,
  DocumentStoreData,
  DocumentStoreError,
  LoginData,
  LoginError,
  MeIndexWardsError,
  OrganisationIndexError,
  OrganisationIndexPatientsData,
  OrganisationIndexPatientsError,
  OrganisationShowData,
  OrganisationShowError,
  RegisterData,
  RegisterError,
} from "../requests/types.gen";
import * as Common from "./common";
export const useChatIndex = <
  TData = Common.ChatIndexDefaultResponse,
  TError = ChatIndexError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<unknown, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseChatIndexKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatIndex({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useChatShow = <
  TData = Common.ChatShowDefaultResponse,
  TError = ChatShowError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ChatShowData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseChatShowKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatShow({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useChatIndexMessaged = <
  TData = Common.ChatIndexMessagedDefaultResponse,
  TError = ChatIndexMessagedError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ChatIndexMessagedData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseChatIndexMessagedKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatIndexMessaged({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useChatIndexSuggestions = <
  TData = Common.ChatIndexSuggestionsDefaultResponse,
  TError = ChatIndexSuggestionsError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ChatIndexSuggestionsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseChatIndexSuggestionsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatIndexSuggestions({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useChatIndexPatientDataset = <
  TData = Common.ChatIndexPatientDatasetDefaultResponse,
  TError = ChatIndexPatientDatasetError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<ChatIndexPatientDatasetData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseChatIndexPatientDatasetKeyFn(clientOptions, queryKey),
    queryFn: () =>
      chatIndexPatientDataset({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useDocumentIndex = <
  TData = Common.DocumentIndexDefaultResponse,
  TError = DocumentIndexError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<DocumentIndexData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDocumentIndexKeyFn(clientOptions, queryKey),
    queryFn: () =>
      documentIndex({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useDocumentShow = <
  TData = Common.DocumentShowDefaultResponse,
  TError = DocumentShowError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<DocumentShowData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseDocumentShowKeyFn(clientOptions, queryKey),
    queryFn: () =>
      documentShow({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useMeIndexWards = <
  TData = Common.MeIndexWardsDefaultResponse,
  TError = MeIndexWardsError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<unknown, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMeIndexWardsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      meIndexWards({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useOrganisationIndex = <
  TData = Common.OrganisationIndexDefaultResponse,
  TError = OrganisationIndexError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<unknown, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseOrganisationIndexKeyFn(clientOptions, queryKey),
    queryFn: () =>
      organisationIndex({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useOrganisationShow = <
  TData = Common.OrganisationShowDefaultResponse,
  TError = OrganisationShowError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<OrganisationShowData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseOrganisationShowKeyFn(clientOptions, queryKey),
    queryFn: () =>
      organisationShow({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useOrganisationIndexPatients = <
  TData = Common.OrganisationIndexPatientsDefaultResponse,
  TError = OrganisationIndexPatientsError,
  TQueryKey extends Array<unknown> = unknown[],
>(
  clientOptions: Options<OrganisationIndexPatientsData, true> = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">,
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseOrganisationIndexPatientsKeyFn(clientOptions, queryKey),
    queryFn: () =>
      organisationIndexPatients({ ...clientOptions }).then(
        (response) => response.data as TData,
      ) as TData,
    ...options,
  });
export const useLogin = <
  TData = Common.LoginMutationResult,
  TError = LoginError,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<LoginData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<LoginData, true>, TContext>({
    mutationKey: Common.UseLoginKeyFn(mutationKey),
    mutationFn: (clientOptions) =>
      login(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
export const useRegister = <
  TData = Common.RegisterMutationResult,
  TError = RegisterError,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<RegisterData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<RegisterData, true>, TContext>({
    mutationKey: Common.UseRegisterKeyFn(mutationKey),
    mutationFn: (clientOptions) =>
      register(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
export const useChatStore = <
  TData = Common.ChatStoreMutationResult,
  TError = ChatStoreError,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<TData, TError, Options<ChatStoreData, true>, TContext>,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<ChatStoreData, true>, TContext>({
    mutationKey: Common.UseChatStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) =>
      chatStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
export const useChatStoreMessage = <
  TData = Common.ChatStoreMessageMutationResult,
  TError = ChatStoreMessageError,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      Options<ChatStoreMessageData, true>,
      TContext
    >,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<ChatStoreMessageData, true>, TContext>({
    mutationKey: Common.UseChatStoreMessageKeyFn(mutationKey),
    mutationFn: (clientOptions) =>
      chatStoreMessage(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
export const useDocumentStore = <
  TData = Common.DocumentStoreMutationResult,
  TError = DocumentStoreError,
  TQueryKey extends Array<unknown> = unknown[],
  TContext = unknown,
>(
  mutationKey?: TQueryKey,
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      Options<DocumentStoreData, true>,
      TContext
    >,
    "mutationKey" | "mutationFn"
  >,
) =>
  useMutation<TData, TError, Options<DocumentStoreData, true>, TContext>({
    mutationKey: Common.UseDocumentStoreKeyFn(mutationKey),
    mutationFn: (clientOptions) =>
      documentStore(clientOptions) as unknown as Promise<TData>,
    ...options,
  });
