export const validateUserLoginForm = (values) => {
   const errors = {};

   if (!values.username) {
      errors.username = 'Required';
   } else if (values.username.length < 6) {
      errors.username = 'Username must be atleast 6 characters.';
   } else if (values.username.length > 15) {
      errors.username = 'Username must be 15 characters or less.';
   }

   if (!values.password) {
      errors.password = 'Required.';
   } else if (values.password.length < 8) {
      errors.password = 'Username must be atleast 8 characters.';
   }

   return errors;
};
