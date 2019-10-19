import { Component, OnInit } from '@angular/core';
import { LeanCanvas } from '../../models/lean-canvas';

@Component({
  selector: 'app-lean-canvas-form',
  templateUrl: './lean-canvas-form.component.html',
  styleUrls: ['./lean-canvas-form.component.sass']
})
export class LeanCanvasFormComponent implements OnInit {
  model = new LeanCanvas(null, '', '', '', '', '', '', '', '', '');

  constructor() { }

  ngOnInit() {
  }

  public dispModel(): string {
    return JSON.stringify(this.model);
  }

  public onSubmit(): void {
    console.log(this.dispModel());
  }
}
