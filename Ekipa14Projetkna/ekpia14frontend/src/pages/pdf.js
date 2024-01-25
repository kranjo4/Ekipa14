// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { useDropzone } from "react-dropzone";
// import { BlobProvider } from "react-pdf-viewer";
// import { pdf } from "react-pdf-viewer";

// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// const PDFGenerator = () => {
//   const [images, setImages] = useState([]);

//   const onDrop = (acceptedFiles) => {
//     // Add the uploaded images to the state
//     setImages((prevImages) => [...prevImages, ...acceptedFiles]);
//   };

//   const generatePDF = () => {
//     const renderedPDF = (
//       <Document>
//         {images.map((image, index) => (
//           <Page key={index} size="A4">
//             <img
//               src={URL.createObjectURL(image)}
//               alt={`Image ${index + 1}`}
//               style={{ width: "100%" }}
//             />
//           </Page>
//         ))}
//       </Document>
//     );

//     BlobProvider({ document: renderedPDF }).then(({ blob, url, loading, error }) => {
//       if (url) {
//         // You can use the URL for further actions (e.g., downloading)
//         console.log("Generated PDF URL:", url);
//       }
//     });
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: "image/*",
//     onDrop,
//   });

//   return (
//     <div>
//       {/* Dropzone for image upload */}
//       <div
//         {...getRootProps()}
//         style={{
//           marginBottom: "20px",
//           padding: "20px",
//           border: "1px dashed #ccc",
//         }}
//       >
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some images here, or click to select images</p>
//       </div>

//       {/* Display the uploaded images */}
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={URL.createObjectURL(image)}
//           alt={`Image ${index + 1}`}
//           style={{ width: "50%", marginBottom: "20px" }}
//         />
//       ))}

//       {/* PDF viewer with the uploaded images */}
//       <BlobProvider document={<Document>{images.map((image, index) => <Page key={index}><img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} style={{ width: "100%" }} /></Page>)}</Document>}>
//         {({ blob, url, loading, error }) => {
//           return (
//             <div>
//               <button onClick={generatePDF}>Generate PDF</button>
//               {url && <a href={url} download="generated.pdf">Download PDF</a>}
//             </div>
//           );
//         }}
//       </BlobProvider>
//     </div>
//   );
// };

// export default PDFGenerator;
