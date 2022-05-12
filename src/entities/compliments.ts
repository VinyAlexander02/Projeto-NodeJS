import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tag } from "./Tag";
import { USer } from "./User";
 
@Entity("compliments")
class Compliment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @JoinColumn({name: "user_sender"})
  @ManyToOne(() => USer)
  userSender: USer

  @Column()
  user_receiver: string;

  @JoinColumn({name: "user_receiver"})
  @ManyToOne(() => USer)
  userReceiver: USer

  @Column()
  tag_id: string;

  @JoinColumn({name: "tag_id"})
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };
