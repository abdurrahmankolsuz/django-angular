import { Injectable,Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            let filter = input.toString().toLowerCase();
           return filter ? value.filter(post=> post.title.toLocaleLowerCase().indexOf(filter) != -1 || post.body.toLocaleLowerCase().indexOf(filter) != -1) : value;  
        }
        else
             return value;
    }
}