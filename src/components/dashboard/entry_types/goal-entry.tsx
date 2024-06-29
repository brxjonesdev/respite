import React from 'react';
import { Entry } from '../entries';

export default function GoalEntry({ entry }: { entry: Entry }) {
  {
    /*
  How do we want to display a goal entry?
  Each goal entry has the following properties:
  - A title
  - A description
  - A due date
  - A progress bar
  - A button to mark the goal as complete
  - A button to edit the goal

  Goals work similarly to habits,they have to be setup by the user, 
  when a user selects the goal entry type, they will be prompted to create a goal or choose one that's current.

  Goals are simply custom increments. For example, a user can set a goal to read 10 books in a year.
  The progress bar will show how many books the user has read so far.
  They would be shown a menu with the base goal saying " I want to X this Y."
  User can then input the number of X and the Y.
  For example, "I want to read 10 books this year."
  User can then input the number of books they have read so far.
  The progress bar will show how many books the user has read so far.

*/
  }
  return <div>GoalEntry</div>;
}
