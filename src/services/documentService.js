import {
  getDocumentsApi
} from "../api/documentApi";

const mapDocuments = (docs = []) => {

  return docs.map(doc => ({

    title:
      doc.documentName || doc.document,

    documentId:
      doc.documentNo,

    department:
      "-",

    source:
      doc.isSelfUpload!=undefined 
        ? "Self Upload"
        : doc.isDigiLockrFetch === true
        ? "DigiLocker"
        : "Government",

    date:
      doc.creationDate
    ? new Date(doc.creationDate)
        .toLocaleDateString("en-GB")
    : "-",

    canDownload:
      doc.isSelfUpload
        ? true
        : doc.isDownloadAlwaysEnabled,

   

  }));

};

export const getDocuments =
  async () => {

    const response =
      await getDocumentsApi();

    const govDocs =
      mapDocuments(
        response?.data?.govIssueDoc || []
      );

    const digiDocs =
      mapDocuments(
        response?.data?.digiLockrDoc || []
      );

    const selfDocs =
      mapDocuments(
        response?.data?.selfUploadDoc || []
      );
console.log("Gov", govDocs);
console.log("Digi", digiDocs);
console.log("Self", selfDocs);
    const allDocs = [

      ...govDocs,

      ...digiDocs,

      ...selfDocs

    ];
console.log(allDocs);
    return {

      allDocs,

      govDocs,

      digiDocs,

      selfDocs

    };

};