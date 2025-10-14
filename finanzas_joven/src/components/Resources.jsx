// src/components/ResourceCard.jsx
import React from "react";

function ResourceCard({ title, description, linkText, linkHref, secondaryLink, secondaryHref }) {
  return (
    <article className="content-card card p-4 bg-white rounded shadow">
      <div className="card-head mb-2">
        <h3 className="card-title font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex gap-2">
        {linkText && <a href={linkHref} className="btn btn-primary py-1 px-3 bg-purple-700 text-white rounded">{linkText}</a>}
        {secondaryLink && <a href={secondaryHref} className="btn btn-secondary py-1 px-3 border rounded">{secondaryLink}</a>}
      </div>
    </article>
  );
}

export default ResourceCard;
