import { Location } from 'vue-router';

export default interface INavItem {
  key: number;
  location: Location;
  text: string;
  color?: 'default' | 'primary';
  disabled?: boolean;
}
