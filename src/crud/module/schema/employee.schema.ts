import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type employeeDocument = Employee & Document

@Schema()
export class Employee{

    @Prop()
    name:String

    @Prop()
    age:Number
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)