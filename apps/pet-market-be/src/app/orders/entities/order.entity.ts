import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { OrderStatus } from '../../../generated/prisma';
import { OrderItem } from './order-item.entity';

@ObjectType()
export class Order {
    @Field(() => ID)
    id!: String;

    @Field(() => [OrderItem])
    items!: OrderItem[];

    @Field(() => Float)
    totalAmount!: String;

    @Field(() => String)
    status!: OrderStatus;

    @Field(() => String, {nullable:true})
    paymentId!: string;

    @Field(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    updatedAt!: Date;
}
