const validateUser = (values) => {
  let errors = {};

  if (!values.name) errors.name = "Nama tidak boleh kosong";
  if (!values.email) {
    errors.email = "Email tidak boleh kosong";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Format email tidak valid";
  }
  if (!values.age || values.age <= 0) {
    errors.age = "Umur harus berupa angka positif dan tidak boleh kosong";
  }

  return errors;
};

export default validateUser;
