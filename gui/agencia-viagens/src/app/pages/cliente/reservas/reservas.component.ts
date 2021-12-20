import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../../../../../../../commons/constants';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(Constants.RESERVAS_TITULO);
  }

}
