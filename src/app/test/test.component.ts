import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {

  testData = [
    {
      name: 'pawan'
    },
    {
      name: 'aman'
    },
    {
      name: 'liam'
    },
    {
      name: 'test'
    },
    {
      name: 'annamt'
    },
    {
        name: 'test'
    },
    {
        name: 'pawan'
    },
    {
        name: 'pawan'
    },
    {
        name: 'test'
    },
    {
        name: 'pawan'
    },
    {
        name: 'pawan'
    }
]
  constructor() { }

    loadMoreData = () => {
        this.testData.push(
            {
                name: 'test'
            },
            {
                name: 'pawan'
            },
            {
                name: 'pawan'
            }
        )
    }

}
