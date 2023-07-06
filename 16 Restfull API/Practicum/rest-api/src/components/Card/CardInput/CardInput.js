import './CardInput.css';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { inputFields } from '../../../helper/inputFields';
import Input from './InputFields/Input';
import TextArea from './InputFields/TextArea';

const CardInput = ({ addProduct, editProduct, updateProduct }) => {
 const {
  register,
  handleSubmit,
  formState: { errors },
  watch,
  setValue,
  reset,
 } = useForm({
  mode: 'onChange',
  defaultValues: {
   name: '',
   price: '',
   description: '',
   avatar: '',
  },
 });

 useEffect(() => {
  if (editProduct) {
   // Mengisi nilai awal pada input fields berdasarkan editProduct
   inputFields.forEach(({ nameAtribute }) => {
    setValue(nameAtribute, editProduct[nameAtribute]);
   });
  }
 }, [editProduct, setValue]);

 // Parameter data itu di ambil berdasarkan input yang kita masukkan pada form dan sesuai dengan namenya
 const handleSubmitForm = (data) => {
  if (editProduct) {
   if (editProduct.id) {
    updateProduct(editProduct.id, {
     ...data,
     id: editProduct.id,
    });
   } else {
    console.error('Invalid editProduct');
   }
  } else {
   addProduct(data);
  }

  reset();
 };

 return (
  <section>
   <div className='mb-3'>
    <h1 className='text-center'>Form Input Product</h1>
   </div>
   <div className='d-flex flex-column gap-3 input-wrapper'>
    <form onSubmit={handleSubmit(handleSubmitForm)}>
     {inputFields.map(({ id, nameAtribute, placeholder, validation, icon, type }) => {
      if (type === 'textarea') {
       return <TextArea key={id} nameAtribute={nameAtribute} placeholder={placeholder} validation={validation} icon={icon} register={register} value={watch(nameAtribute)} errors={errors} />;
      } else {
       return <Input key={id} nameAtribute={nameAtribute} placeholder={placeholder} validation={validation} icon={icon} register={register} value={watch(nameAtribute)} errors={errors} />;
      }
     })}

     <div className='d-flex justify-content-center mt-3'>
      <button type='submit' className='btn btn-primary'>
       {editProduct ? 'Update' : 'Add'}
      </button>
     </div>
    </form>
   </div>
  </section>
 );
};

export default CardInput;
