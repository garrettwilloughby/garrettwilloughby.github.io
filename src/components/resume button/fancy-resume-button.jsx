import React from 'react';

function Resume() {
    const onButtonClick = () => {
        const pdfUrl = "/garrett_willoughby_resume.pdf";
        window.open(pdfUrl, "_blank");
        const link = document.createElement("a");
        link.href = pdfUrl;
        //link.download = "garrett_willoughby_resume.pdf"; maybe not force them to download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <div>
      <div className="button-resume" onClick={onButtonClick}>
        <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', zIndex: 1000}}>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;