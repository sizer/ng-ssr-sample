import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupToolsRoutingModule } from './startup-tools-routing.module';
import { LeanCanvasPageComponent } from './pages/lean-canvas-page/lean-canvas-page.component';


@NgModule({
  declarations: [LeanCanvasPageComponent],
  imports: [
    CommonModule,
    StartupToolsRoutingModule
  ]
})
export class StartupToolsModule { }
