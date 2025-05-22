import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CustomerModel {

    @Field()
    id: string

    @Field()
    name: string

}