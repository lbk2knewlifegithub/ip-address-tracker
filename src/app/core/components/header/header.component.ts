import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="relative">
      <div>
        <img
          class="w-full min-h-[300px] object-cover object-center"
          src="/assets/images/pattern-bg.png"
          alt="Pattern"
        />
      </div>

      <nav
        class="container text-center absolute top-0 left-0 grid gap-6 place-content-center w-full mt-10 "
      >
        <!--    title-->
        <h1 class="text-inverted text-3xl font-bold">IP Address Tracker</h1>
        <!--    end title-->

        <!--  ip address or domain form-->
        <lbk-ip-or-domain-form class="block w-full "></lbk-ip-or-domain-form>
        <!-- end ip address or domain form-->
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
