import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  standalone: false,
})
export class WidgetComponent {
  title = input('__Widget__');
  description = input('__Widget description__');

  closed = output<void>();
}
