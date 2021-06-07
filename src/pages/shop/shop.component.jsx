import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

//Redux
import { connect } from "react-redux";

//Thunk and Redux
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

//Components
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(withRouter(ShopPage));
