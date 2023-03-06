import React from "react";
import Header from "../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";

const validationSchema = yup.object().shape({
  fullName: yup.string().required().label("Full Name"),
  email: yup.string().email().required().label("Email"),
  phone: yup.string().required().label("Phone"),
});

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
};

function Form() {
  const isNotMobile = useMediaQuery("(min-width:600px)");

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m={0}>
      <Header title={"Profile"} subtitle={"User Management Page"} />
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              m={"0 15px 0 15px"}
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNotMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box m={"25px 15px 0 0"} display="flex" justifyContent={"end"}>
              <Button variant="contained" type="submit" color="success">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
