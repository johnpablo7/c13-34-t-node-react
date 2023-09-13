import { client } from "@/config/client";
import { TPatient, TPatientInfo } from "@/types/patients";

async function getDoctorPatients() {
  type TGetDoctorPatients = {
    status: string;
    patients: TPatient[];
    results: number;
  };

  const res = await client.get<TGetDoctorPatients>(
    "/api/v1/doctor/get-doctor-patients",
  );

  return res.data;
}

async function getPatientInfo(id: number) {
  const res = await client.get<TPatientInfo>(
    `/api/v1/doctor/get-patient-info/${id}`,
  );

  return res.data;
}

async function getPatientAppointmentsQty(id: string, patientId: string) {
  const res = await client.get<number>(
    `/api/v1/doctor/medical-appointments-info/${id}/${patientId}`,
  );

  return res.data;
}

async function postMedicalRecord(
  id: number,
  familyMedicalHistory: string,
  previousMedicalConditions: string,
  allergies: string,
) {
  const res = await client.post(`/api/v1/doctor/create-medical-record/${id}`, {
    familyMedicalHistory,
    previousMedicalConditions,
    allergies,
  });

  return res;
}

export const DoctorPatientsService = {
  getDoctorPatients,
  getPatientInfo,
  getPatientAppointmentsQty,
  postMedicalRecord,
};
