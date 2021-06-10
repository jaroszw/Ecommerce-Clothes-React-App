import { createContext } from 'react';
import SHOP_DATA from '../../pages/shop/shop.data';

const CollectionContext = createContext(SHOP_DATA);

export default CollectionContext;
