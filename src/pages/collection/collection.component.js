import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import collectionItem from '../../components/collection-preview/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'

const CollectionPage = (props) => {

    const { collectionId } = useParams()
    console.log(props)
    return (
        <div className='category'>
            <h2>CATEGORY</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return ({
        collection: selectCollection(state.collectionId)
    })
}

export default connect(mapStateToProps)(CollectionPage) 