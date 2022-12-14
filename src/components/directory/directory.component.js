import React from 'react';

import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import selectDirectorySections from '../../redux/directory/directory.selectors'

const Directory = ({ sections }) => {

    return (
        <div className='directory-menu'>
            {sections.map(ele => (<MenuItem section={ele} />))}
        </div>
    )


}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)