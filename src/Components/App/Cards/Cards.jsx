import React from 'react';
import './Cards.css';

const Cards = ({ suggestedName }) => {
    const nameCheapUrl =
        'https://www.namecheap.com/domains/registration/results/?domain=';
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link"
            href={`${nameCheapUrl}${suggestedName}`}
        >
            <div className="result-card">
                <p className="result-cards">{suggestedName}</p>
            </div>
        </a>
    );
};

export default Cards;
