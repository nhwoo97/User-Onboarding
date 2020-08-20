import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup
    .string()
    .min(3, 'Name should be at least 3 characters')
    .required('Name is required'),

    email: yup
    .string()
    .email( 'valid email is required')
    .required('email is required'),

    password: yup
    .string()
    .min(3, 'Password should be at least 3 characters')
    .required('Password is required'),
    
    terms: yup
    .bool()
    .required('Need to agree')

})

export default formSchema