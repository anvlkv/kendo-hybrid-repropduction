import { NgModule } from '@angular/core';
import { UpgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import { UploadDirective } from './upload.directive';
import { CommonModule } from '@angular/common';

declare var angular;

setAngularJSGlobal(angular);

import './ajs.module.js';

@NgModule({
  imports: [
    CommonModule,
    UpgradeModule
  ],
  declarations: [
    UploadDirective
  ],
  exports: [
    UploadDirective
  ],
  providers: [
    { provide: '$scope', useExisting: '$rootScope' },
  ]
})
export class AngularjsModule {
  constructor(private upgrade: UpgradeModule) {
    this.upgrade.bootstrap(document.body, ['PreShared'], {strictDi: true});
  }
 }
