import * as Yup from 'yup';

export function ValidatePhone() {
  return Yup.string()
    .matches(
      /^\d{10}$/,
      'El número de teléfono debe tener exactamente 10 dígitos',
    )
    .required('Teléfono requerido');
}

export function ValidatePassword() {
  return Yup.string()
    .required('Contraseña requerida')
    .matches(/[0-9]/, 'Debe contener al menos un número')
    .matches(/[a-zA-Z]/, 'Debe contener al menos un caracter')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Debe contener al menos un carácter especial',
    )
    .min(8, 'Debe tener al menos 8 caracteres');
}

export function ValidateToken() {
  return Yup.string()
    .matches(/^\d{6}$/, 'El token debe tener exactamente 6 dígitos')
    .required('Token requerido');
}
