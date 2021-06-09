import React, { useContext } from 'react';
import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

// Redux and selectors
import { selectCollection } from '../../redux/shop/shop.selector';
// import { connect } from 'react-redux';
import CollectionContext from '../../context/collections/colections.context';

const CollectionPage = ({ match }) => {
  // const { title, items } = collection;
  // const collectionCtx = useContext(CollectionContext);
  // console.log(collectionCtx);

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

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

export default CollectionPage;
