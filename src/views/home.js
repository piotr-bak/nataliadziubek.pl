import React from "react";
import { Link } from "react-router-dom";
import CarouselCertificates from "../components/CarouselCertificates";
import CarouselReviews from "../components/CarouselReviews";

const Home = () => {
    return (
        <div className="font-main bg-gradient-to-t md:bg-gradient-to-tl from-[hsla(209,69%,83%,1)] via-[hsla(0,16%,80%,.4)] to-[hsla(0,0%,100%,.4)]">
            <section className="">
                <div className="container text-mobile-p-size md:text-p-size text-ellipsis pt-24 pb-10">
                    <div className="px-12 md:px-0 md:mx-16 mb-10 pb-10">
                        <div className="max-w-[58ch] lg:max-w-prose">
                            <h1 className="text-mobile-h1-size md:text-h1-size font-medium mb-10">
                                Cześć, jestem Natalia.
                            </h1>
                            <p className="mb-6">
                                Moją misją jest promowanie aktywności fizycznej
                                oraz budowanie świadomości ciała – tego jak z
                                nim pracować, aby mieć więcej energii i stać się
                                zdrowszym, sprawniejszym oraz efektywniejszym
                                człowiekiem.
                            </p>
                            <p className="mb-6">
                                Każdego dnia widzę jak ruch zmienia życie moich
                                podopiecznych na lepsze. Ogromną satysfakcję
                                daje mi obserwowanie tego, jak efekty wspólnej
                                pracy sięgają daleko poza salę treningową czy
                                samą formę fizyczną.
                            </p>
                            <p>
                                Odkąd pamiętam, ruch był nieodłączną częścią
                                życia – pomagał pozbyć się negatywnych emocji,
                                zadbać o ciało i osiągnąć lepsze wyniki w
                                różnych dyscyplinach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-cover bg-action h-[720px] relative">
                <Link to="/oferta">
                    <button
                        type="button"
                        className="shadow rounded-md bg-black text-center font-medium text-white text-mobile-p-size md:text-p-size absolute h-[72px] w-72 m-auto inset-0 hover:bg-rose-700 transition-all"
                    >
                        {" "}
                        zobacz ofertę {">>"}
                    </button>
                </Link>
            </section>
            <section className="container py-16">
                <div
                    className="max-w-[58ch] lg:max-w-prose text-mobile-p-size md:text-p-size
                    px-12 md:px-0 md:mx-16 mb-10 pb-10"
                >
                    <h1 className="text-mobile-h1-size md:text-h1-size font-medium pt-12 mb-10">
                        Jakie posiadam certyfikaty?
                    </h1>
                    <p>
                        Brałam udział w wielu kursach, szkoleniach i
                        konferencjach z zakresu treningu personalnego,
                        przygotowania motorycznego oraz dietetyki, które dały mi
                        solidną podstawę do pracy z różnorodnymi podopiecznymi.
                        Cały czas się uczę, dokształcam i poszerzam swoją
                        wiedzę. Kilka wybranych certyfikatów znajdziesz poniżej.
                    </p>
                </div>
                <div className="pt-12 pb-6 md:mx-16">
                    <CarouselCertificates />
                </div>
            </section>
            <section className="container py-16">
                <div className="max-w-[58ch] lg:max-w-prose text-p-size md:mx-16 px-12 md:px-0">
                    <h1 className="text-mobile-h1-size md:text-h1-size font-medium pt-12 mb-12">
                        Co powiedzieli o mnie inni?
                    </h1>
                </div>
                <div>
                    <CarouselReviews className="pt-12 pb-12 md:mx-16" />
                </div>
            </section>
        </div>
    );
};

export default Home;
