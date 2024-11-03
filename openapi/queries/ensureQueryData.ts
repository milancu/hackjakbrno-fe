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
export const ensureUseChatIndexData = (
  queryClient: QueryClient,
  clientOptions: Options<unknown, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseChatIndexKeyFn(clientOptions),
    queryFn: () =>
      chatIndex({ ...clientOptions }).then((response) => response.data),
  });
export const ensureUseChatShowData = (
  queryClient: QueryClient,
  clientOptions: Options<ChatShowData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseChatShowKeyFn(clientOptions),
    queryFn: () =>
      chatShow({ ...clientOptions }).then((response) => response.data),
  });
export const ensureUseChatIndexMessagedData = (
  queryClient: QueryClient,
  clientOptions: Options<ChatIndexMessagedData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseChatIndexMessagedKeyFn(clientOptions),
    queryFn: () =>
      chatIndexMessaged({ ...clientOptions }).then((response) => response.data),
  });
export const ensureUseChatIndexSuggestionsData = (
  queryClient: QueryClient,
  clientOptions: Options<ChatIndexSuggestionsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseChatIndexSuggestionsKeyFn(clientOptions),
    queryFn: () =>
      chatIndexSuggestions({ ...clientOptions }).then(
        (response) => response.data,
      ),
  });
export const ensureUseChatIndexPatientDatasetData = (
  queryClient: QueryClient,
  clientOptions: Options<ChatIndexPatientDatasetData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseChatIndexPatientDatasetKeyFn(clientOptions),
    queryFn: () =>
      chatIndexPatientDataset({ ...clientOptions }).then(
        (response) => response.data,
      ),
  });
export const ensureUseDocumentIndexData = (
  queryClient: QueryClient,
  clientOptions: Options<DocumentIndexData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseDocumentIndexKeyFn(clientOptions),
    queryFn: () =>
      documentIndex({ ...clientOptions }).then((response) => response.data),
  });
export const ensureUseDocumentShowData = (
  queryClient: QueryClient,
  clientOptions: Options<DocumentShowData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseDocumentShowKeyFn(clientOptions),
    queryFn: () =>
      documentShow({ ...clientOptions }).then((response) => response.data),
  });
export const ensureUseMeIndexWardsData = (
  queryClient: QueryClient,
  clientOptions: Options<unknown, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseMeIndexWardsKeyFn(clientOptions),
    queryFn: () =>
      meIndexWards({ ...clientOptions }).then((response) => response.data),
  });
export const ensureUseOrganisationIndexData = (
  queryClient: QueryClient,
  clientOptions: Options<unknown, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseOrganisationIndexKeyFn(clientOptions),
    queryFn: () =>
      organisationIndex({ ...clientOptions }).then((response) => response.data),
  });
export const ensureUseOrganisationShowData = (
  queryClient: QueryClient,
  clientOptions: Options<OrganisationShowData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseOrganisationShowKeyFn(clientOptions),
    queryFn: () =>
      organisationShow({ ...clientOptions }).then((response) => response.data),
  });
export const ensureUseOrganisationIndexPatientsData = (
  queryClient: QueryClient,
  clientOptions: Options<OrganisationIndexPatientsData, true> = {},
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseOrganisationIndexPatientsKeyFn(clientOptions),
    queryFn: () =>
      organisationIndexPatients({ ...clientOptions }).then(
        (response) => response.data,
      ),
  });
