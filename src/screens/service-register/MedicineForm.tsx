import { Formik } from "formik";
import React from "react";
import { Button, Text, View } from "react-native";
import { currencyFormat, medicineFormInitialValues, validationSchemaMedicineForm } from "./initial-values";
import tw from "twrnc";
import Input from "../../components/Input";
import SubtitleForm from "../../components/SubtitleForm";
import SelectInput from "../../components/SelectInput";
import { ScrollView } from "react-native-gesture-handler";
import RadioGroup from "../../components/RadioGroup";
import SwitchInput from "../../components/Switch";
import Textarea from "../../components/Textarea";
import { ServicesContext } from "../../context/ServicesContext";

const MedicineForm = ( {onSubmit}: any) => {
  const [ price, setPrice ] = React.useState(0);
  

  return (
    <>
      <Formik
        initialValues={medicineFormInitialValues()}
        validationSchema={validationSchemaMedicineForm}
        onSubmit={(values) => {
          const valuesToSave = {...values, total: price}
          onSubmit(valuesToSave)}}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
        }) => (
          <>
            <ScrollView>
              <View>
                <SelectInput
                  title="Servicio prestado"
                  name="servicio"
                  setPrice={setPrice}
                  setField={setFieldValue}
                  items={[
                    {
                        value: "ec80236e-f3a0-4fd5-a48a-5465566239a1",
                        label: "Medicina preventiva",
                        precio: 40000
                    },
                    {
                      value: "a354bbba-8f48-4d1f-b6d7-0fa43ceb313a",
                      label: "Consulta",
                        precio: 60000
                    },
                    {
                      value: "2ce5d7ba-b970-4118-953e-fe4f7cc68333",
                      label: "Etología",
                        precio: 70000
                    }
                ]}
                />
                <View style={tw`mt-4`}>
                  <SubtitleForm title="Datos del propietario" icon="person" />
                  <Input
                    titulo="Nombre"
                    placeholder="Ingrese el nombre del propietario"
                    handleChange={handleChange("nombrePropietario")}
                    name="nombrePropietario"
                    handleBlur={handleBlur("nombrePropietario")}
                    value={values.nombrePropietario}
                  />
                  <Input
                    titulo="Correo"
                    placeholder="Ingrese el correo del propietario"
                    handleChange={handleChange("correoPropietario")}
                    name="correoPropietario"
                    handleBlur={handleBlur("correoPropietario")}
                    value={values.correoPropietario}
                  />
                  <Input
                    titulo="Telefono"
                    placeholder="Ingrese el telefono del propietario"
                    name="telefonoPropietario"
                    handleChange={handleChange("telefonoPropietario")}
                    handleBlur={handleBlur("telefonoPropietario")}
                    value={values.telefonoPropietario}
                  />
                </View>
                <View style={tw`mt-8`}>
                  <SubtitleForm title="Información mascota" icon="list" />
                  <View style={tw`flex-row w-full`}>
                    <RadioGroup
                      titulo="Especie"
                      middleWidth
                      handleChange={handleChange("especie")}
                      name="especie"
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
                      name="sexoPaciente"
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
                      name="nombrePaciente"
                      handleBlur={handleBlur("nombrePaciente")}
                      value={values.nombrePaciente}
                    />
                    <Input
                      titulo="Edad"
                      middleWidth
                      placeholder="Ingrese la edad de la mascota"
                      handleChange={handleChange("edadPaciente")}
                      name="edadPaciente"
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
                      name="pesoKg"
                      handleBlur={handleBlur("pesoKg")}
                      value={values.pesoKg}
                      style={tw`w-full`}
                    />
                    <Input
                      titulo="Raza"
                      middleWidth
                      placeholder="Ingrese la raza de la mascota"
                      handleChange={handleChange("razaPaciente")}
                      name="razaPaciente"
                      handleBlur={handleBlur("razaPaciente")}
                      value={values.razaPaciente}
                      style={tw`w-full`}
                    />
                  </View>
                </View>
                <View style={tw`mt-8`}>
                  <SubtitleForm
                    title="Información de la atención"
                    icon="pricetag"
                  />
                  <Textarea
                    titulo="sintomas"
                    placeholder="Ingrese los sintomas"
                    handleChange={handleChange("sintomas")}
                    name="sintomas"
                    handleBlur={handleBlur("sintomas")}
                    value={values.sintomas}
                  />
                  <Textarea
                    titulo="Antecedentes"
                    placeholder="Ingrese los antecedentes"
                    handleChange={handleChange("antecedentes")}
                    name="antecedentes"
                    handleBlur={handleBlur("antecedentes")}
                    value={values.antecedentes}
                  />
                  <Textarea
                    titulo="Diagnostico"
                    placeholder="Ingrese el diagnostico"
                    handleChange={handleChange("diagnostico")}
                    name="diagnostico"
                    handleBlur={handleBlur("diagnostico")}
                    value={values.diagnostico}
                  />
                  <Textarea
                    titulo="Tratamiento"
                    placeholder="Ingrese el tratamiento"
                    handleChange={handleChange("tratamiento")}
                    name="tratamiento"
                    handleBlur={handleBlur("tratamiento")}
                    value={values.tratamiento}
                  />
                  <SwitchInput
                    titulo="Atención a domicilio"
                    name="esAtencionDomiciliaria"
                    setField={setFieldValue}
                  />
                </View>
              </View>
            </ScrollView>
            <View style={tw`h-16 w-full mt-4 border border-l-0 border-r-0 bg-slate-50 border-gray-400 flex justify-center`}>
              <View style={tw`flex flex-row justify-between p-1 items-center`}>
                <View>
                  <Text style={tw`text-black text-lg font-bold`}>
                    Total: {currencyFormat(price)}
                  </Text>
                </View>
                <Button
                  title="Guardar"
                  onPress={() => handleSubmit()}
                  color="#5856D6"
                />
              </View>
            </View>
          </>
        )}
      </Formik>
    </>
  );
};

export default MedicineForm;
