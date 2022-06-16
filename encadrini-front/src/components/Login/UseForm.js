import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const useForm = (callback, validate) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginUser = {
      username: values.username,
      password: values.password,
    };

    const { data } = await axios.post("http://localhost:5000/login", loginUser);
    console.log(data);
    const roles = data.role
    const name = data.userName
    const id = data.id
    localStorage.setItem("user", JSON.stringify({name:data.userName, role: data.role, id: data.id}));
    setErrors(validate(values));
    setIsSubmitting(true);
    navigate("/Dashboard"+data.role);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
