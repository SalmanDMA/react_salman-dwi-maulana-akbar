import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Global/Header';
import CardList from './CardList/CardList';
import CardInput from './CardInput/CardInput';
import { ToastContainer, toast } from 'react-toastify';

const Card = () => {
 const [products, setProducts] = useState([]);
 const [editingProduct, setEditingProduct] = useState(null);

 // Mengambil data produk dari API saat komponen di-mount
 useEffect(() => {
  fetchData();
 }, []);

 // Mengambil data produk dari API
 const fetchData = async () => {
  try {
   const response = await axios.get('https://64a50b3d00c3559aa9bef5a3.mockapi.io/products');
   setProducts(response.data);
  } catch (error) {
   console.error(error);
  }
 };

 // Menambahkan produk baru ke API
 const addProduct = async (product) => {
  try {
   const response = await axios.post('https://64a50b3d00c3559aa9bef5a3.mockapi.io/products', product);
   setProducts([...products, response.data]);
   toast.success('Product added!');
  } catch (error) {
   console.error(error);
   toast.error('Error adding product');
  }
 };

 // Menghapus produk dari API berdasarkan ID
 const deleteProduct = async (id) => {
  try {
   await axios.delete(`https://64a50b3d00c3559aa9bef5a3.mockapi.io/products/${id}`);
   console.log(products);
   setProducts(products.filter((product) => product.id !== id));
   toast.success('Product deleted!');
  } catch (error) {
   console.error(error);
   toast.error('Error deleting product');
  }
 };

 // Mengisi data produk yang akan diedit ke form
 const editProduct = (id) => {
  const productToEdit = products.find((product) => product.id === id);
  setEditingProduct(productToEdit);
 };

 // Mengupdate data produk yang telah diedit ke API
 const updateProduct = async (id, updatedProduct) => {
  try {
   await axios.put(`https://64a50b3d00c3559aa9bef5a3.mockapi.io/products/${id}`, updatedProduct);
   setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
   setEditingProduct(null);
   toast.success('Product updated!');
  } catch (error) {
   console.error(error);
   toast.error('Error updating product');
  }
 };

 return (
  <>
   <Header />

   <section className='container'>
    <ToastContainer position='top-right' autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover limit={3} toastClassName='custom-toast' />
    <CardInput addProduct={addProduct} editProduct={editingProduct} updateProduct={updateProduct} setEditingProduct={setEditingProduct} />
    <div>
     <h1 className='text-center'>Product List</h1>
    </div>
    <div className='d-flex flex-wrap row-gap-4'>
     {products.map((product) => (
      <CardList key={product.id} product={product} deleteProduct={deleteProduct} editProduct={editProduct} />
     ))}
    </div>
   </section>
  </>
 );
};

export default Card;
