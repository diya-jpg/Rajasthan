import "./DocumentsAlert.css";

function DocumentsAlert() {
return ( <div className="documents-alert">


  <span className="alert-icon">
    ✓
  </span>

  <div>
    <strong>
      Last sync completed successfully
    </strong>

    <p>
      2 new documents were added from DigiLocker.
    </p>
  </div>

</div>

);
}

export default DocumentsAlert;
