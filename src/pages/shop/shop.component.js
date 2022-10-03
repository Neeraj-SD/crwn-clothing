import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { selectShopCollections } from '../../redux/shop/shop.selectors'

const ShopPage = ({ collection }) => {
    console.log('collection' + collection)
    return (
        <div className='shop-page'>
            < CollectionsOverview />
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    collection: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage)