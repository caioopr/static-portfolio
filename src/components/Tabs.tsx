'use client';
import { skills } from '@/lib/skills';
import { Tab } from '@headlessui/react';

const categories = ['back-end', 'front-end', 'tool', 'mobile', 'data-science'];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function MyTabs() {
  return (
    <div className="flex flex-col max-w-4xl">
      <Tab.Group>
        <Tab.List className="flex flex-row flex-wrap gap-x-2.5 mb-1.5 sm:mb-2.5">
          {categories.map((item) => {
            return (
              <Tab
                key={item}
                className={({ selected }) =>
                  classNames(
                    'rounded-md px-1.5 py-2.5 text-lg font-medium leading-5 text-black',
                    'ring-white ring-opacity-50 ring-offset-2 ring-offset-blue-400 focus:outline-none ',
                    selected
                      ? 'border-2 sm:border-4 border-black'
                      : 'text-gray-700'
                  )
                }
              >
                {item === 'tool' ? 'tools' : item}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels>
          {categories.map((category) => {
            return (
              <Tab.Panel
                key={category}
                className="flex flex-col sm:flex-row gap-1.5 sm:gap-2.5 sm:flex-wrap max-w-4xl"
              >
                {skills.map((skill) => {
                  if (skill.tag.includes(category))
                    return (
                      <div
                        key={skill.name}
                        className="dark:bg-darkPrimary group flex origin-center transform items-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary justify-start md:origin-top"
                      >
                        <skill.logo className="h-6 w-6" />
                        <p>{skill.name}</p>
                      </div>
                    );
                })}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
