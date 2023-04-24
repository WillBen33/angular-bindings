import { Skill } from './skill';

export class Developer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  bio: string;
  skill: Skill[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    bio: string,
    skill: Skill[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.bio = bio;
    this.skill = skill;
  }
}
