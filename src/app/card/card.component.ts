import { Component, OnInit } from '@angular/core';

export interface Person{
  name: string,
  race: string,
  description: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  cards: Person[] = [
    {name: 'Фродо', race: 'хоббит', description: 'кольценоситель'},
    {name: 'Гендальф', race: 'айнур', description: 'Ты не пройдешь!'},
    {name: 'Арагорн', race: 'человек-дунэдайн', description: 'король Гондора'}
  ]


  // constructor() { }

  // ngOnInit(): void {
  // }

}
