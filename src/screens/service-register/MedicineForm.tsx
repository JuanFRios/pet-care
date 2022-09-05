import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View } from "react-native";
import * as Yup from "yup";
import { medicineFormInitialValues } from "./initial-values";
import tw from "twrnc";
import Input from "../../components/Input";
import SubtitleForm from "../../components/SubtitleForm";
import SelectInput from "../../components/SelectInput";

const MedicineForm = () => {
  const validationSchema = Yup.object().shape({
    nombrePropietario: Yup.string().required("nombrePropietario is required"),
  });

  return (
    <Formik
      initialValues={medicineFormInitialValues()}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <View>
          <View>
            <SubtitleForm title="Datos del propietario" />
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
          <View>
            <SubtitleForm title="Información mascota" />
            <SelectInput
              title="Especie"
              setField={setFieldValue}
              name="especie"
              items={[
                { label: "Canino", value: "canino" },
                { label: "Felino", value: "felino" },
              ]}
            />
            <Input
              titulo="Nombre"
              placeholder="Ingrese el nombre de la mascota"
              handleChange={handleChange("nombrePaciente")}
              handleBlur={handleBlur("nombrePaciente")}
              value={values.nombrePaciente}
            />
            <Input
              titulo="Especie"
              placeholder="Ingrese la especie de la mascota"
              handleChange={handleChange("especie")}
              handleBlur={handleBlur("especie")}
              value={values.especie}
            />
            <Input
              titulo="Raza"
              placeholder="Ingrese la raza de la mascota"
              handleChange={handleChange("razaPaciente")}
              handleBlur={handleBlur("razaPaciente")}
              value={values.razaPaciente}
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
  );
};

export default MedicineForm;
