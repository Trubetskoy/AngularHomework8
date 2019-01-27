import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDoFilter'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (args) {
        let fileredToDo = value.filter ((toDo) => {
          if (toDo.status === args) {
            return true
          } 
        })
        return fileredToDo
      }
      else {
        return value;
      }
  }
}
