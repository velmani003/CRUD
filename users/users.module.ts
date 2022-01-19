import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UsersRepository } from "./users.repository";
import { User, userSchema } from "./schemas/user.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository]
})
export class UsersModule{}