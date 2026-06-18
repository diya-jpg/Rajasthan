import "./DocumentTypes.css";

function DocumentTypes({
  selectedDepartment,
  selectedDocumentType,
  setSelectedDocumentType
}) {

  const documentMap = {

    Education: [
      "10th Marksheet",
      "12th Marksheet",
      "Bonafide Certificate",
      "Migration Certificate",
      "Character Certificate"
    ],

    Revenue: [
      "Jamabandi",
      "Khata Copy",
      "Land Record",
      "Mutation",
      "Property Record"
    ],

    Transport: [
      "Driving License",
      "Vehicle RC",
      "Fitness Certificate",
      "Permit",
      "PUC Certificate"
    ],

    Employment: [
      "Employment Certificate",
      "NOC",
      "Joining Letter",
      "Experience Letter"
    ],

    Health: [
      "ABHA Card",
      "Medical Certificate",
      "Vaccination Record"
    ],

    "Jan Aadhaar": [
      "Jan Aadhaar Card",
      "Family Details",
      "Member Certificate"
    ],

    SSO: [
      "SSO Profile",
      "Linked Services",
      "Authentication Record"
    ],

    Other: [
      "Misc Certificate",
      "Verification Document"
    ]
  };

  const docs =
    documentMap[selectedDepartment] || [];

  return (
    <div className="dashboard-section">

      <h2 className="dashboard-section-title">
        Document Types
      </h2>

      <div className="doc-types">

        {docs.map((item) => (

          <button
            key={item}
            onClick={() =>
              setSelectedDocumentType(item)
            }
            className={
              selectedDocumentType === item
                ? "doc-type active"
                : "doc-type"
            }
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
}

export default DocumentTypes;