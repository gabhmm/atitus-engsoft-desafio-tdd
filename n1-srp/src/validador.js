export function validadorUsuario(usuario) {

  const emailValidator = EmailValidator(usuario.email)
  const passwordValidator = PasswordValidator(usuario.password)
  const ageValidator = AgeValidator(usuario.age)

  return emailValidator && passwordValidator && ageValidator;
}

export function PasswordValidator(password) {
  if (password.length >= 8)
      return true

  return false
}

export function EmailValidator(email) {
  if (email.includes('@'))
    return true

  return false
}

export function AgeValidator(age) {
  if (age >= 18)
    return true

  return false
}