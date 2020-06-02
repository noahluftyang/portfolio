import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any) {
    const _value = parseInt(value, 10);

    if (isNaN(_value)) {
      throw new BadRequestException('Validation failed');
    }

    return _value;
  }
}
