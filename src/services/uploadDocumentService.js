import {
  getDocumentTypesApi,
  getDocumentMetadataApi
}
from "../api/uploadDocumentApi";

export const getDocumentTypes =
  async () => {

    const response =
      await getDocumentTypesApi();

    return response.data || [];

  };
  export const getDocumentMetadata =
  async (docTypeId) => {

    const response =
      await getDocumentMetadataApi(
        docTypeId
      );

    return response;

  };