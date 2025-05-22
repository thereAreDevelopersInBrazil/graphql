import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { AppointmentInput } from "../dtos/appointments";
import { AppointmentsModel } from "../models/appointments";
import { CustomerModel } from "../models/customer";

@Resolver(() => AppointmentsModel)
export class AppointmentsResolver {

    appointments: AppointmentsModel[] = [];

    @Query(() => [AppointmentsModel!])
    async getAllAppointments(): Promise<AppointmentsModel[]> {
        return this.appointments;
    }

    @Mutation(() => AppointmentsModel)
    async CreateAppointment(@Arg('data') data: AppointmentInput) {
        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt
        }
        this.appointments.push(appointment);
        return appointment;
    }

    @FieldResolver(() => CustomerModel)
    async customer(@Root() appointment: AppointmentsModel) {
        return {
            id: "1",
            name: "Natanael Felipe"
        }
    }

}