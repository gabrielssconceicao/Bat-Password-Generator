import { Option } from '../components/CheckBox';
import { Options } from './enums';

interface PasswordStrengthProps {
  options: Option[];
  size: number;
}

export function passwordStrength({options,size}:PasswordStrengthProps) {
  let percentage = 0;
  percentage = Math.round((size / 64) * 100 * 0.3); 
  options.forEach((option) => {
    if (!option.checked) return;
    switch (option.label) {
      case Options.Lowercase:
        percentage += 10; 
        break;
      case Options.Uppercase:
        percentage += 15; 
        break;
      case Options.Numbers:
        percentage += 20; 
        break;
      case Options.Symbols:
        percentage += 25;
        break;
    }
  })
  return percentage;
}