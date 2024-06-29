import React from 'react';
import { Entry } from '../entries';

export default function EventEntry({ entry }: { entry: Entry }) {
  {
    /*
  How do we want to display an event entry?
  Each event entry has the following properties:
  - A title
  - A description
  - A date and time
  - A location
  - A button to mark the event as complete
  - A button to edit the event
  - A photo upload feature

  Events are simply one-time occurrences. For example, a user can set an event to recap a moment like a birthday or a holiday.
  Events are the only entry type that has a photo upload feature.

  For example, a user wants to remember thier night at the TWICE concert,
  they can create an event entry with the title "TWICE Concert" and a description of the event along with a photo of the event.
  max 3 photos. carosel of photos.
*/
  }
  return <div>{entry.content}</div>;
}
