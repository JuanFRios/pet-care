import { Formik } from "formik";
import React from "react";
import { Button, Text, View } from "react-native";
import { currencyFormat, medicineFormInitialValues, spaFormInitialValues, validationSchemaMedicineForm, validationSchemaSpaForm } from "./initial-values";
import tw from "twrnc";
import Input from "../../components/Input";
import SubtitleForm from "../../components/SubtitleForm";
import SelectInput from "../../components/SelectInput";
import { ScrollView } from "react-native-gesture-handler";
import RadioGroup from "../../components/RadioGroup";
import SwitchInput from "../../components/Switch";
import Textarea from "../../components/Textarea";
const SpaForm = ({onSubmit}: any) => {
  const [ price, setPrice ] = React.useState(0);

  return (
    <>
      <Formik
        initialValues={spaFormInitialValues()}
        validationSchema={validationSchemaSpaForm}
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
                      value: "ca89e3ee-9082-4b7b-a11f-76b944138f0b",
                      label: "Cepillado",
                      precio: 14000
                  },
                  {
                      value: "7751c980-f401-4fe5-aca8-69678999da21",
                      label: "Baño",
                      precio: 16000
                  },
                  {
                      value: "0ddcf5e5-a60c-42c7-b67f-60916726c08b",
                      label: "Corte de uñas",
                      precio: 20000
                  },
                  {
                      value: "c8358313-fd0c-431c-94cd-d647fda9d1b5",
                      label: "Corte de pelo",
                      precio: 22000
                  },
                  {
                      value: "fa5c9af3-6652-4514-893d-017536a10b3c",
                      label: "Limpieza bucal",
                      precio: 18000
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
                    titulo="Indicaciones Propietario"
                    placeholder="Ingrese las indicaciones"
                    handleChange={handleChange("indicacionesPropietario")}
                    name="indicacionesPropietario"
                    handleBlur={handleBlur("indicacionesPropietario")}
                    value={values.indicacionesPropietario}
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

export default SpaForm;
