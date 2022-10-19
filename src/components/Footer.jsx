import React from 'react';

/*Icons by Font Awesome - fontawesome.com */
const Footer = () => {
    return (
        <footer className="bg-[hsl(0,0%,0%)] flex flex-col content-center text-mobile-small-size md:text-small-size text-center md:text-left">
            <div className="my-auto mx-auto md:divide-x divide-white/90 pt-12 mb-12 flex flex-col md:flex-row font-main text-white/90">
                <div className="px-12 pb-6 md:pb-0">
                    <p>
                        FENIX TRAINING <br />
                        Ul. Śląska 35/37 budynek B<br />
                        81-314 Gdynia
                    </p>
                </div>
                <div className="px-12 flex pb-6 md:pb-0 items-center hover:text-rose-600 transition-all">
                    <a href="mailto:kontakt@nataliadziubek.pl">
                        kontakt@nataliadziubek.pl
                    </a>
                </div>
                <div className="flex flex-row items-center md:px-12 mx-auto">
                    <a
                        className="justify-self-start pt-2 md:pt-0 pr-6 md:pr-3 md:pl-6"
                        href="https://www.instagram.com/dziubek_natalia/"
                        rel="noreferrer"
                        target="_blank"
                        alt="Profil na Instagramie"
                    >
                        <svg
                            width="32"
                            height="32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-white/90 hover:fill-rose-600 transition-all scale-150 md:scale-100"
                            viewBox="0 0 448 512"
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>
                    <a
                        className="justify-self-center pt-2 md:pt-0 pl-6 md:pl-3"
                        href="https://www.facebook.com/dziubekcoach"
                        rel="noreferrer"
                        target="_blank"
                        alt="Profil na Facebooku"
                    >
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-white/90 hover:fill-rose-600 transition-all scale-150 md:scale-100"
                        >
                            <path d="M11.8088 9.97148V11.8666H10.3223V14.1828H11.8088V21.0682H14.8646V14.1828H16.9145C16.9145 14.1828 17.1077 13.0722 17.2006 11.8569H14.8764V10.2743C14.8764 10.0362 15.2097 9.71824 15.54 9.71824H17.2036V7.30566H14.9398C11.7336 7.30566 11.8088 9.62466 11.8088 9.97148Z" />
                            <path d="M5.50503 3.17634C4.77502 3.17634 4.07491 3.46634 3.55871 3.98254C3.04251 4.49873 2.75252 5.19885 2.75252 5.92886V22.444C2.75252 23.174 3.04251 23.8741 3.55871 24.3903C4.07491 24.9065 4.77502 25.1965 5.50503 25.1965H22.0201C22.7501 25.1965 23.4503 24.9065 23.9664 24.3903C24.4826 23.8741 24.7726 23.174 24.7726 22.444V5.92886C24.7726 5.19885 24.4826 4.49873 23.9664 3.98254C23.4503 3.46634 22.7501 3.17634 22.0201 3.17634H5.50503ZM5.50503 0.423828H22.0201C23.4802 0.423828 24.8804 1.00382 25.9128 2.03621C26.9452 3.06861 27.5252 4.46883 27.5252 5.92886V22.444C27.5252 23.904 26.9452 25.3042 25.9128 26.3366C24.8804 27.369 23.4802 27.949 22.0201 27.949H5.50503C4.04501 27.949 2.64478 27.369 1.61239 26.3366C0.579993 25.3042 0 23.904 0 22.444V5.92886C0 4.46883 0.579993 3.06861 1.61239 2.03621C2.64478 1.00382 4.04501 0.423828 5.50503 0.423828V0.423828Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
