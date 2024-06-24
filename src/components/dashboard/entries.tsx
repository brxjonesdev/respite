import React from 'react';
import Entry from './entry';

export type Entry = {
  title: string;
  type: 'note' | 'event' | 'task' | 'goal' | 'habit' | 'mood';
  content: string;
  tags: string[];
  date: string;
};

// Sample of 10 entries
const entries: Entry[] = Array.from({ length: 3 }, (_, index) => ({
  title: `Entry ${index + 1}`,
  type: 'note',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  tags: ['tag1', 'tag2', 'tag3'],
  date: new Date().toISOString()
}));


export default function JournalEntries() {
  return <div className='py-2 overflow-y-scroll'>
    {/* {entries.map((entry, index) => (
      <Entry key={index} data={entry} />
    ))} */}
    </div>;
}
