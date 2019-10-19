import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeanCanvasPageComponent } from './pages/lean-canvas-page/lean-canvas-page.component';


const routes: Routes = [{
  path: 'canvas',
  component: LeanCanvasPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupToolsRoutingModule { }
