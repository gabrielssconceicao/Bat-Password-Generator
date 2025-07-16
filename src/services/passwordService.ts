import { Option } from '../components/CheckBox';

enum Characters {
  Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  Lowercase = 'abcdefghijklmnopqrstuvwxyz',
  Numbers = '0123456789',
  Symbols = '!@#$%^&*()_+-={}:<>?',
}

enum Options {
  Uppercase = 'Uppercase',
  Lowercase = 'Lowercase',
  Numbers = 'Numbers',
  Symbols = 'Symbols',
}


export default function generatePassword(options:Option[]) {
 
  let password:string = '';

  const caracteres = options.map((op)=>separeteCharacters(op)).join('');
  const PASSWORD_LENGTH = 8;
  for (let index=0; index<PASSWORD_LENGTH; index++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    password += caracteres.charAt(randomIndex);
  }
  return password;
}

function separeteCharacters ({label, checked}:Option) {
  if(!checked) return '';
  switch(label) {
    case Options.Uppercase:
      return Characters.Uppercase;
    case Options.Lowercase:
      return Characters.Lowercase;
    case Options.Numbers:
      return Characters.Numbers;
    case Options.Symbols:
      return Characters.Symbols;
    default:
      return '';
  }
}
