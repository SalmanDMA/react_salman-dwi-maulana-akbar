const TextArea = ({ nameAtribute, placeholder, validation, icon, register, errors }) => {
 return (
  <div className='input-group d-flex flex-column'>
   <div className='d-flex'>
    <span className='input-group-text' id='addon-wrapping'>
     {icon}
    </span>
    <textarea
     className={`form-control ${errors[nameAtribute] ? 'is-invalid' : ''}`}
     placeholder={placeholder}
     aria-label={nameAtribute}
     name={nameAtribute}
     aria-describedby='addon-wrapping'
     {...register(nameAtribute, validation)}
    ></textarea>
   </div>
   {errors[nameAtribute] && <div className='invalid-feedback d-block'>{errors[nameAtribute].message}</div>}
  </div>
 );
};

export default TextArea;
