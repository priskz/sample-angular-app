import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'millionize'
})

export class MillionizePipe implements PipeTransform
{
    transform(value: number): any
    {
        return value * 1000000;
    }
}
