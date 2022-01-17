import fb from '../../assets/icons/fb.svg';
import ins from '../../assets/icons/in.svg';
import wp from '../../assets/icons/wp.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';
import locale from '../../assets/icons/locale.svg';

export interface Icons {
  icon: string,
  alt: string,
}

export const ICONSNS = [
  {
    icon: fb,
    alt: 'facebook',
  },
  {
    icon: ins,
    alt: 'instagram',
  },
  {
    icon: wp,
    alt: 'whastsapp',
  },

];
export const ICONSINFO = [
  {
    icon: phone,
    alt: 'phone',
  },
  {
    icon: email,
    alt: 'email',
  },
  {
    icon: locale,
    alt: 'locale',
  },

];
