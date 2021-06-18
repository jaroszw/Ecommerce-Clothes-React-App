import React, { useEffect, lazy, Suspense } from "react";
import { Route, withRouter } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";

//Thunk and Redux
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

//Components
// import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import CollectionPageContainer from "../collection/collection.container";

import { ShopPageContainer } from "./shop-page.styles";
import Spinner from "../../components/spinner/spinner.component";

const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
};

export default withRouter(ShopPage);
