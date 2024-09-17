import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="seconds-counter">
            <FontAwesomeIcon icon={faClock} />
            <span>{seconds}</span>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
