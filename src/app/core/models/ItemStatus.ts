export enum ItemStatusReal {
  completed = "Completed",
  not_started = "Not Started",
  pushed_back = "Pushed Back",
  in_progress = "In Progress",
  blocked = "Blocked",
}

export class ItemStatus {
  status: string;
  constructor(status: string) {
    this.status = status;
  }
}
