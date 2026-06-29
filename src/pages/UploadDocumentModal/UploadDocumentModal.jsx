import "./UploadDocumentModal.css";
import { useState ,useEffect} from "react";
import { FiX } from "react-icons/fi";
import {
  getDocumentTypes,
   getDocumentMetadata
}
from "../../services/uploadDocumentService";
function UploadDocumentModal({ onClose }) {

  const [documentTypes, setDocumentTypes] =
  useState([]);

const [documentType, setDocumentType] =
  useState("");

const [applicationNo, setApplicationNo] =
  useState("");

const [verificationStatus, setVerificationStatus] =
  useState("idle");
  const [fieldData, setFieldData] =
useState(null);
useEffect(() => {

  loadDocumentTypes();

}, []);
const handleDocumentChange =
async (e)=>{

const docTypeId =
e.target.value;

setDocumentType(docTypeId);

if(!docTypeId){

setFieldData(null);

return;

}

try{

const response =
await getDocumentMetadata(
docTypeId
);

console.log(response);

setFieldData(response);

}

catch(error){
                                                                                                           
console.error(error);

}

};
const loadDocumentTypes =
async () => {

  try{

    const data =
      await getDocumentTypes();

    console.log(data);

    setDocumentTypes(data);

  }

  catch(error){

    console.error(error);

  }

};
  return (

    <div className="upload-modal-overlay">

      <div className="upload-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <FiX />
        </button>

        <h2>
          Upload Personal Document
        </h2>

        <p className="subtitle">
          Verify from government repository first.
          If not found, upload your supporting
          document manually.
        </p>

        <div className="stepper">

          <div className="step active">

            <span>1</span>

            <p>Verify in Repository</p>

          </div>

          <div className="step-line"></div>

          <div className="step">

            <span>2</span>

            <p>Upload if not found</p>

          </div>

        </div>

        <p className="info-text">

          We will check this number in connected
          government repositories to validate and
          fetch your document automatically.

        </p>

      <div className="form-group">

  <label>

    Document Type

  </label>

  <select

    value={documentType}
onChange={handleDocumentChange}
  >

    <option value="">

      Select Document

    </option>

 
 
   {documentTypes.map((doc) => (

      <option
        key={doc.docTypeId}
        value={doc.docTypeId}
      >
        {doc.docTypeName}
      </option>

    ))}

  </select>

</div>
         

   {fieldData?.responseCode === "EVAPPINFOMSG" ||fieldData?.responseCode === "EVAPP052"? (

<button
className="verify-btn">

Send OTP

</button>

) : (

<div className="form-group">

<label>

{fieldData?.txnId}

</label>

<input

type="text"

placeholder={
fieldData?.transactionId
}

/>

</div>

)}

        <p className="department">

          Issuing Department :

          <strong>

            Revenue Department,
            Rajasthan

          </strong>

        </p>

        {verificationStatus === "found" && (

          <div className="success-box">

            <h3>

              ✔ Document Found

            </h3>

            <p>

              Document verified successfully.

            </p>

          </div>

        )}

        {verificationStatus === "notFound" && (

          <div className="error-box">

            <h3>

              Document Not Found

            </h3>

            <p>

              We couldn't find this
              document in the repository.

            </p>

          </div>

        )}

        <div className="modal-buttons">

          <button

            className="cancel-btn"

            onClick={onClose}

          >

            Cancel

          </button>

          <button

            className="verify-btn"

            onClick={()=>

              setVerificationStatus(
                "found"
              )

            }

          >

            Verify Document

          </button>

        </div>

      </div>

    </div>

  );

}

export default UploadDocumentModal;