import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../star-wars.services';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSide = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'},
  ];
  swService: StarWarService;
  constructor(swService: StarWarService) {
    this.swService = swService;
   }

  ngOnInit() {
  }
  onSubmit(SubmittedForm) {
    if (SubmittedForm.invalid) {
      return;
    }
    console.log(SubmittedForm.value);
    this.swService.addCharacter(SubmittedForm.value.name, SubmittedForm.value.side);
  }

}
