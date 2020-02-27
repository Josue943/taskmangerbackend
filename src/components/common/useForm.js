import { useState } from "react";

export const useForm = (callback, initialState, valide) => {
  const [values, setValues] = useState(initialState);

  const [errors, setErrors] = useState({});

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (Object.keys(valide(values)).length === 0) {
      callback();
      setValues(initialState);
    } else {
      setErrors(valide(values));
    }
  };

  return {
    onChange,
    onSubmit,
    errors,
    values
  };
};
