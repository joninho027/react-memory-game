import PropTypes from 'prop-types'
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({card, feedback, index, onClick}) => (
    <div className={`card ${feedback}`} onClick={ () => onClick(index) }>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    feedback: PropTypes.oneOf([
        'visible',
        'hidden',
        'justMatched',
        'justMismatched'
    ])
}

export default Card