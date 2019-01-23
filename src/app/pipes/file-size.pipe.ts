import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value >= 1024 * 1024) {
            return (value / (1024 * 1024)).toFixed(2) + ' Mb';
        } else if (value >= 1024) {
            return (value / 1024 ).toFixed(2) + ' Kb';
        } else {
            return value + ' b';
        }
    }

}
