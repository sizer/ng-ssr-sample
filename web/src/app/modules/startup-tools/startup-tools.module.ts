import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StartupToolsRoutingModule } from './startup-tools-routing.module';
import { LeanCanvasPageComponent } from './pages/lean-canvas-page/lean-canvas-page.component';
import { LeanCanvasFormComponent } from './components/lean-canvas-form/lean-canvas-form.component';


@NgModule({
  declarations: [LeanCanvasPageComponent, LeanCanvasFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    StartupToolsRoutingModule
  ]
})
export class StartupToolsModule { }
