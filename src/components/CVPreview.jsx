import jsPDF from "jspdf";
function generatePDF() {
 const doc = new jsPDF();
 doc.text("Curriculum Vitae", 10, 10);
 // Añadir más detalles...
 doc.save("cv.pdf");
}