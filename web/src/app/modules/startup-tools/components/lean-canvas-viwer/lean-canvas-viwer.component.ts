import { Component, OnInit, Input } from '@angular/core';
import { LeanCanvas } from '../../models/lean-canvas';

@Component({
  selector: 'app-lean-canvas-viwer',
  templateUrl: './lean-canvas-viwer.component.html',
  styleUrls: ['./lean-canvas-viwer.component.sass']
})
export class LeanCanvasViwerComponent implements OnInit {
  @Input() canvas: LeanCanvas;
  constructor() { }

  ngOnInit() {
  }

}
