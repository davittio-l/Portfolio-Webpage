
function openPdf(pdfUrl) {
    document.getElementById("pdf-frame").src = pdfUrl;
    document.getElementById("pdf-modal").style.display = "block";
  }

  function closePdf() {
    document.getElementById("pdf-frame").src = "";
    document.getElementById("pdf-modal").style.display = "none";
  }

