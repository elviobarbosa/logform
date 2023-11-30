import { KeyValueEnum } from "../types/general";

export enum CustomerEnum {
  MARK_SNOWMAN = 'Mark Snowman',
  JACK_SUNRISE = 'Jack Sunrise'
}

export enum InvestorTypeEnum {
  INVESTOR = 'Investor',
  OTHER = 'Other'
}

export enum IvenstimentEnum {
  PRO = '1.5% profity',
  COMMUN = '0.5% commum'
}

export const CustomerList: KeyValueEnum[] = Object.entries(CustomerEnum).map(([key, value]) => ({key, value}));
export const InvestorList: KeyValueEnum[] = Object.entries(InvestorTypeEnum).map(([key, value]) => ({key, value}));
export const IvenstimentList: KeyValueEnum[] = Object.entries(IvenstimentEnum).map(([key, value]) => ({key, value}));
