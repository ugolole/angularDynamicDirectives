import {
  Component,
  ComponentRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetComponent } from './components/widget/widget.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgComponentOutlet],
})
export class AppComponent {
  title = 'angularDynamicDirectives';

  // Reference the container in the template
  @ViewChild('container', { read: ViewContainerRef, static: true })
  vcr!: ViewContainerRef;

  protected component: Type<WidgetComponent> | null = null;
  protected componentInputs = {
    title: 'Good morning',
    description: 'Thursday is a good day to learn Angular',
  };

  createComponent() {
    this.component = WidgetComponent;
  }

  destroyComponent() {
    this.component = null;
  }
}
