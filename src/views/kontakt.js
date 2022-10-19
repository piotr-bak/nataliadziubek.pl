import React from "react";
import Contact from "../components/Contact";

const Kontakt = () => {
    return (
        <div className="font-main bg-gradient-to-t md:bg-gradient-to-tl from-[hsla(209,69%,83%,1)] via-[hsla(0,16%,80%,.4)] to-[hsla(0,0%,100%,.4)]">
            <section className="container text-ellipsis pt-24 pb-16">
                <div className="text-mobile-p-size md:text-p-size max-w-[75ch]"></div>
                <div className="px-12 md:px-0 md:mx-16 mb-10 pb-10">
                    <h1 className="text-mobile-h1-size md:text-h1-size font-bold mb-10">
                        Napisz do mnie już dziś!
                    </h1>
                    <p className="text-mobile-h2-size md:text-h2-size pb-16">
                        Umówmy się na konsultacje - i do roboty!
                    </p>
                    <Contact />
                    <h1 className="text-mobile-h1-size md:text-h1-size pt-16 pb-8 font-medium">
                        Gdzie się spotkamy?
                    </h1>
                    <p className="text-mobile-h2-size md:text-h2-size">
                        FENIX TRAINING
                        <br />
                        Ul. Śląska 35/37
                        <br />
                        budynek B<br />
                        81-314 Gdynia
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Kontakt;
