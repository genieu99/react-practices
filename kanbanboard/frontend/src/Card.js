import React, {useState} from 'react';
import * as CardStyles from './assets/scss/Card.scss';

function Card ({no, title, description}) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={CardStyles.Card}>
            <div
                className={isOpen ? CardStyles.Card_Title : CardStyles.Card_Title_open}
                onClick={() => setIsOpen(!isOpen)}>
                {title}
            </div>
            {isOpen && (
                <div>
                    {description}
                </div>
            )}
        </div>
    );
}

export default Card;