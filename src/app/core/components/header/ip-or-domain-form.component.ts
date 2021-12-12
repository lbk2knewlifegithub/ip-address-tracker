import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lbk-ip-or-domain-form',
  template: `
    <form>
      <input
        (keydown.enter)="$event.preventDefault(); onTracking()"
        [formControl]="ipFormControl"
        type="text"
        placeholder="Search for any IP adress or domain"
      />

      <!--      arrow right-->
      <div lbkAutoClick (click)="onTracking()" class="cover flex-center-column">
        <img
          *ngIf="!isTracking; else loading"
          src="/assets/images/icon-arrow.svg"
          alt="Arrow"
        />
        <ng-template #loading>
          <lbk-simple-circular-loading></lbk-simple-circular-loading>
        </ng-template>
      </div>
      <!--      end arrow right-->
    </form>
  `,
})
export class IpOrDomainFormComponent {
  ipFormControl = new FormControl('google.com', [Validators.required]);

  onTracking(): void {
    // if (this.ipFormControl.errors?.required) return;

    // const query = this.ipFormControl.value as string;

    // // when ip v4
    // if (ipv4Regex.test(query)) {
    //   this._search({ ipAddress: query });
    //   // perform tracker using ip
    //   return;
    // }

    // // when domain
    // // perform tracker using domain
    // this._search({ domain: query });
  }
}
