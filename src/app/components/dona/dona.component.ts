import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent{

  @Input() title = "Sin titulo";
  @Input() data: any;
  @Input() labels: any;

  public colors:Color[] = [
    {backgroundColor: ['#9E120E', '#FF5800', '#ffB414']}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
