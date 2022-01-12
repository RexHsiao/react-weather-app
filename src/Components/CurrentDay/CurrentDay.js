import React from 'react';
import PropTypes from 'prop-types';
import locationIcon from './assets/location-pin.png';
import './CurrentDay.scss';

const CurrentDay = ({ 
    weekday, 
    date, 
    location, 
    temperature, 
    weatherIcon, 
    weatherDescription}) => (
    <div className="currentDayCard">
        <div className="img"></div>
        <div className="gradient"></div>
        <div className="cardInner d-flex flex-column justify-content-between pt-3 pb-2 pl-2">
            <div>
                <h2 className="font-weight-bold mb-1">{weekday}</h2>
                <p className="mb-0">{date}</p>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                    <img width="15" height="15" src={locationIcon} className="mr-1" alt="location pin icon" />
                    <span>{location}</span>
                </p>
            </div>
            <div>
                <img width="45" src={weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired, 
    date: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    temperature: PropTypes.number.isRequired, 
    weatherIcon: PropTypes.string.isRequired, 
    weatherDescription: PropTypes.string.isRequired,
}

export default CurrentDay;