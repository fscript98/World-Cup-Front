import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldCupListComponent } from './world-cup-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: WorldCupListComponent,
    data: {
      title: 'Page'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldCupRoutingModule { }
