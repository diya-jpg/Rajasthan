export const getDocumentTypesApi =
  async () => {

    const response =
      await fetch(
        "http://10.68.124.123:9091/allDoctypeOfCitizen"
      );

    if (!response.ok) {

      throw new Error(
        "Failed to fetch document types"
      );

    }

    return response.json();

  };


export const getDocumentMetadataApi =
  async (docTypeId) => {

    const response =
      await fetch(

`http://10.68.124.123:9091/primaryOrCompositeColumn?doctype=${docTypeId}&isSsoJanAadhLink=undefined`

      );

    if (!response.ok) {

      throw new Error(
        "Failed to fetch metadata"
      );

    }

    return response.json();

  };
