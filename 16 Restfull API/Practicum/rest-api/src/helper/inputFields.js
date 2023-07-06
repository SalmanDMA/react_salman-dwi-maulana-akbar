import { BiSolidUserCircle } from 'react-icons/bi';
import { BsFillChatTextFill } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import { RiProductHuntFill } from 'react-icons/ri';

export const inputFields = [
 {
  id: 1,
  nameAtribute: 'name',
  placeholder: 'Enter Name...',
  validation: {
   required: {
    value: true,
    message: 'Name is required',
   },
   minLength: {
    value: 2,
    message: 'Name must be at least 2 characters',
   },
   pattern: {
    value: /^[A-Za-z\s]+$/,
    message: 'Name must contain only letters and spaces',
   },
  },
  icon: <RiProductHuntFill />,
 },
 {
  id: 2,
  nameAtribute: 'avatar',
  placeholder: 'Enter Avatar Product...',
  validation: {
   required: {
    value: true,
    message: 'Avatar Product is required',
   },
   pattern: {
    value: /^(http|https):\/\/([A-Za-z0-9.-]+)\.([A-Za-z]{2,})(:[0-9]{1,5})?(\/.*)?$/,
    message: 'Avatar Product must be a valid URL',
   },
  },
  icon: <BiSolidUserCircle />,
 },
 {
  id: 3,
  nameAtribute: 'price',
  placeholder: 'Enter Price...',
  validation: {
   required: {
    value: true,
    message: 'Price is required',
   },
   pattern: {
    value: /^[0-9]+$/,
    message: 'Price must be a number',
   },
  },
  icon: <GiPriceTag />,
 },
 {
  id: 4,
  nameAtribute: 'description',
  placeholder: 'Enter description...',
  type: 'textarea',
  validation: {
   required: {
    value: true,
    message: 'Description is required',
   },
   minLength: {
    value: 10,
    message: 'Description must be at least 10 characters',
   },
   maxLength: {
    value: 200,
    message: 'Description must be at most 200 characters',
   },
  },
  icon: <BsFillChatTextFill />,
 },
];
