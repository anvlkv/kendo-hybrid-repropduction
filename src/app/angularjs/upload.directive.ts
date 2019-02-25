import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'pre-file-import-overlay'
})
export class UploadDirective extends UpgradeComponent {

  constructor(
    ref: ElementRef<HTMLElement>,
    inj: Injector
  ) {
    super('preFileImportOverlay', ref, inj);
  }

}
