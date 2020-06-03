import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(mydata:any, searchTerm: string) {
    if(!mydata || !searchTerm){
        return mydata;
    }

return mydata.filter(mydata =>
mydata.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
}
}