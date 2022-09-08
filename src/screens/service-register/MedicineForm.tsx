import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View } from "react-native";
import * as Yup from "yup";
import { medicineFormInitialValues } from "./initial-values";
import tw from "twrnc";
import Input from "../../components/Input";
import SubtitleForm from "../../components/SubtitleForm";
import SelectInput from "../../components/SelectInput";
import { ScrollView } from "react-native-gesture-handler";
import RadioGroup from "../../components/RadioGroup";
import SwitchInput from "../../components/Switch";

const MedicineForm = () => {
  const validationSchema = Yup.object().shape({
    nombrePropietario: Yup.string().required("nombrePropietario is required"),
  });

  return (
    <ScrollView>
      <Formik
        initialValues={medicineFormInitialValues()}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
        }) => (
          <View>
            <View style={tw`mt-4`}>
              <SubtitleForm title="Datos del propietario" icon="person" />
              <Input
                titulo="Nombre"
                placeholder="Ingrese el nombre del propietario"
                handleChange={handleChange("nombrePropietario")}
                handleBlur={handleBlur("nombrePropietario")}
                value={values.nombrePropietario}
              />
              <Input
                titulo="Correo"
                placeholder="Ingrese el correo del propietario"
                handleChange={handleChange("correoPropietario")}
                handleBlur={handleBlur("correoPropietario")}
                value={values.correoPropietario}
              />
              <Input
                titulo="Telefono"
                placeholder="Ingrese el telefono del propietario"
                handleChange={handleChange("telefonoPropietario")}
                handleBlur={handleBlur("telefonoPropietario")}
                value={values.telefonoPropietario}
              />
            </View>
            <View style={tw`mt-8`}>
              <SubtitleForm title="Información mascota" icon="list"/>
              <View style={tw`flex-row w-full`}>
                <RadioGroup
                  titulo="Especie"
                  middleWidth
                  handleChange={handleChange("especie")}
                  value={values.especie}
                  items={[
                    { label: "Canino", value: "canino" },
                    { label: "Felino", value: "felino" },
                  ]}
                />
                <RadioGroup
                  titulo="Sexo Paciente"
                  middleWidth
                  handleChange={handleChange("sexoPaciente")}
                  value={values.sexoPaciente}
                  items={[
                    { label: "Macho", value: "macho" },
                    { label: "Hembra", value: "hembra" },
                  ]}
                />
              </View>
              <View style={tw`flex-row w-full`}>
                <Input
                  titulo="Nombre"
                  middleWidth
                  placeholder="Ingrese el nombre de la mascota"
                  handleChange={handleChange("nombrePaciente")}
                  handleBlur={handleBlur("nombrePaciente")}
                  value={values.nombrePaciente}
                />
                <Input
                  titulo="Edad"
                  middleWidth
                  placeholder="Ingrese la edad de la mascota"
                  handleChange={handleChange("edadPaciente")}
                  handleBlur={handleBlur("edadPaciente")}
                  value={values.edadPaciente}
                />
              </View>

              <View style={tw`flex-row w-full`}>
                <Input
                  titulo="Peso (kg)"
                  middleWidth
                  placeholder="Ingrese el peso de la mascota"
                  handleChange={handleChange("pesoKg")}
                  handleBlur={handleBlur("pesoKg")}
                  value={values.pesoKg}
                  style={tw`w-full`}
                />
                <Input
                  titulo="Raza"
                  middleWidth
                  placeholder="Ingrese la raza de la mascota"
                  handleChange={handleChange("razaPaciente")}
                  handleBlur={handleBlur("razaPaciente")}
                  value={values.razaPaciente}
                  style={tw`w-full`}
                />
              </View>
              <SwitchInput
                titulo="Atención a domicilio"
                name="esAtencionDomiciliaria"
                setField={setFieldValue}
              />
            </View>
            <Button
              title="Submit"
              onPress={() => handleSubmit()}
              color="#5856D6"
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default MedicineForm;
