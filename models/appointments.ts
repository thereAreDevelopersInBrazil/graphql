import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AppointmentsModel {
    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}