export enum ERROR_MSGS {
  FAIL = 'fail',
  ERRORS = 'errors',
  ERROR = 'error',
  GENERIC_ERROR = 'Algo salió mal 🥹',
  SESSION_NOT_STARTED = 'No has iniciado sesión, ¡Por favor inicia sesión!.',
  PERMISSION_DENIAD = 'Acción denegada, no tienes permisos.',
  TOKEN_NOT_DECODED = 'El token no se decodificó.',
  TOKEN_USER_NOT_FOUND = 'El usuario del token no existe.',
  USER_PASSWORD_CHANGE = 'El usuario cambió su contraseña recientemente. Vuelve a iniciar sesión.',
  USER_NOT_FOUND = 'No se encontró el usuario.',
  USER_SAVE_ERROR = 'No se pudo guardar el usuario.',
  USER_AUTHENTICATION_ERROR = 'No se pudo autenticar el usuario.',
  USER_DISABLE_ERROR = 'El usuario no pudo deshabilitarse.',
  ACTION_RECTRICTED_TO_OWNER = 'Solo puedes realizar esta acción con tu usuario.',
  ID_TYPE_MISMATCH = 'El id debe ser un entero',
  RESOURCE_NOT_FOUND = 'No se encontró el recurso.',
  RESOURCE_CREATION_ERROR = 'No se pudo crear el recurso en la base de datos.',
  SAME_PASSWORD_EROR = 'Tu contraseña no puede ser la misma.',
  PASSWORD_CHANGE_ERROR = 'No se pudo cambiar la contraseña.',
  PASSWORD_ENCRYPTION_ERROR = 'Ocurrió un error al encriptar la contraseña.',
  PASSWORD_COMPARISON_ERROR = 'Ocurrió un error al comparar las contraseñas.',
  INCORRECT_PASSWORD = 'Contraseña incorrecta.',
  TOKEN_INFO_RETRIEVAL_ERROR = 'No se pudo recuperar la información del token.',
  JWT_INVALID_TOKEN = 'invalid token',
  JWT_MALFORMED = 'jwt malformed',
  JWT_INVALID_SIGNATURE = 'invalid signature',
  SESSION_EXPIRED = 'Su sesión ha expirado, inicie sesión nuevamente.',
  SESSION_DATA_TAMPERED = 'Los datos de tu sesión han sido manipulados.',
  TOKEN_GENERATION_ERROR = 'No se generó el token.',
  SERVER_ERROR = 'Error en el servidor.',
  GET_DOCTORS_AND_ADMINS_ERROR = 'No se pudo obtener los médicos ni los administradores.',
  ADMIN_REGISTRATION_APPROVAL_ERROR = 'Error al aprobar el registro del admin/doctor.',
  ADMIN_REGISTRATION_APPROVAL_FAIL = 'El admin/doctor ya ha sido aprobado previamente o no existe.',
  ADMIN_REGISTRATION_CANCELATION_ERROR = 'Error al deshabilitar un admin/doctor',
  ADMIN_REGISTRATION_CANCELATION_FAIL = 'El admin/doctor ya se encuentra deshabilitado o no existe.',
  MEDICAL_APPOINTMENT_DATE_CREATE_FAIL = 'No se pudo crear la cita médica.',
  MEDICAL_APPOINTMENT_FAIL_UPDATE = 'La cita médica no pudo cambiar su estado.',
  MEDICAL_APPOINTMENT_FAIL_SAVE = 'La cita médica no pudo crearse.',
  CREATE_PATIENT_ERROR = 'El paciente no pudo crearse.',
  CREATE_DOCTOR_SERVICE_FAIL = 'El doctor no pudo crearse.',
  MEDICAL_APPOINTMENT_DATES_INVALID_TYPE = 'La fecha con su hora debe venir en un arreglo de strings',
  MEDICAL_APPOINTMENT_DATES_REQUIRED = 'La fecha con su hora es requerida',
  MEDICAL_APPOINTMENT_DATES_DATE_INVALID_FORMAT = 'La fecha tiene un formato incorrecto',
  MEDICAL_APPOINTMENT_DATES_HOURS_INVALID_FORMAT_STRING = 'Las horas deben estar en un formato de texto.',
  MEDICAL_APPOINTMENT_DATES_HOURS_EMPTY_ARRAY = 'Debe haber al menos un horario disponible.',
  MEDICAL_APPOINTMENT_DATES_HOURS_REPEATED = 'Algún horario esta repetido.',
  MEDICAL_APPOINTMENT_DATES_HOURS_INVALID_FORMAT = 'La hora tiene un formato incorrecto',
  MEDICAL_APPOINTMENT_DATE_NOT_EXISTS_OR_CANCELLED_OR_COMPLETED = 'La fecha que elegiste ya fue seleccionada, no existe o se ha concluido la cita médica.',
  PATIENT_NOT_FOUND = 'El paciente no pudo encontrarse.',
  MEDICAL_APPOINTMENT_DATE_CANCELLED_FAIL = 'Error al cancelar la fecha',
  DOCTORS_NOT_FOUND = 'No hay doctores cons disponibilidad horaria.',
  DOCTORS_INTERNAL_NOT_FOUND = 'No se pudieron encontrar los doctores debido a un error interno.',
  GET_ALL_DATES_BY_SINGLE_DOCTOR_FAIL = 'Error al buscar todas las fechas creadas de un doctor'
}
