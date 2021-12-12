import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ipOrDomainValidator } from '../../validators';

@Component({
  selector: 'lbk-ip-or-domain-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form
      (ngSubmit)="onSubmit($event)"
      [formGroup]="form"
      class=" relative flex rounded-xl shadow-lg  overflow-hidden w-full"
    >
      <!-- input -->
      <input
        #input
        class="border-none h-full text-base py-4 pl-4 pr-20 w-full"
        formControlName="ipOrDomain"
        type="text"
        placeholder="Search for any IP adress or domain"
      />
      <!-- end input -->

      <button
        type="submit"
        class="absolute right-0 px-6 h-full bg-dark grid place-content-center place-items-center"
      >
        <!--      arrow right-->
        <img
          *ngIf="!(searching$ | async); else loading"
          src="/assets/images/icon-arrow.svg"
          alt="Arrow"
        />
        <!--      end arrow right-->

        <!-- circle loading -->
        <ng-template #loading>
          <lbk-circle-loading-small></lbk-circle-loading-small>
        </ng-template>
        <!-- end circle loading -->
      </button>
    </form>

    <!-- errors -->
    <div class="text-red-500 font-semibold italic text-left">
      <!-- required -->
      <p
        *ngIf="ipOrDomainFormControl.touched && ipOrDomainFormControl.errors?.['required']"
        class=""
      >
        Ip or domain is required.
      </p>
      <!-- end required -->

      <!-- ipv4 or domain invalid -->
      <p
        *ngIf="ipOrDomainFormControl.touched && ipOrDomainFormControl.errors?.['ipv4OrDomain']"
      >
        Please enter a valid ip or domain.
        <br />
        Example: 192.168.1.1 or example.com
      </p>
      <!-- end ipv4 or domain invalid -->
    </div>
    <!-- end errors -->
  `,
})
export class IpOrDomainFormComponent {
  ipOrDomainFormControl = new FormControl('', [
    Validators.required,
    ipOrDomainValidator,
  ]);

  form = new FormGroup({
    ipOrDomain: this.ipOrDomainFormControl,
  });

  searching$!: Observable<boolean>;
  @Output() search = new EventEmitter<string>();

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.ipOrDomainFormControl.invalid) return;
    this.search.emit(this.ipOrDomainFormControl.value);
  }
}
