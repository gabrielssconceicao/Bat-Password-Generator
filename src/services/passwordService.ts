export default function generatePassword() {
 
  let password:string = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:<>?';
  const PASSWORD_LENGTH = 8;
  for (let index=0; index<PASSWORD_LENGTH; index++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    password += caracteres.charAt(randomIndex);
  }
  return password;
}

