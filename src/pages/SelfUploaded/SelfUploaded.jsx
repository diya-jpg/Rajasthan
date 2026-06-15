import "./SelfUploaded.css";

import SelfUploadHeader from "../../components/SelfUploadHeader";
import SelfUploadStats from "../../components/SelfUploadStats";
import SelfUploadFilterBar from "../../components/SelfUploadFilterBar";
import SelfUploadTable from "../../components/SelfUploadTable";

function SelfUploaded() {

  const uploadedDocuments = [
    {
      title: "Aadhaar Card Copy.pdf",
      category: "Identity",
      type: "PDF",
      status: "Repository Verified",
      size: "1.24 MB",
      uploadedOn: "24 May 2026",
    },
    {
      title: "Rent Agreement.jpg",
      category: "Personal",
      type: "JPG",
      status: "Manually Uploaded",
      size: "2.18 MB",
      uploadedOn: "22 May 2026",
    },
    {
      title: "Income Proof 2025.pdf",
      category: "Financial",
      type: "PDF",
      status: "Repository Verified",
      size: "3.45 MB",
      uploadedOn: "20 May 2026",
    },
  ];

  return (
    <section className="self-uploaded-page">

      <SelfUploadHeader />

      <SelfUploadStats />

      <SelfUploadFilterBar />

      <SelfUploadTable
        documents={uploadedDocuments}
      />

    </section>
  );
}

export default SelfUploaded;