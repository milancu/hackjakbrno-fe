// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.2

import { type QueryClient } from "@tanstack/react-query";
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
  ChatIndexMessagedData,
  ChatIndexPatientDatasetData,
  ChatIndexSuggestionsData,
  ChatShowData,
  DocumentIndexData,
  DocumentShowData,
  OrganisationIndexPatientsData,
  OrganisationShowData,
} from "../requests/types.gen";
import * as Common from "./common";
export const prefetchUseChatIndex = (
  queryClient: QueryClient,
  clientOptions: Options<unknown, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseChatIndexKeyFn(clientOptions),
    queryFn: () =>
      chatIndex({ ...clientOptions }).then((response) => response.data),
  });
export const prefetchUseChatShow = (
  queryClient: QueryClient,
  clientOptions: Options<ChatShowData, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseChatShowKeyFn(clientOptions),
    queryFn: () =>
      chatShow({ ...clientOptions }).then((response) => response.data),
  });
export const prefetchUseChatIndexMessaged = (
  queryClient: QueryClient,
  clientOptions: Options<ChatIndexMessagedData, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseChatIndexMessagedKeyFn(clientOptions),
    queryFn: () =>
      chatIndexMessaged({ ...clientOptions }).then((response) => response.data),
  });
export const prefetchUseChatIndexSuggestions = (
  queryClient: QueryClient,
  clientOptions: Options<ChatIndexSuggestionsData, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseChatIndexSuggestionsKeyFn(clientOptions),
    queryFn: () =>
      chatIndexSuggestions({ ...clientOptions }).then(
        (response) => response.data,
      ),
  });
export const prefetchUseChatIndexPatientDataset = (
  queryClient: QueryClient,
  clientOptions: Options<ChatIndexPatientDatasetData, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseChatIndexPatientDatasetKeyFn(clientOptions),
    queryFn: () =>
      chatIndexPatientDataset({ ...clientOptions }).then(
        (response) => response.data,
      ),
  });
export const prefetchUseDocumentIndex = (
  queryClient: QueryClient,
  clientOptions: Options<DocumentIndexData, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDocumentIndexKeyFn(clientOptions),
    queryFn: () =>
      documentIndex({ ...clientOptions }).then((response) => response.data),
  });
export const prefetchUseDocumentShow = (
  queryClient: QueryClient,
  clientOptions: Options<DocumentShowData, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseDocumentShowKeyFn(clientOptions),
    queryFn: () =>
      documentShow({ ...clientOptions }).then((response) => response.data),
  });
export const prefetchUseMeIndexWards = (
  queryClient: QueryClient,
  clientOptions: Options<unknown, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMeIndexWardsKeyFn(clientOptions),
    queryFn: () =>
      meIndexWards({ ...clientOptions }).then((response) => response.data),
  });
export const prefetchUseOrganisationIndex = (
  queryClient: QueryClient,
  clientOptions: Options<unknown, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseOrganisationIndexKeyFn(clientOptions),
    queryFn: () =>
      organisationIndex({ ...clientOptions }).then((response) => response.data),
  });
export const prefetchUseOrganisationShow = (
  queryClient: QueryClient,
  clientOptions: Options<OrganisationShowData, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseOrganisationShowKeyFn(clientOptions),
    queryFn: () =>
      organisationShow({ ...clientOptions }).then((response) => response.data),
  });
export const prefetchUseOrganisationIndexPatients = (
  queryClient: QueryClient,
  clientOptions: Options<OrganisationIndexPatientsData, true> = {},
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseOrganisationIndexPatientsKeyFn(clientOptions),
    queryFn: () =>
      organisationIndexPatients({ ...clientOptions }).then(
        (response) => response.data,
      ),
  });
