
import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector
} from '@angular/core';
import {
  ComponentType,
  Portal,
  ComponentPortal,
  DomPortalHost
} from '@angular/cdk/portal';
import { StickyComponentComponent } from '../sticky-component/sticky-component.component';

@Injectable()
export class LoadingStickyService {

  // 1. Reference to our Portal.
  //    This is the portal we'll use to attach our LoadingSpinnerComponent.
  private loadingSpinnerPortal: ComponentPortal<StickyComponentComponent>;

  // 2. Reference to our Portal Host.
  //    We use DOMPortalHost as we'll be using document.body as our anchor.
  private bodyPortalHost: DomPortalHost;

  // 3. Inject the dependencies needed by the DOMPortalHost constructor
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {

      // 4. Create a Portal based on the LoadingSpinnerComponent
      this.loadingSpinnerPortal = new ComponentPortal(StickyComponentComponent);

      // 5. Create a PortalHost with document.body as its anchor element
     
  }

  reveal() {

    this.bodyPortalHost = new DomPortalHost(
      document.body,
      this.componentFactoryResolver,
      this.appRef,
      this.injector);
    // 6. Attach the Portal to the PortalHost.
    this.bodyPortalHost.attach(this.loadingSpinnerPortal);
  }

  hide() {
    // 7. Detach the Portal from the PortalHost
    this.bodyPortalHost.detach();
  }
}
