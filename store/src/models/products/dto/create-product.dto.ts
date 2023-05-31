import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Tuna', description: 'Название' })
  name: string;

  @ApiProperty({
    example: '999',
    description: 'Цена',
  })
  price: number;

  @ApiProperty({
    example: 'Рыба',
    description: 'Описание',
  })
  description: string;
}
