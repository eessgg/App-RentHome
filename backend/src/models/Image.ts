  
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import House from './House';

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => House, (house) => house.images)
  @JoinColumn({ name: "house_id" })
  house: House;
}