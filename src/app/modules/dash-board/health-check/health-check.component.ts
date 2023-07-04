import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
  showBody: Boolean = false;
  changeShowBody() {
    if (this.showBody === false) {
      this.showBody = true;
    } else if (this.showBody === true) {
      this.showBody = false;
    }
  }
  healthCheck: any = [
    [
      {
        color1: 'gray',
        color2: 'gray',
        color3: 'gray',
        color4: 'gray',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        level: '1',
      },
      {
        color1: 'gray',
        color2: 'gray',
        color3: 'gray',
        color4: 'gray',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        level: '1',
      },
      {
        color1: 'gray',
        color2: 'gray',
        color3: 'gray',
        color4: 'gray',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        level: '1',
      },
      {
        color1: 'gray',
        color2: 'gray',
        color3: 'gray',
        color4: 'gray',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        level: '1',
      },
    ],
    [
      {
        color1: 'gray',
        color2: 'gray',
        color3: 'gray',
        color4: 'gray',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        level: '1',
      },
      {
        color1: 'gray',
        color2: 'gray',
        color3: 'gray',
        color4: 'gray',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        level: '1',
      },
      {
        color1: 'gray',
        color2: 'gray',
        color3: 'gray',
        color4: 'gray',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        level: '1',
      },
      {
        color1: 'gray',
        color2: 'gray',
        color3: 'gray',
        color4: 'gray',
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        level: '1',
      },
    ],
    [
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
    ],
    [
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
    ],
    [
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
      {
        color1: 'red',
        color2: 'yellow',
        color3: 'greenyellow',
        color4: 'dodgerblue',
        number1: '1',
        number2: '2',
        number3: '3',
        number4: '1',
        level: '2',
      },
    ],
  ];

}