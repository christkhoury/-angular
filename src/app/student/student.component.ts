import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() name =('chris') //i decorate this componet with @Input so app.componet.html can use it to name the students for ex
  @Input() email ='christkhoury87@gmail.com'
  @Input() grade = '3.5'
test(){
  alert(this.name)
}
constructor(){
  //alert(ana l constructor)
}
}