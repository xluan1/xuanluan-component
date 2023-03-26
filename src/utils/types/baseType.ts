export interface BaseEntity {
  id?: string;
  createdBy?: string | undefined;
  updatedBy?: string | undefined;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BaseInfo {
  name?: string;
  description?: string;
}

export interface ResultList<T> {
  total: number;
  resultList: [T];
  index: number;
  maxResult: number;
}

export interface WrapperResponse {
  status: string;
  message: string;
  data: any;
}

export interface ShowModal {
  isOpened: boolean;
  handleShow?: () => void;
  handleClose: () => void;
}

export interface EmailSender {
  toEmail?: string;
  messageBody?: string;
  subject?: string;
}

export interface EmailConfig {
  isConnectMail?: boolean;
  hostMail?: string;
  usernameMail?: string;
  passwordMail?: string;
  portMail?: number;
  protocolMail?: string;
}

export interface EmailSenderConfig {
  config: EmailConfig;
  sender: EmailSender;
}

export interface FileRequest {
  name?: string;
  originalFile?: string;
  type?: string;
  long?: number;
  data?: string;
}

export interface LoginFinal {
  clientId: string;
  sessionId: string;
  toPage: string;
  domain: string;
}
