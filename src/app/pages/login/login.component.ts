import { ResourceLoader } from '@angular/compiler';
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/backend/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm:any;
  
  public constructor(
    private LoginService: UserService,
    @Inject(Router) private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ){
    this.loginForm=this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }

  public submit() {
    if(!this.loginForm.valid){
      alert("Login Inválido! :(")
      return
    }
    this.LoginService.login(this.loginForm.value).subscribe((result:any)=>{
      console.log(result)
      localStorage.setItem('id', result.user.id);
      this.router.navigate([`user`]);
    }, (err: any) => {
      alert("Login Inválido!")
      console.log(err);
    })
  }
}
