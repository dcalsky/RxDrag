import { IPage } from 'base/IPage';
import { IAuth } from 'base/IAuth';


export interface IModule {
  id: number;
  slug: string;
  title: string;
  pages?: IPage[];
  indexPageId?: number;
  auths?: IAuth[];
}
