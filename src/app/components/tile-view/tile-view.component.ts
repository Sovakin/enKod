import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../../city.model';

@Component({
  selector: 'app-tile-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile-view.component.html',
  styleUrls: ['./tile-view.component.css']
})
export class TileViewComponent {
  @Input() cities: City[] = [];
  @Output() toggleFavorite = new EventEmitter<number>();
}
