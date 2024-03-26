import { ActiveStatus } from './status.enum';

export interface IData {
  id: number;
  name: string;
  lastName: string;
  email: string;
  companyName: string;
  roleInCompany: string;
  companySize: string;
  active: ActiveStatus;
  provider: string;
  regDate: Date | string | number;
}
