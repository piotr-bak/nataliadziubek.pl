import React from 'react';

const Card = (props) => {
    return (
        <div className="w-[300px] h-[400px] mb-12 mx-4">
            <div
                className={`
                shadow
                m-auto
                rounded-full 
                w-24 h-24
                border-solid border-[7px]
                transition-all
                ${props.theme.border}
                ${props.theme.fill} 
                ${props.theme.highlight} 
                flex`}
            >
                <img
                    className={'m-auto'}
                    src={props.icon}
                    alt={props.name}
                ></img>
            </div>
            <h1 className="py-5 text-center font-bold text-h2-size">
                {props.name}
            </h1>
            <p className="text-center max-w-[23ch] mx-auto">
                {props.description}
            </p>
        </div>
    );
};

export default Card;
