import './CardList.css';
import React from 'react';
import moment from 'moment';

const CardList = ({ product, deleteProduct, editProduct }) => {
 const { id, name, price, createdAt, description, avatar } = product;
 console.log(`--------------------------------- Dari CardLIST ---------------------------------
  id: ${id}, name: ${name}, price: ${price}, createdAt: ${createdAt}, description: ${description}, avatar: ${avatar}`);

 const handleEdit = () => {
  editProduct(id);
 };

 const handleDelete = () => {
  deleteProduct(id);
 };

 const formatToDollar = (value) => {
  const formattedValue = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return '$' + formattedValue;
 };

 return (
  <section className='col-12 col-md-3 col-lg-4'>
   <h4 className='text-center'>
    <strong>{name}</strong>
   </h4>
   <hr />
   <div className='profile-card-4 text-center'>
    <img src={avatar} alt='Product' className='img-fluid' />
    <div className='profile-content'>
     <div className='profile-name'>
      {name}
      <p>Price: {formatToDollar(price)}</p>
     </div>
     <div className='profile-overview'>
      <p className='text-end'>Created At: {moment(createdAt).format('DD/MM/YYYY')}</p>
     </div>
     <div className='profile-description'>{description}</div>
     <div className='d-flex gap-3 justify-content-center mt-3'>
      <button type='button' className='btn btn-primary' onClick={handleEdit}>
       Edit
      </button>
      <button type='button' className='btn btn-danger' onClick={handleDelete}>
       Delete
      </button>
     </div>
    </div>
   </div>
  </section>
 );
};

export default CardList;
