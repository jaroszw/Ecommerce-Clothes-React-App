import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './shop.styles.scss';

//Firebase utils
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

//Redux
import { connect } from 'react-redux';

//Components
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${this.props.match.path}`}
          component={CollectionOverview}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collection) => dispatch(updateCollections(collection)),
});

export default connect(null, mapDispatchToProps)(withRouter(ShopPage));
