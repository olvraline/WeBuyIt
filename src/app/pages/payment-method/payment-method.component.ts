import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDto } from 'src/app/backend/DTO/payment.dto';
import { UserService } from 'src/app/backend/user.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent  {
  public formGroup: FormGroup;
  public id: string = `0`;
paymentform: any;


   public constructor(
    private formBuilder: FormBuilder,
    
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ) {
    this.formGroup = this.formBuilder.group({
      namePayment: ['', Validators.required],
      cpfP: ['', Validators.required],
      numbercard: ['', Validators.required],
      cvv: ['', Validators.required],
      expiringmonth: ['', Validators.required],
      expiringdate: ['', Validators.required],
    });

    window.scrollTo(0,0);
  }
   
    public submit() {
      if (!this.formGroup.valid) {
        alert('Preencha corretamente!');
        return;
      } else alert ('Cartão adicionado com sucesso!')
    
      const paymentdto: PaymentDto = {
        CPF: this.formGroup.get("cpfP")?.value,
        TITULAR_NAME: this.formGroup.get("namePayment")?.value,
        NUMBER: this.formGroup.get("numbercard")?.value,
        CVV: this.formGroup.get("cvv")?.value,
        EXPIRING_DATE: this.formGroup.get("expiringdate")?.value,
        EXPIRING_DATE_MONTH: this.formGroup.get("expiringmonth")?.value
      }

      this.userService.postcadastrocartao(paymentdto).subscribe({
        next: (result:any) => {
          console.log("Criado",paymentdto)
          this.router.navigate([``]);
        }, error:(err:any) => {
          console.log("Erro",err)
        }
      })
       
     
      
    }

  }
