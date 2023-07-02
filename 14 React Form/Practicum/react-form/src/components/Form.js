import { useState } from 'react';
import InputField from './InputField';
import dataInputFields from '../helper/dataInputFields';
import hero from '../assets/hero.jpg';
import './Form.css';

const Form = () => {
 const [formData, setFormData] = useState({});
 const [name, setName] = useState('');
 const [errors, setErrors] = useState({});
 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({
   ...prevData,
   [name]: value,
  }));
 };

 const validateForm = () => {
  const newErrors = {};
  let isValid = true;

  dataInputFields.forEach((field) => {
   if (field.validation?.required?.value && !formData[field.name]) {
    newErrors[field.name] = field.validation.required.message;
    isValid = false;
   }

   if (field.validation?.pattern?.value && !field.validation.pattern.value.test(formData[field.name])) {
    newErrors[field.name] = field.validation.pattern.message;
    isValid = false;
   }

   if (field.validation?.minLength?.value && formData[field.name]?.length < field.validation.minLength.value) {
    newErrors[field.name] = field.validation.minLength.message;
    isValid = false;
   }

   if (field.validation?.maxLength?.value && formData[field.name]?.length > field.validation.maxLength.value) {
    newErrors[field.name] = field.validation.maxLength.message;
    isValid = false;
   }
  });

  setErrors(newErrors);
  return isValid;
 };

 const handleSubmit = (event) => {
  event.preventDefault();

  if (validateForm()) {
   setIsSubmitted(true);
   setErrors({});
   setName(formData.name);
   setFormData({});
  }
 };

 const handleReset = () => {
  setIsSubmitted(false);
  setFormData({});
  setErrors({});
  setName('');
 };

 return (
  <section className='bg-secondary-subtle d-flex justify-content-center align-items-center py-5'>
   <div className='bg-white w-75 p-5 rounded-3 d-flex flex-wrap justify-content-center align-items-center gap-5'>
    <div className='d-flex justify-content-center'>
     <img src={hero} alt='hero' className='w-50' />
    </div>
    <div>
     {Object.keys(errors).length > 0 && (
      <div className='alert alert-danger' role='alert'>
       Data Pendaftar Tidak Sesuai
      </div>
     )}
     {isSubmitted && Object.keys(errors).length === 0 && (
      <div className='alert alert-success' role='alert'>
       Data berhasil diterima! Nama: {name}
      </div>
     )}
     <h1>Pendaftaran Peserta Coding Bootcamp</h1>
     <form onSubmit={handleSubmit}>
      {dataInputFields.map((field) => (
       <InputField key={field.id} label={field.label} type={field.type} name={field.name} validation={field.validation} value={formData[field.name] || ''} onChange={handleChange} error={errors[field.name]} options={field.options} />
      ))}
      <div className='d-flex gap-3'>
       <button type='submit' className='btn btn-primary'>
        Submit
       </button>
       <button type='reset' className='btn btn-danger' onClick={handleReset}>
        Reset
       </button>
      </div>
     </form>
    </div>
   </div>
  </section>
 );
};

export default Form;
