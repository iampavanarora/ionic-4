import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular'
import { TestComponent } from '../test/test.component'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
  constructor(private popover: PopoverController) {}

  openPopup = () => {
    const jobsPopup = this.popover.create({
        component: TestComponent,
        cssClass: 'jp-popups',
        backdropDismiss: false,
        translucent: true
    })

    jobsPopup.then((res)=> {
        res.present()
    })

  }

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
