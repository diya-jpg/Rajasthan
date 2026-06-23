import "./Documents.css";

import DocumentsHeader from "../../components/DocumentsHeader";
import DocumentsAlert from "../../components/DocumentsAlert";
import DocumentsFilters from "../../components/DocumentsFilters";
import DocumentsStats from "../../components/DocumentsStats";
import DocumentsTable from "../../components/DocumentsTable";

function Documents({ documents }) {
return ( <section className="documents-page">


  <DocumentsHeader />

  <DocumentsAlert />

  <DocumentsFilters />

  <DocumentsStats documents={documents} />

  <DocumentsTable documents={documents} />

</section>


);
}

export default Documents;
