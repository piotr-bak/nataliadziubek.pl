import React from 'react';
import { Tab } from '@headlessui/react';
import data from '../data/data-trainings';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const TrainingTabs = () => {
    return (
        <div className="w-3/4 py-4 md:py-12">
            <Tab.Group>
                <Tab.List
                    className="flex flex-col lg:flex-row
                lg:space-x-3 rounded pl-2"
                >
                    {Object.keys(data).map((entry) => (
                        <Tab
                            key={entry}
                            className={({ selected }) =>
                                classNames(
                                    'font-bold text-mobile-p-size md:text-p-size lg:px-4 w-full rounded text-sm leading-5 py-8 lg:py-0 text-slate-800 transition-all last-of-type:pb-12 lg:last-of-type:pb-0',
                                    selected
                                        ? 'text-rose-700'
                                        : 'text-slate-800 hover:text-rose-700'
                                )
                            }
                        >
                            <div className="flex flex-row">
                                <span className="block lg:hidden mr-4">
                                    {'>>'}
                                </span>
                                {entry}
                            </div>
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-4 lg:mt-16">
                    {Object.values(data).map((entry) => (
                        <Tab.Panel
                            key={entry.key}
                            className="flex flex-col lg:flex-row "
                        >
                            <div className="w-[380px] h-[370px] flex-none pr-8">
                                <img
                                    className="rounded-md shadow"
                                    src={entry.photo}
                                    alt={entry.title}
                                ></img>
                            </div>
                            <div>
                                <h1 className="pb-6 text-mobile-p-size md:text-p-size">
                                    {entry.title}
                                </h1>
                                <p className="max-w-[50ch] text-mobile-small-size md:text-small-size pb-2">
                                    {entry.content.p1}
                                </p>
                                <p className="max-w-[50ch] text-mobile-small-size md:text-small-size pb-2">
                                    {entry.content.p2}
                                </p>
                                <p className="max-w-[50ch] text-mobile-small-size md:text-small-size pb-2">
                                    {entry.content.p3}
                                </p>
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default TrainingTabs;
