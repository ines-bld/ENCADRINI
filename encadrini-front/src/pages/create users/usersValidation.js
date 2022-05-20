import * as yup from 'yup';

export const schema = yup.object().shape({
    Nom: yup.string()
        .required('requis'),
    Prenom: yup.string()
        .required('requis'),
    Situation: yup.string()
        .required('requis'),
    Email: yup.string()
        .email()
        .required('requis'),
    Poste: yup.string()
        .required('requis'),
    DateDeNaissance: yup.string()
        .required(),
    Wilaya: yup.number().required('requis'),
    telephone: yup.number().required('requis'),
    Description: yup.string()
        .required('requis'),
    Adresse: yup.string()
        .required('requis'),
    Sexe: yup.string()
        .required('requis'),



});