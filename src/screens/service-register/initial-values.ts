import * as Yup from 'yup';
export function currencyFormat(num: number) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

export const medicineFormInitialValues = () => ({
    servicio: "",
    nombrePaciente: "",
    edadPaciente: "",
    pesoKg: "",
    nombrePropietario: "",
    telefonoPropietario: "",
    correoPropietario: "",
    sintomas: "",
    antecedentes: "",
    diagnostico: "",
    tratamiento: "",
    especie: "",
    razaPaciente: "",
    sexoPaciente: "",
    esAtencionDomiciliaria: false,
    total: 0,
});

export const validationSchemaMedicineForm = Yup.object().shape({
    nombrePropietario: Yup.string().required("Campo requerido"),
    telefonoPropietario: Yup.string().required("Campo requerido"),
    correoPropietario: Yup.string().required("Campo requerido"),
    nombrePaciente: Yup.string().required("Campo requerido"),
    edadPaciente: Yup.string().required("Campo requerido"),
    pesoKg: Yup.string().required("Campo requerido"),
    especie: Yup.string().required("Campo requerido"),
    razaPaciente: Yup.string().required("Campo requerido"),
    sexoPaciente: Yup.string().required("Campo requerido"),
    sintomas: Yup.string().required("Campo requerido"),
    antecedentes: Yup.string().required("Campo requerido"),
    diagnostico: Yup.string().required("Campo requerido"),
    tratamiento: Yup.string().required("Campo requerido"),
  });

  export const spaFormInitialValues = () => ({
    servicio: "",
    nombrePropietario: "",
    telefonoPropietario: "",
    correoPropietario: "",
    nombrePaciente: "",
    edadPaciente: "",
    pesoKg: "",
    especie: "",
    razaPaciente: "",
    sexoPaciente: "",
    indicacionesPropietario: "",
    esAtencionDomiciliaria: false,
    total: 0,
});

export const validationSchemaSpaForm = Yup.object().shape({
  nombrePropietario: Yup.string().required("Campo requerido"),
  telefonoPropietario: Yup.string().required("Campo requerido"),
  correoPropietario: Yup.string().required("Campo requerido"),
  nombrePaciente: Yup.string().required("Campo requerido"),
  edadPaciente: Yup.string().required("Campo requerido"),
  pesoKg: Yup.string().required("Campo requerido"),
  especie: Yup.string().required("Campo requerido"),
  razaPaciente: Yup.string().required("Campo requerido"),
  sexoPaciente: Yup.string().required("Campo requerido"),
  indicacionesPropietario: Yup.string().required("Campo requerido"),
});

export const kinderGartenFormInitialValues = () => ({
  servicio: "",
  nombrePropietario: "",
  telefonoPropietario: "",
  correoPropietario: "",
  nombrePaciente: "",
  edadPaciente: "",
  pesoKg: "",
  especie: "",
  razaPaciente: "",
  sexoPaciente: "",
  cuidadosRequeridos: "",
  horasEstadia: "",
  esAtencionDomiciliaria: false,
  total: 0,
});

export const validationSchemaKindergartenForm = Yup.object().shape({
  nombrePropietario: Yup.string().required("Campo requerido"),
  telefonoPropietario: Yup.string().required("Campo requerido"),
  correoPropietario: Yup.string().required("Campo requerido"),
  nombrePaciente: Yup.string().required("Campo requerido"),
  edadPaciente: Yup.string().required("Campo requerido"),
  pesoKg: Yup.string().required("Campo requerido"),
  especie: Yup.string().required("Campo requerido"),
  razaPaciente: Yup.string().required("Campo requerido"),
  sexoPaciente: Yup.string().required("Campo requerido"),
  cuidadosRequeridos: Yup.string().required("Campo requerido"),
  horasEstadia: Yup.string().required("Campo requerido"),
});