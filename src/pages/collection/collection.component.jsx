import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionContext from "../../context/collections/colections.context";

const CollectionPage = ({ match }) => {
  return (
    <CollectionContext.Consumer>
      {(collections) => {
        const collection = collections[match.params.collectionId];
        const { title, items } = collection;

        return (
          <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      }}
    </CollectionContext.Consumer>
  );
};

export default CollectionPage;