import { NgModule } from '@angular/core';
import { UpgradeModule, setAngularJSGlobal, downgradeComponent } from '@angular/upgrade/static';
import { UploadDirective } from './upload.directive';
import { CommonModule } from '@angular/common';

declare var angular;

setAngularJSGlobal(angular);

import './ajs.module.js';
import { ComboWrapperComponent } from './combo-wrapper/combo-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    UpgradeModule
  ],
  declarations: [
    UploadDirective,
    ComboWrapperComponent
  ],
  exports: [
    UploadDirective
  ],
  providers: [
    { provide: '$scope', useExisting: '$rootScope' },
  ],
  entryComponents: [
    ComboWrapperComponent
  ]
})
export class AngularjsModule {
  constructor(private upgrade: UpgradeModule) {
    angular.module('PreShared').directive('appComboWrapper', downgradeComponent({component: ComboWrapperComponent}));
    this.upgrade.bootstrap(document.body, ['PreShared'], {strictDi: true});
  }
 }
