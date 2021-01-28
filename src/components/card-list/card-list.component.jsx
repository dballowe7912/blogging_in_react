import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.scss';

class CardList extends React.Component {
    render() {
        return (
            <div className='card-list'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        )
    }
}

export default CardList;