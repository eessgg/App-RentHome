import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from '../models/Image'

@Entity("houses")
export default class House {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  dono: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  details: string;

  @Column()
  phonenumber: number;

  @OneToMany(() => Image, (image) => image.house, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: "image_id" })
  images: Image[];
}