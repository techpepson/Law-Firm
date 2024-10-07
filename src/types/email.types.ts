//type definitions for the send email slice

export interface EmailPayload {
  name: string;
  phone: string;
  email: string;
  editedResponse: string;
  description: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}
