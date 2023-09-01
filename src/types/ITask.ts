export interface ITaskGeneral {
  title: string;
  completed: boolean;
}

export interface ITag {
  title: string;
}

export interface ITask extends ITaskGeneral {
  description: string;
  startDate: Date;
  endDate: Date;
  tags: ITag[];
  avatar: string;
}

export interface IFetchedTask extends ITaskGeneral {
  id: number;
  userId: number;
}
