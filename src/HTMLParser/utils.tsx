// Function to convert HTML string to PDF using jsPDF library

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const convertToPDF = async (html: string, data: any, setError: (err: string) => void) => {
  try {
    const response = await fetch(`${baseUrl}/utils/pdf/generate-pdf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html,
        data,
      }),
    });
    const res = await response.json();
    if (!res.error) {
      var binary = atob(res.data.replace(/\s/g, ""));
      var len = binary.length;
      var buffer = new ArrayBuffer(len);
      var view = new Uint8Array(buffer);
      for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
      }
      const url = URL.createObjectURL(
        new Blob([view], { type: "application/pdf" })
      );
      return url;
    } else {
        setError(res.error)
    }
  } catch (e) {
    console.log("fetch failed", e);
  }
};
