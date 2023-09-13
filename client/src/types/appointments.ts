export type TAppointmentDateStatus =
  | "completed"
  | "selected"
  | "pending"
  | "cancelled";

export type TAppointment = {
  id: number;
  date: string;
  status: TAppointmentDateStatus;
  doctor: {
    id: number;
    specialty: string;
  };
};

// Generated by https://quicktype.io

export interface TMedicalAppointments {
  status: string;
  patient: TPatient;
}

export interface TPatient {
  id: number;
  medicalAppointments: TMedicalAppointment[];
}

export interface TMedicalAppointment {
  id: number;
  description: string;
  medicalAppointmentDate: TMedicalAppointmentDate;
}

export interface TMedicalAppointmentDate {
  id: number;
  date: string;
  status: TAppointmentDateStatus;
  doctor: TDoctor;
}

export interface TDoctor {
  id: number;
  user: TUser;
  specialty: string;
}

export interface TUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordChangedAt: null;
  dateOfBirth: string;
  telephone: string;
  role: string;
  status: string;
  genre: string;
}
