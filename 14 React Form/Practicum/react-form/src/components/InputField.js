import React from 'react';

const InputField = ({ label, type, name, value, onChange, error, options }) => {
 if (type === 'radio') {
  return (
   <div className='mb-3'>
    {options.map((option) => (
     <label key={option.id} htmlFor={option.id} className='form-check-label ms-2'>
      <input type='radio' className='form-check-input border-3 me-1 ' name={name} value={option.value} id={option.id} checked={value === option.value} onChange={onChange} />
      {option.value}
     </label>
    ))}
    {error && <span className='text-danger ms-1 d-block'>{error}</span>}
   </div>
  );
 }

 if (type === 'select') {
  return (
   <div className='mb-3'>
    <label htmlFor={name} className='form-label'>
     {label}
     <span className='text-danger ms-1'>*</span>
    </label>
    <select className={`form-control ${error && 'is-invalid'}`} name={name} id={name} value={value} onChange={onChange}>
     {options.map((option) => (
      <option key={option.value} value={option.value}>
       {option.label}
      </option>
     ))}
    </select>
    {error && <span className='text-danger ms-1'>{error}</span>}
   </div>
  );
 }

 if (type === 'textarea') {
  return (
   <div className='mb-3'>
    <label htmlFor={name} className='form-label'>
     {label}
    </label>
    <textarea name={name} className={`form-control ${error && 'is-invalid'}`} id={name} value={value} onChange={onChange} />
    {error && <span className='text-danger ms-1'>{error}</span>}
   </div>
  );
 }

 return (
  <div className='mb-3'>
   <label htmlFor={name} className='form-label'>
    {label}
    <span className='text-danger ms-1'>*</span>
   </label>
   <input type={type} name={name} className={`form-control ${error && 'is-invalid'}`} id={name} value={value} onChange={onChange} />
   {error && <span className='text-danger ms-1'>{error}</span>}
  </div>
 );
};

export default InputField;
