'use client';
import React from 'react';
import NoteEntry from './entry_types/note-entry';
import EventEntry from './entry_types/event-entry';
import TaskEntry from './entry_types/task-entry';
import GoalEntry from './entry_types/goal-entry';
import HabitEntry from './entry_types/habit-entry';
import MoodEntry from './entry_types/mood-entry';
import { useRespiteStore } from '@/providers/respite-store-provider';

export type Entry = {
  id: string;
  title: string;
  type: 'Note' | 'Event' | 'Task' | 'Goal' | 'Habit' | 'Mood';
  content?: string;
  tags?: string[] | string;
  date: string;
  isPinned?: boolean;
  isBeingEdited?: boolean;
};
// Note: The type property is used to determine which component to render
// Note: The tags property is used to filter entries
// Note: Every entry has a date property where they should be separated by day
// Note: The isPinned property is used to determine if the entry should be displayed at the top of the list

const entries: Entry[] = [];

export default function JournalEntries() {
  const { respiteEntries } = useRespiteStore((store) => store);
  return (
    <div className="py-2 space-y-4">
      {respiteEntries.length === 0 && (
        <div className="text-center text-gray-500  bg-slate-400 py-16 rounded-xl">
          <p className="text-sm lg:text-md">
            No entries yet. Click the button above to add one.
          </p>
        </div>
      )}
      {respiteEntries.map((entry, index) => {
        switch (entry.type) {
          case 'Note':
            return <NoteEntry key={index} entry={entry} />;
          case 'Event':
            return <EventEntry key={index} entry={entry} />;
          case 'Task':
            return <TaskEntry key={index} entry={entry} />;
          case 'Goal':
            return <GoalEntry key={index} entry={entry} />;
          case 'Habit':
            return <HabitEntry key={index} entry={entry} />;
          case 'Mood':
            return <MoodEntry key={index} entry={entry} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
