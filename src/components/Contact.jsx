import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_xzg3p65',
                'template_3ruagmt',
                form.current,
                //API KEY HERE
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Wiadomość została wysłana');
                },
                (error) => {
                    console.log(error.text);
                }
            );
        event.target.reset();
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                <input
                    id="firstName"
                    className="rounded-md bg-white h-16 md:h-11 w-auto md:w-1/2 p-2 my-4 shadow text-mobile-p-size md:text-p-size"
                    name="user_name"
                    maxLength={255}
                    placeholder="twoje imię"
                    type="text"
                    required
                />
                <input
                    id="email"
                    className="rounded-md bg-white h-16 md:h-11 w-auto md:w-1/2 p-2 my-4 shadow text-mobile-p-size md:text-p-size"
                    name="user_email"
                    maxLength={255}
                    placeholder="twój e-mail"
                    type="email"
                    required
                />
                <textarea
                    id="message"
                    wrap={'hard'}
                    maxLength={2500}
                    spellCheck={true}
                    required
                    className="rounded-md bg-white h-96 w-auto p-2 my-4 shadow break-words resize-none text-mobile-p-size md:text-p-size terelative"
                    name="message"
                    placeholder="twoja wiadomość"
                />
                <button
                    type="submit"
                    className="transition-all shadow rounded-md bg-black text-center font-medium text-white text-p-size h-[64px] w-64 my-4 mr-auto ml-auto hover:bg-rose-700"
                >
                    wyślij {'>>'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
