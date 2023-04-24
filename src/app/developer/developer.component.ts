import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  skillImgSrcBaseUrl: string = "../../assets/";

  @Input() skillList: Skill[] = [
    new Skill("Angular", this.skillImgSrcBaseUrl + "angular-logo.png", "https://angular.io/"),
    new Skill("Java", this.skillImgSrcBaseUrl + "java-logo.png", "https://java.com/"),
    new Skill("Spring", this.skillImgSrcBaseUrl + "spring-logo.png", "https://spring.io/")
  ];

  developper: Developer = new Developer("Wilfrid", "Ben", 35, "M", "Junior WEB Developper", this.skillList);

}
