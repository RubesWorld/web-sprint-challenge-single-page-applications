import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required for order')
        .min(2,"Username must be 3 chars long"),
    size: yup
        .string()
        .oneOf(["large","medium","small"]),
    sauce: yup   
        .string()
        .oneOf(['red','white','olive','none']),
    pepperjack: yup.boolean(),
    mozzerella: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    olives: yup.boolean(),
    onions: yup.boolean(),
    anchovies: yup.boolean(),
    spinach: yup.boolean(),
    special: yup
        .string()
        .required('Special Required'),
})