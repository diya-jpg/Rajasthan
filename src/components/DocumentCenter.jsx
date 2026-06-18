import { useState, useEffect } from "react";
import "./DocumentCenter.css";

import {
  FiFileText,
  FiEye,
  FiDownload,
  FiShare2,
  FiMoreVertical
} from "react-icons/fi";

function DocumentCenter({ selectedDepartment }) {

  const documentData = {

    Education: {
      types: [
        "10th Marksheet",
        "12th Marksheet",
        "Bonafide Certificate",
        "Migration Certificate",
        "Character Certificate"
      ],

      rows: [
        {
          name: "12th Marksheet - RBSE",
          issuer: "Board of Secondary Education Rajasthan",
          type: "12th Marksheet",
          date: "12 May 2026"
        },
        {
          name: "10th Marksheet - RBSE",
          issuer: "Board of Secondary Education Rajasthan",
          type: "10th Marksheet",
          date: "10 May 2026"
        },
        {
          name: "Bonafide Certificate",
          issuer: "Education Department Rajasthan",
          type: "Bonafide Certificate",
          date: "18 Apr 2026"
        }
      ]
    },

    Transport: {
      types: [
        "Driving License",
        "Vehicle RC",
        "Fitness Certificate"
      ],

      rows: [
        {
          name: "Driving License",
          issuer: "Transport Department",
          type: "Driving License",
          date: "08 Jun 2026"
        },
        {
          name: "Vehicle RC",
          issuer: "Transport Department",
          type: "Vehicle RC",
          date: "05 Jun 2026"
        }
      ]
    },

    Revenue: {
      types: [
        "Jamabandi",
        "Khata Copy",
        "Mutation Record"
      ],

      rows: [
        {
          name: "Jamabandi Copy",
          issuer: "Revenue Department",
          type: "Jamabandi",
          date: "15 May 2026"
        },
        {
          name: "Khata Copy",
          issuer: "Revenue Department",
          type: "Khata Copy",
          date: "10 May 2026"
        }
      ]
    }
  };

  const current =
    documentData[selectedDepartment] ||
    documentData["Education"];

  const [selectedType, setSelectedType] =
    useState("All");

  useEffect(() => {
    setSelectedType("All");
  }, [selectedDepartment]);

  const filteredRows =
    selectedType === "All"
      ? current.rows
      : current.rows.filter(
          (doc) => doc.type === selectedType
        );

  return (
    <div className="document-center">

      <div className="document-center-header">

        <h2>
          Documents
          <span>
            {selectedDepartment}
          </span>
        </h2>

      </div>

      <div className="doc-types">

        <button
          className={
            selectedType === "All"
              ? "doc-type active"
              : "doc-type"
          }
          onClick={() =>
            setSelectedType("All")
          }
        >
          All
        </button>

        {current.types.map((type) => (

          <button
            key={type}
            className={
              selectedType === type
                ? "doc-type active"
                : "doc-type"
            }
            onClick={() =>
              setSelectedType(type)
            }
          >
            {type}
          </button>

        ))}

      </div>

      <div className="documents-table">

        <div className="table-header">

          <div>Document</div>
          <div>Department</div>
          <div>Type</div>
          <div>Date</div>
          <div>Actions</div>

        </div>

        {filteredRows.map((doc, index) => (

          <div
            key={index}
            className="table-row"
          >

            <div className="document-info">

              <div className="document-icon">
                <FiFileText />
              </div>

              <div>

                <h4>{doc.name}</h4>

                <p>{doc.issuer}</p>

              </div>

            </div>

            <div>
              <span className="dept-badge">
                {selectedDepartment}
              </span>
            </div>

            <div>{doc.type}</div>

            <div>{doc.date}</div>

            <div className="table-actions">

              <button>
                <FiEye />
              </button>

              <button>
                <FiDownload />
              </button>

              <button>
                <FiShare2 />
              </button>

              <button>
                <FiMoreVertical />
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default DocumentCenter;