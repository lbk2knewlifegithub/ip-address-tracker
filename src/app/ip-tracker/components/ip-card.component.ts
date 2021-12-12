import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ip } from '../models/ip.model';

@Component({
  selector: 'lbk-ip-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <!--  ip address-->
      <li>
        <p>ip address</p>
        <h3>{{ ip.v4 }}</h3>
      </li>
      <!--  end ip address-->

      <!--  location-->
      <li>
        <p>location</p>
        <h3>{{ ip.location }}</h3>
      </li>
      <!--  end location-->

      <!--  timezone-->
      <li>
        <p>timezone</p>
        <h3>{{ ip.timezone }}</h3>
      </li>
      <!--  end timezone-->

      <!--  isp-->
      <li>
        <p>isp</p>
        <h3>{{ ip.isp }}</h3>
      </li>
      <!--  end isp-->
    </ul>
  `,
  styles: [
    `
      ul {
        @apply bg-fill shadow-lg rounded-xl p-6 grid  text-center gap-6
        tablet:text-left tablet:divide-x tablet:divide-gray-300 tablet:grid-cols-4 tablet:items-start;

        li {
          @apply tablet:pl-6 tablet:first:pl-0;

          p {
            @apply uppercase text-muted text-sm font-black tracking-wider;
          }

          h3 {
            @apply font-black text-lg tracking-wide;
          }
        }
      }
    `,
  ],
})
export class IpCardComponent {
  @Input('ip') ip!: Ip;
}
