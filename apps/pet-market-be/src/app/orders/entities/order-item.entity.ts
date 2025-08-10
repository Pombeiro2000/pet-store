import { Field, Int, Float, ObjectType } from "@nestjs/graphql";
import { Product } from "../../products/entities/product.entity";

@ObjectType()
export class OrderItem {
    @Field(() => String)
    id!: String;

    @Field(() => Int)
    quantity!: number;

    @Field(() => Float)
    price!: String;

    @Field(() => Product)
    product!: Product;

    @Field(() => String)
    productId!: string;

    @Field(() => String)
    orderId!: string;
}