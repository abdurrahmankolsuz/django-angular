import {Tag} from './tag';

export class Post{
     short_content:string;
     content: string;
     created_date: Date;
     modified_date: Date;
     slug: string;
     is_active: Boolean;
     is_deleted: Boolean;
     tags: Array<Tag>; 
}