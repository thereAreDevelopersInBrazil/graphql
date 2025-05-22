import { Field, InputType } from "type-graphql";

@InputType()
export class AppointmentInput {
    @Field()
    customerId: string;

    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}