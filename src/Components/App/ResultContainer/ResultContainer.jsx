import React from 'react';
import './ResultContainer.css';
import Cards from '../Cards/Cards';

const ResultContainer = ({ suggestedNames }) => {
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <Cards key={suggestedName} suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestedNameJsx}</div>;
};

export default ResultContainer;
