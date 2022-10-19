import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../images/icons/arrow.svg";
import TrainingTabs from "../components/TrainingTabs";

const Oferta = () => {
    return (
        <div className="bg-gradient-to-t md:bg-gradient-to-tl from-[hsla(209,69%,83%,1)] via-[hsla(0,16%,80%,.4)] to-[hsla(0,0%,100%,.4)]">
            <div className="container font-main">
                <section>
                    <div
                        className="max-w-[58ch] lg:max-w-prose text-mobile-p-size md:text-p-size
                    px-12 md:px-0 md:mx-16 lg:mb-10 pt-24"
                    >
                        <h1 className="text-mobile-h1-size md:text-h1-size font-medium mb-10">
                            Czego potrzebujesz?
                        </h1>
                        <p>
                            Mogę zaoferować Ci jeden z 4 planów treningowych.
                            Plan spersonalizujemy, dostosowując go do Twoich
                            indywidualnych potrzeb oraz ambicji i celów, które
                            zamierzasz osiągnąć. Czego potrzebujesz?
                        </p>
                    </div>
                    <div className="mx-12 lg:mx-16">
                        <TrainingTabs />
                    </div>
                </section>
                <section>
                    <div
                        className="max-w-[58ch] lg:max-w-prose text-mobile-p-size md:text-p-size
                    px-12 md:px-0 md:mx-12 pb-36 pt-12 lg:pt-24"
                    >
                        <h1 className="text-mobile-h1-size md:text-h1-size mb-10 font-medium pt-12">
                            Ile to kosztuje?
                        </h1>
                        <p className="pb-10">
                            Ceny za treningi pod moim okiem kształtują się
                            następująco:
                        </p>
                        <section className="">
                            <h2 className="text-mobile-p-size md:text-p-size py-4 font-medium inline pb-12">
                                <img
                                    src={Arrow}
                                    aria-hidden="true"
                                    className="inline whitespace-nowrap pr-4 scale-75"
                                />
                                Pojedynczy trening personalny:{" "}
                                <span className="text-rose-700">169zł</span>
                            </h2>
                            <h2 className="text-mobile-p-size md:text-p-size pt-8 pb-4 font-medium">
                                <img
                                    src={Arrow}
                                    aria-hidden="true"
                                    className="inline whitespace-nowrap pr-4 scale-75"
                                />
                                Pakiety miesięczne:
                            </h2>
                            <ul className="list-disc ml-20 md:ml-28 text-mobile-offer-size md:text-offer-size">
                                <li className="pb-1">
                                    pakiet 4 treningów:{" "}
                                    <span className="text-rose-700 font-medium">
                                        649zł
                                    </span>
                                </li>
                                <li className="pb-1">
                                    pakiet 8 treningów:{" "}
                                    <span className="text-rose-700 font-medium">
                                        1040zł
                                    </span>
                                </li>
                                <li>
                                    pakiet 12 treningów:{" "}
                                    <span className="text-rose-700 font-medium">
                                        1440zł
                                    </span>
                                </li>
                            </ul>
                            <h2 className="text-mobile-p-size md:text-p-size pt-8 pb-4 font-medium">
                                <img
                                    src={Arrow}
                                    aria-hidden="true"
                                    className="inline whitespace-nowrap pr-4 scale-75"
                                />
                                Trening dla dwóch osób:
                            </h2>
                            <ul className="list-disc ml-20 md:ml-28 text-mobile-offer-size md:text-offer-size">
                                <li className="pb-1">
                                    pojedyńczy trening:{" "}
                                    <span className="text-rose-700 font-medium">
                                        200zł
                                    </span>
                                </li>
                                <li>
                                    pakiet 8 treningów:{" "}
                                    <span className="text-rose-700 font-medium">
                                        1200zł
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section>
                    <div className="h-[20rem] relative">
                        <Link to="/kontakt">
                            <button
                                type="button"
                                className="shadow rounded-md bg-black text-center font-medium text-white text-p-size absolute h-[72px] w-72 m-auto inset-0 hover:bg-rose-700 transition-all"
                            >
                                {" "}
                                skontaktuj się {">>"}
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Oferta;
