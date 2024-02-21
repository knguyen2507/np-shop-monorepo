import { LogLevel } from '@prisma/client/logger';

export type FileUpload = Express.Multer.File;
export type LogType = {
  id: string;
  messageId: string;
  level: LogLevel;
  timeStamp: Date;
  eventName: string;
  message: string;
  data: any;
};
