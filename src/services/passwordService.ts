import { Option } from '../components/CheckBox';
import { Characters, Options } from './enums';



type GeneratedPasswordProps = {
  options: Option[],
  size: number
}

export default function generatePassword({options,size}:GeneratedPasswordProps) {
 
  let password:string = '';

  const caracteres = options.map((op)=>separeteCharacters(op)).join('');
  for (let index=0; index<size; index++) {
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
