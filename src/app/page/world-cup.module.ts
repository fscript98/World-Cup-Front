import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { WorldCupRoutingModule } from "./world-cup-routing.module";

import { WorldCupListComponent } from "./world-cup-list.component";


@NgModule({
  imports: [
    CommonModule,
    WorldCupRoutingModule
  ],
  exports: [],
  declarations: [
    WorldCupListComponent,
  ],
  providers: [],
})
export class WorldCupModule { }
