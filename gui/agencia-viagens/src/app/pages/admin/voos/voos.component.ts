import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../../../../../../../commons/constants';

@Component({
  selector: 'app-voos',
  templateUrl: './voos.component.html',
  styleUrls: ['./voos.component.css']
})
export class VoosComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(Constants.VOOS_TITULO);
  }

}
