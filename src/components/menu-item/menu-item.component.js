import React from 'react';
import { useNavigate } from 'react-router'

import './menu-item.styles.scss'

const MenuItem = ({ section }) => {

    const navigate = useNavigate();

    const onTap = () => {
        navigate('/hats')
    }

    const styles = {
        backgroundImage: `url(${section.imageUrl})`
    }

    return (
        <div className={`${section.size} menu-item`} onClick={onTap} >
            <div className='background-image' style={styles}></div>
            <div className='content'  >
                <h1 className='title'>{section.title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem