import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-circle-loading-small',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="w-8 h-8 rounded-full border-b-4 border-red-600 border-t-4 animate-spin"
    ></div>
  `,
})
export class CircleLoadingSmallComponent {}
