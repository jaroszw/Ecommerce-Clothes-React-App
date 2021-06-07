import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

//Firebase utils
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

//Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Thunk and Redux
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";

//Components
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPage from "../collection/collection.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
    console.log("SHOP");
  }

  render() {
    const { match, selectIsCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!selectIsCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  selectIsCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ShopPage));
