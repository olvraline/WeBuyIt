import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/backend/user.service';
import { __param } from 'tslib';


@Component({
  selector: 'app-cadastro-loja',
  templateUrl: './cadastro-loja.component.html',
  styleUrls: ['./cadastro-loja.component.scss']
})
export class CadastroLojaComponent {
  public formGroup: any;
  public id: string = `0`;
getFormControlStatus: any;
  public constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){
      this.formGroup = this.formBuilder.group({
      Name: ['', Validators.required,],
      Description: ['', Validators.required,],
      Cep: ['', Validators.required,],
      State: ['', Validators.required,],
      City: ['', Validators.required,],
      District: ['', Validators.required,],
      Street: ['', Validators.required,],
      Number: ['', Validators.required,],
      Complement: ['', Validators.required,],
      Phone: ['', Validators.required,],
      Cpf: ['', Validators.required,],
      Cnpj: ['', Validators.required,],
      })
    
      window.scrollTo(0,0);
    }
  
    onSubmit() {
      console.log(this.formGroup.value);
      
    
      if (!this.formGroup.valid) {  
        alert('Preencha Corretamente!');
        return;
      } else alert('Loja cadastrada com sucesso!')
    
    this.userService.postcadastroloja(this.formGroup.value).subscribe((result: any) => {
      this.router.navigate([``]);
    });
    
    
  }
  }