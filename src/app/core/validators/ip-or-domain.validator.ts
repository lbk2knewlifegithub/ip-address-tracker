import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { domainRegex, ipv4Regex } from 'src/app/shared/regex';

export const ipOrDomainValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const ipOrDomain = control.value;

  if (domainRegex.test(ipOrDomain)) return null;


  if (ipv4Regex.test(ipOrDomain)) return null;

  return { ipv4OrDomain: true };
};
