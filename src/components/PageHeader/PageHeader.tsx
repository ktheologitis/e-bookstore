import React from "react";
import "./page-header.scss";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <header className="page-header">
      <p>{title}</p>
    </header>
  );
};

export default React.memo(PageHeader);
