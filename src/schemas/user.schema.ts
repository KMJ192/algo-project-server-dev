import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class User {
  @Prop()
  email: string;

  @Prop()
  pw: string;

  @Prop()
  nickname: string;

  @Prop()
  userImage: string;

  @Prop()
  createDate: Date;

  @Prop()
  updateDate: Date;

  @Prop()
  isActivity: boolean;
}

type UserDocument = User & Document;
const UserSchema = SchemaFactory.createForClass(User);

export { UserDocument, UserSchema };
export default UserSchema;
