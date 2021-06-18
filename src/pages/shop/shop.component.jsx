import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";

//Thunk and Redux
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

//Components
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { ShopPageContainer } from "./shop-page.styles";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  );
};

export default withRouter(ShopPage);
