import { Component } from '@angular/core';
import { UserService } from 'src/app/backend/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload'; 
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  private id: string = '';
  public formGroup: any;
  
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private msg: NzMessageService,
  ) {

    this.id = localStorage.getItem('id') || '0';
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      cep: ['', Validators.required],
      email: ['', Validators.required],
    })
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.initUpdate();
      window.scrollTo(0,0);
    })
  }

  public initUpdate() {
    this.userService.getByIdUser(this.id).subscribe((result: any) => {
      this.formGroup.patchValue(result);
    })
  }

  public submit() {
    if (!this.formGroup.valid) {
      alert("Inválido");
      return;
    }
    this.userService.update({
      id: this.id,
      ...this.formGroup.value
    }
    ).subscribe((result: any) => {
    })
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
    this.formGroup.get('file').setValue(info.file.response.data.path);
  }
}
