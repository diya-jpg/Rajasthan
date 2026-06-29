import "./Documents.css";
import { useEffect, useState } from "react";

import { getDocuments }
from "../../services/documentService";
import UploadDocumentModal
from "../UploadDocumentModal/UploadDocumentModal";
import DocumentsHeader from "../../components/DocumentsHeader";
import DocumentsFilters from "../../components/DocumentsFilters";
import DocumentsStats from "../../components/DocumentsStats";
import DocumentsTable from "../../components/DocumentsTable";

function Documents() {

  const [allDocs, setAllDocs] =
    useState([]);

  const [govDocs, setGovDocs] =
    useState([]);

  const [digiDocs, setDigiDocs] =
    useState([]);

  const [selfDocs, setSelfDocs] =
    useState([]);

  const [activeTab, setActiveTab] =
    useState("all");

  useEffect(() => {

    loadDocuments();

  }, []);

  const loadDocuments = async () => {

    try {

      const data =
        await getDocuments();

      setAllDocs(data.allDocs);

      setGovDocs(data.govDocs);

      setDigiDocs(data.digiDocs);

      setSelfDocs(data.selfDocs);

    } catch (error) {

      console.error(
        "Failed to fetch documents",
        error
      );

    }

  };

  const currentDocuments =

    activeTab === "government"
      ? govDocs

      : activeTab === "digilocker"
      ? digiDocs

      : activeTab === "self"
      ? selfDocs

      : allDocs;
const [showUploadModal, setShowUploadModal] =
  useState(false);
  return (

    <section className="documents-page">

      <DocumentsHeader  onUploadClick={() =>
    setShowUploadModal(true)
  } />

     <DocumentsStats
  totalCount={allDocs.length}
  govCount={govDocs.length}
  digiCount={digiDocs.length}
  selfCount={selfDocs.length}
/>

      <DocumentsFilters

        activeTab={activeTab}

        setActiveTab={setActiveTab}

      />

      <DocumentsTable
        documents={currentDocuments}
      />
{showUploadModal && (

  <UploadDocumentModal

    onClose={() =>
      setShowUploadModal(false)
    }

  />

)}
    </section>

  );

}

export default Documents;