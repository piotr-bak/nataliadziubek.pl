import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../images/icons/arrow.svg";
import ArrowBowed from "../images/icons/arrow-bowed.svg";
import Card from "../components/Card";
import configFile from "../data/data-cards.json";
import iconStep1 from "../images/icons/step1.svg";
import iconStep2 from "../images/icons/step2.svg";
import iconStep3 from "../images/icons/step3.svg";
import iconStep4 from "../images/icons/step4.svg";
import iconStep5 from "../images/icons/step5.svg";

const config = JSON.parse(JSON.stringify(configFile));

const Wspolpraca = () => {
    return (
        <div className="font-main overflow-hidden">
            <div className="bg-gradient-to-t md:bg-gradient-to-tl from-[hsla(209,69%,83%,1)] via-[hsla(0,16%,80%,.4)] to-[hsla(0,0%,100%,.4)]">
                <section>
                    <div className="container text-ellipsis pt-24">
                        <div className="text-mobile-p-size md:text-p-size">
                            <div className="px-12 md:px-0 md:mx-16 mb-10 pb-10">
                                <div className="max-w-[58ch] lg:max-w-prose">
                                    <h1 className="text-mobile-h1-size md:text-h1-size font-medium mb-10">
                                        Co mogę Ci zaoferować?
                                    </h1>
                                    <p className="mb-6">
                                        Uwielbiam pomagać ludziom w budowaniu
                                        nowych, zdrowszych nawyków i bacznie
                                        czuwać nad efektami współpracy.
                                        Pamiętam, że to trening ma być dla
                                        Ciebie, a nie Ty dla treningu, dlatego
                                        wszystkie ćwiczenia dobieram
                                        indywidualnie.
                                    </p>
                                    <p className="mb-6">
                                        Nie będzie tłumów, ani rozpraszaczy. To
                                        zdecydowana zaleta kameralnego studio.
                                        Wiem, że to ważne, szczególnie na
                                        początku. To miejsce, w którym możesz
                                        poczuć się komfortowo, „zrzucić” stres z
                                        całego dnia i skupić się tylko na sobie.
                                    </p>
                                    <p>
                                        Na bieżąco będziemy sprawdzać, czy
                                        zbliżamy się do wyznaczonych celów. Nie
                                        ma się czego obawiać. Zrobimy kilka
                                        pomiarów, przeanalizujemy wyniki i -
                                        mamy to!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container text-ellipsis pt-24 pb-10">
                    <div className="md:px-0 mb-10 pb-10">
                        <h1 className="text-mobile-h1-size md:text-h1-size font-medium px-12 md:px-0 md:mx-16 mb-6">
                            Jak wygląda pierwsze spotkanie?
                        </h1>
                    </div>
                    <div className="justify-center flex px-12 flex-wrap items-baseline">
                        <Card
                            name={config.step1.name}
                            description={config.step1.description}
                            icon={iconStep1}
                            theme={config.step1.theme}
                        />
                        <img
                            src={ArrowBowed}
                            alt="arrow element"
                            className="hidden 2xl:block"
                        />
                        <Card
                            name={config.step2.name}
                            description={config.step2.description}
                            icon={iconStep2}
                            theme={config.step2.theme}
                        />
                        <img
                            src={ArrowBowed}
                            alt="arrow element"
                            className="hidden 2xl:block"
                        />
                        <Card
                            name={config.step3.name}
                            description={config.step3.description}
                            icon={iconStep3}
                            theme={config.step3.theme}
                        />
                        <Card
                            name={config.step4.name}
                            description={config.step4.description}
                            icon={iconStep4}
                            theme={config.step4.theme}
                        />
                        <img
                            src={ArrowBowed}
                            alt="arrow element"
                            className="hidden 2xl:block"
                        />
                        <Card
                            name={config.step5.name}
                            description={config.step5.description}
                            icon={iconStep5}
                            theme={config.step5.theme}
                        />
                    </div>
                </section>
                <section className="container pt-24 pb-12">
                    <div className="text-mobile-p-size md:text-p-size max-w-prose">
                        <h1 className="text-mobile-h1-size md:text-h1-size font-medium text-left pt-6 pb-6 md:pb-0 px-12 md:px-0 md:mx-16 mb-6">
                            Czego Cię nauczę?
                        </h1>
                        <section className="ml-16 p-12 md:ml-36 md:p-0">
                            <h1 className="text-mobile-h2-size md:text-h2-size font-medium mt-8 py-4 text-rose-700">
                                <img
                                    src={Arrow}
                                    className="inline pr-6 -ml-16 scale-75"
                                ></img>
                                Zdrowego podejścia do aktywności fizycznej{" "}
                            </h1>
                            <p className="text-mobile-small-size md:text-small-size">
                                Niezależnie od tego, jaki masz obecnie cel
                                treningowy, pamiętaj, że nic nie dzieje się z
                                dnia na dzień. To proces, który trwa, a kluczem
                                jest systematyczność. Pomogę Ci odnaleźć
                                przyjemność w regularnym treningu.
                            </p>
                            <h1 className="text-mobile-h2-size md:text-h2-size font-medium mt-8 py-4 text-rose-700">
                                <img
                                    src={Arrow}
                                    className="inline pr-6 -ml-16 scale-75"
                                ></img>
                                Budowania relacji ze swoim ciałem
                            </h1>
                            <p className="text-mobile-small-size md:text-small-size">
                                Na co dzień dużo od niego wymagamy, czasem
                                jesteśmy zbyt surowi. Podczas treningów, będę
                                chciała Ci pokazać, że zdrowie to nie tylko
                                smukła sylwetka.
                            </p>
                            <h1 className="text-mobile-h2-size md:text-h2-size font-medium mt-8 py-4 text-rose-700">
                                <img
                                    src={Arrow}
                                    className="inline pr-6 -ml-16 scale-75"
                                ></img>
                                Wprowadzania nowych nawyków
                            </h1>
                            <p className="text-mobile-small-size md:text-small-size">
                                Trening to tylko jedna ze składowych. Podpowiem
                                Ci, co możesz zmienić lub poprawić, żeby Twoje
                                samopoczucie i wyniki były lepsze. Zobaczysz,
                                jak szybko małe zmiany przełożą się nie tylko na
                                efektywność na sali treningowej, ale też na
                                codzienne życie.
                            </p>
                        </section>
                    </div>
                </section>
                <section>
                    <div className="h-[20rem] relative">
                        <Link to="/oferta">
                            <button
                                type="button"
                                className="shadow rounded-md bg-black text-center font-medium text-white text-p-size absolute h-[72px] w-72 m-auto inset-0 hover:bg-rose-700 transition-all"
                            >
                                {" "}
                                zacznij już dziś {">>"}
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Wspolpraca;
