export const getDocumentsApi =
  async () => {

    const memberId =
      sessionStorage.getItem(
        "memberId"
      );

    const aadhaarRefNo =
      sessionStorage.getItem(
        "aadharRefNo"
      );
console.log("REQUEST BODY", {
  memberId,
  aadhaarRefNo
});
    const response =
      await fetch(
        "http://10.68.124.123:9091/allDocument",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            memberId,
            aadhaarRefNo
          })
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch documents"
      );
    }

    return response.json();
  };