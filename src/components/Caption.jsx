import React from 'react';

const Caption = () => {
    return (
        <div className="backdrop-blur-3xl backdrop-brightness-125 md:backdrop-filter-none block absolute bottom-0 md:bottom-auto md:mt-24 z-10 pl-3 lg:pl-20 text-ellipsis col-span-2 min-h-[20px] uppercase font-hero text-center tracking-wide w-full md:w-auto">
            <svg
                width="154"
                height="50"
                viewBox="0 0 154 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:block mx-auto"
            >
                <path
                    d="M33.5977 21.9678H118.763V27.1521H33.5977V21.9678Z"
                    fill="black"
                />
                <path
                    d="M18.637 38.0204C18.637 40.4141 16.666 42.3467 14.2282 42.3467C11.7961 42.3467 9.81641 40.4141 9.81641 38.0204V11.1086C9.81641 8.71962 11.7979 6.78809 14.2282 6.78809C16.666 6.78809 18.637 8.7207 18.637 11.1086V38.0204Z"
                    fill="#e11d48"
                />
                <path
                    d="M30.4241 43.1465C30.4241 46.4586 28.4474 49.1333 26.0153 49.1333C23.5746 49.1333 21.6035 46.4588 21.6035 43.1465V5.98386C21.6035 2.67744 23.5774 0 26.0153 0C28.4474 0 30.4241 2.67744 30.4241 5.98386V43.1465Z"
                    fill="black"
                />
                <path
                    d="M135.563 38.0204C135.563 40.4141 137.534 42.3467 139.972 42.3467C142.41 42.3467 144.381 40.4141 144.381 38.0204V11.1086C144.381 8.71962 142.41 6.78809 139.972 6.78809C137.534 6.78809 135.563 8.7207 135.563 11.1086V38.0204Z"
                    fill="#e11d48"
                />
                <path
                    d="M147.099 31.5007C147.099 32.8732 148.618 33.9813 150.497 33.9813C152.376 33.9813 153.895 32.8732 153.895 31.5007V16.07C153.895 14.7003 152.376 13.5928 150.497 13.5928C148.618 13.5928 147.099 14.7009 147.099 16.07V31.5007Z"
                    fill="black"
                />
                <path
                    d="M0.301758 31.5007C0.301758 32.8732 1.82087 33.9813 3.69985 33.9813C5.5788 33.9813 7.09794 32.8732 7.09794 31.5007V16.07C7.09794 14.7003 5.57884 13.5928 3.69985 13.5928C1.82091 13.5928 0.301758 14.7009 0.301758 16.07V31.5007Z"
                    fill="black"
                />
                <path
                    d="M123.776 43.1465C123.776 46.4586 125.753 49.1333 128.185 49.1333C130.628 49.1333 132.596 46.4588 132.596 43.1465V5.98386C132.596 2.67744 130.625 0 128.185 0C125.753 0 123.776 2.67744 123.776 5.98386V43.1465Z"
                    fill="black"
                />
            </svg>

            <h1 className="font-hero font-bold text-caption text-black">
                Natalia <br className="hidden md:block mdlg:hidden" /> Dziubek
            </h1>
            <h2 className="font-medium text-subcaption tracking-wide text-rose-600 mb-2 md:mb-auto">
                trener personalny
            </h2>
        </div>
    );
};

export default Caption;
