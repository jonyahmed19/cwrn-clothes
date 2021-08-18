import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collectionItem.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="preview">
        {items
          .filter((item, ind) => ind < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
