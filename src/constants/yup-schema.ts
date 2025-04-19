import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required.')
    .trim('First Name cannot contain only spaces.'),
  lastName: Yup.string()
    .required('Last Name is required.')
    .trim('Last Name cannot contain only spaces.'),
});

export {userSchema};
