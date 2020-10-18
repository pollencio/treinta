export const authCards = {
  login: {
    title: 'Iniciar sesión',
    subtitle: 'Ingresa las credenciales para acceder a Treinta',
    action: 'Iniciar sesión',
    fields: {
      email: {
        label: 'Correo electrónico',
        placeholder: 'micorreo@email.com',
        type: 'email',
        required: true,
      },
      password: {
        label: 'Contraseña',
        placeholder: '*********',
        type: 'password',
        required: true,
      },
    },
    links: [
      // { text: '¿Olvidaste tu contraseña?', cardLink: 'sendPasswordLink' },
      { text: '¿Aun no tienes una cuenta?', cardLink: 'signup' },
    ],
  },
  signup: {
    title: 'Registrarme',
    subtitle: 'Crea tu cuenta en Treinta para comenzar a usar sus servicios',
    action: 'Registrarme',
    fields: {
      // name: {
      //   label: 'Nombre',
      //   placeholder: 'Sandra Torres Pérez',
      //   type: 'text',
      //   required: true,
      // },
      email: {
        label: 'Correo electrónico',
        placeholder: 'sandra@email.com',
        type: 'email',
        required: true,
      },
      password: {
        label: 'Contraseña',
        placeholder: '*********',
        type: 'password',
        required: true,
      },
    },
    links: [{ text: '¿Ya tienes una cuenta?', cardLink: 'login' }],
  },
  sendPasswordLink: {
    title: 'Envíame el link',
    subtitle:
      'Ingresa el correo de tu cuenta para enviarte el link de recuperación de contraseña',
    action: 'Envíame el link',
    fields: {
      email: {
        label: 'Correo electrónico',
        placeholder: 'micorreo@email.com',
        type: 'email',
        required: true,
      },
    },
    links: [{ text: '¿Quieres iniciar sesión?', cardLink: 'login' }],
  },
  recoverPassword: {
    title: 'Cambiar contraseña',
    subtitle: 'Ingresa la nueva contraseña de tu cuenta',
    action: 'Cambiar contraseña',
    fields: {
      password: {
        label: 'Nueva contraseña',
        placeholder: '********',
        type: 'password',
        required: true,
      },
      confirmPassword: {
        label: 'Confirmar nueva contraseña',
        placeholder: '********',
        type: 'password',
        required: true,
      },
    },
    links: [{ text: '¿Quieres iniciar sesión?', cardLink: 'login' }],
  },
  linkSent: {
    title: 'Enlace enviado',
    subtitle:
      'Revisa en la bandeja de entrada de tu correo. Puede que el mensaje haya llegado a la carpeta de spam.',
    links: [
      {
        text: '¿Necesitas que enviemos el link de nuevo?',
        cardLink: 'sendPasswordLink',
      },
      {
        text: '¿Quieres iniciar sesión?',
        cardLink: 'login',
      },
    ],
  },
}

export const authErrorTranslation = {
  'auth/user-not-found': '¡Ups! Este usuario no existe. Intenta registrarte',
  'auth/wrong-password':
    '¡Ups! No encontramos un usuario con este correo y contraseña.',
  'auth/too-many-requests':
    'Parece que has hecho muchos intentos. Espera unos minutos e intenta de nuevo.',
  'auth/email-already-exists':
    'Parece que ya te has registrado con este correo. Intenta inciar sesión',
  default:
    'Ha ocurrido un error. Por favor espera unos minutos e inténtalo de nuevo.',
}
