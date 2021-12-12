import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ip } from '../models/ip.model';

@Component({
  selector: 'lbk-ip-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="card">
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
})
export class IpCardComponent {
  @Input('ip') ip!: Ip;
}
