import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface Pokemon {
  value: string;
  viewValue: string;
}

export interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }
  show = '!';
  ngOnInit() {
  }
  pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'سرطان',
      pokemon: [
        {value: 'سرطان خون', viewValue: 'سرطان خون'},
        {value: 'سرطان روده', viewValue: 'سرطان روده'},
        {value: 'تومور', viewValue: 'تومور'}
      ]
    },
    {
      name: 'عصب',
      pokemon: [
        {value: 'ام اس', viewValue: 'ام اس'},
        {value: 'پارکینسون', viewValue: 'پارکینسون'},
        {value: 'روماتیسم', viewValue: 'روماتیسم'}
      ]
    },
    {
      name: 'قند',
      disabled: true,
      pokemon: [
        {value: 'دیابت', viewValue: 'دیابت'},
       
      ]
    },
    {
      name: 'کبد',
      pokemon: [
        {value: 'نارسایی کبد', viewValue: 'نارسایی کبد'},
        {value: 'هپاتیت', viewValue: 'هپاتیت'},
      ]
    }
  ];
}
