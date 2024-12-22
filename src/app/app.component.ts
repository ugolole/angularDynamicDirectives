import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetComponent } from './components/widget/widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'angularDynamicDirectives';

  // Reference the container in the template
  @ViewChild('container', { read: ViewContainerRef, static: true })
  vcr!: ViewContainerRef;

  #componentRef?: ComponentRef<WidgetComponent>;

  createComponent() {
    if (this.vcr) {
      this.#componentRef = this.vcr.createComponent(WidgetComponent);
      this.#componentRef.setInput('title', 'weather');
      this.#componentRef.setInput('description', 'weather in hamilton');

      this.#componentRef.instance.closed.subscribe(() => {
        this.#componentRef?.destroy();
      });
    }
  }

  destroyComponent() {
    if (this.vcr) {
      this.vcr.clear();
    }
  }
}
