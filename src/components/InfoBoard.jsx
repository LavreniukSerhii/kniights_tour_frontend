import React, { useState } from 'react';
import '../css/InfoBoard.css';

const InfoBoard = ({ handleMethodUpdate,handleShowMethod }) => {
    const [isCheckedW, setIsCheckedW] = useState(false);
    const [isCheckedGA, setIsCheckedGA] = useState(false);
    const [show,setShow] =useState(null)

    const handleChangeW = () => {
        const newState = !isCheckedW;
        handleMethodUpdate({ warnsdorf: newState, genetic: isCheckedGA});
        setIsCheckedW(newState);
    };

    const handleChangeGA = () => {
        const newState = !isCheckedGA;
        handleMethodUpdate({ warnsdorf: isCheckedW, genetic: newState});
        setIsCheckedGA(newState);
    };

    const handleRadioChange = (event) => {
        setShow(event.target.id);
        handleShowMethod(event.target.id)
    };


    return (
        <div className="info-board">
            <div className="text-methods">Methods:</div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    checked={isCheckedW}
                    onChange={handleChangeW}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Warnsdorf's rule
                </label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    checked={isCheckedGA}
                    onChange={handleChangeGA}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Genetic approach
                </label>
            </div>


            <div className="text-methods">Show approach:</div>
            <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       name="flexRadioDefault"
                       id="warnsdorf"
                       onChange={handleRadioChange}
                />
                <label className="form-check-label">
                    Warnsdorf's rule
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       name="flexRadioDefault"
                       id="genetic"
                       onChange={handleRadioChange}
                />
                <label className="form-check-label">
                    Genetic approach
                </label>
            </div>
            <div className="text-methods">Stats:</div>

        </div>
    );
};

export default InfoBoard;
