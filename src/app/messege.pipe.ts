import { Pipe, PipeTransform } from '@angular/core';
import { CommomMessegeService } from './commom-messege.service';

@Pipe({
  name: 'messege'
})
export class MessegePipe implements PipeTransform {
  constructor(private commomMessegeService: CommomMessegeService) {}

  transform(value: string, prefix: string): any {
    const msg = this.commomMessegeService.getMessege(value, prefix);
    return msg;
  }
}
