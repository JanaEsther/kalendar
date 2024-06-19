export interface Time {
  day: number;
  hour: number;
  minute: number;
}

export interface CalendarItem {
  title: string;
  time: Time;
}

export interface Event extends CalendarItem {
  type: "event";
  duration: number;
  location: string;
}

export interface Task extends CalendarItem {
  type: "task";
  duration: number;
  location: string;
  done: boolean;
}

export type Item = Event | Task;



