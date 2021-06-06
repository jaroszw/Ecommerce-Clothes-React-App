import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

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

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    //Using Firebase REST API
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/ecommerceclth/databases/(default)/documents/collections'
    // )
    //   .then((resposne) => resposne.json())
    //   .then((data) => console.log(data));

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collection) => dispatch(updateCollections(collection)),
});

export default connect(null, mapDispatchToProps)(withRouter(ShopPage));
