import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('User')
class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @PrimaryColumn()
  email: string;

  @Column()
  pw: string;

  @Column()
  nickname: string;

  @Column()
  userImage: string;

  @Column()
  createDate: Date;

  @Column()
  updateDate: Date;

  @Column()
  isActivity: boolean;
}

export default UserEntity;
