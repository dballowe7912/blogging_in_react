import React from 'react';
import './card.styles.scss'

class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <h3>Title goes Here</h3>
                <h5>Subtitle text goes here</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem nulla repudiandae, ut modi, distinctio fugit corrupti ipsum, quisquam debitis maxime quos iusto architecto illum dignissimos! Pariatur adipisci excepturi id?</p>
            </div>
        )
    }
}

export default Card;