import {Tag} from './tag';

export class Post{
     content: string;
     created_date: Date;
     modified_date: Date;
     slug: string;
     is_active: Boolean;
     is_deleted: Boolean;
     tags: Array<Tag>; 
}