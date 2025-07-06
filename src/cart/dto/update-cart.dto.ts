import { PartialType } from '@nestjs/swagger';
import { CreateCartDTO } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDTO) {}
