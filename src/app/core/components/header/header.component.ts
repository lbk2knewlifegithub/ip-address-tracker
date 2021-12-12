import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="flex-center-column">
      <nav class="flex-center-column">
        <!--    title-->
        <h1>IP Address Tracker</h1>
        <!--    end title-->

        <!--  ip address or domain form-->
        <!-- end ip address or domain form-->
      </nav>
    </header>
  `,
})
export class HeaderComponent {

}
