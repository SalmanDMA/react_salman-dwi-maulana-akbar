const Input = ({ nameAtribute, placeholder, validation, icon, register, value, errors, handleBlur, handleFokus }) => {
 return (
  <div className='input-group d-flex flex-column'>
   <div className='d-flex'>
    <span className='input-group-text' id='addon-wrapping'>
     {icon}
    </span>
    <input
     type='text'
     className={`form-control w-100 ${errors[nameAtribute] ? 'is-invalid' : ''}`}
     placeholder={placeholder}
     aria-label={nameAtribute}
     name={nameAtribute}
     aria-describedby='addon-wrapping'
     value={value}
     onBlur={handleBlur}
     onFocus={handleFokus}
     {...register(nameAtribute, validation)}
    />
   </div>
   {errors[nameAtribute] && <div className='invalid-feedback d-block mb-3'>{errors[nameAtribute].message}</div>}
  </div>
 );
};

export default Input;
