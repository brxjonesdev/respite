'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRespiteStore } from '@/providers/respite-store-provider';
import { nanoid } from 'nanoid';
{
  /*
 Userflow for adding a new entry:
 - User clicks the + New Entry button
 - A dialog pops up with the title "Create New Entry"
 - The dialog asks the user to choose the type of entry they would like to create with a isBeingEdited property set to true
*/
}

export default function AddEntry() {
  const { respiteEntries, addRespiteEntry } = useRespiteStore((store) => store);
  const entryButtons = [
    { type: 'Note', color: 'bg-blue-300', text: 'text-blue-500' },
    { type: 'Event', color: 'bg-green-300', text: 'text-green-500' },
    { type: 'Task', color: 'bg-yellow-300', text: 'text-yellow-500' },
    { type: 'Goal', color: 'bg-purple-300', text: 'text-purple-500' },
    { type: 'Habit', color: 'bg-red-300', text: 'text-red-500' },
    { type: 'Mood', color: 'bg-orange-300', text: 'text-orange-500' }
  ];
  const [selectedEntryType, setSelectedEntryType] = React.useState('');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full h-20 border-dashed border-white border-2">
          + New Entry
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg">
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl font-bold">
            Create New Entry
          </DialogTitle>
          <DialogDescription>
            Choose the type of entry you would like to create
          </DialogDescription>
        </DialogHeader>
        <section className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {entryButtons.map((entry, index) => (
              <DialogClose asChild>
                <Button
                  key={index}
                  className={`h-20 ${entry.color} ${entry.text}`}
                  onClick={() => {
                    addRespiteEntry({
                      id: `respite-${nanoid(8)}${new Date().getTime()}`,
                      title: '',
                      type: entry.type as
                        | 'Note'
                        | 'Event'
                        | 'Task'
                        | 'Goal'
                        | 'Habit'
                        | 'Mood',
                      content: '',
                      tags: [],
                      date: new Date().toISOString(),
                      isPinned: false,
                      isBeingEdited: true
                    });
                  }}
                >
                  {entry.type}
                </Button>
              </DialogClose>
            ))}
          </div>
          {/* Template Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full h-20 bg-gray-300 text-gray-500">
                Template
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Respite Templates</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Cancel Button */}
        </section>
        {/* 
        if selectedEntryType equals 'note', 'event', 'task', 'goal', 'habit', 'mood' then render the corresponding component 
          */}

        {selectedEntryType && (
          <DialogClose asChild>
            <Button
              className="w-full h-8"
              onClick={() => {
                addRespiteEntry({
                  id: `respite-${nanoid(8)}${new Date().getTime()}`,
                  title: '',
                  type: selectedEntryType as
                    | 'Note'
                    | 'Event'
                    | 'Task'
                    | 'Goal'
                    | 'Habit'
                    | 'Mood',
                  content: '',
                  tags: [],
                  date: new Date().toISOString(),
                  isPinned: false,
                  isBeingEdited: true
                });
                setSelectedEntryType('');
              }}
            >
              Add New {selectedEntryType}
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  );
}
