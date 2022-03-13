import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 Students: StudentInfo[] =[];
 constructor()
 {
   let s1 = new StudentInfo();
   s1.name = 'abdelrahman Tahhan';
   s1.email = 'abdelrahman@gmail.com';
   s1.grade = '5';
   s1.imgSrc = 'src\assets\qr-code.jpg';
  this.Students.push(s1);


  let s2 = new StudentInfo();
  s2.name = 'Ahmad Nakhal';
  s2.email = 'Ahmadnakhal@gmail.com';
  s2.grade = '5';
  s2.imgSrc = 'src\assets\qr-code.jpg';
 this.Students.push(s2);

 let s3 = new StudentInfo();
s3.name = 'AbdelWahhad kassab';
s3.email = 'AbdelWahad@gmail.com';
s3.grade = '5';
s3.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s3);


let s4 = new StudentInfo();
s4.name = 'Ali husseini';
s4.email = 'Alihusseini@gmail.com';
s4.grade = '5';
s4.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s4);


let s5 = new StudentInfo();
s5.name = 'Asaad Fahed';
s5.email = 'AsaadFahed@gmail.com';
s5.grade = '5';
s5.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s5);


let s6 = new StudentInfo();
s6.name = 'Banan Hamzeh';
s6.email = 'BananHamzeh@gmail.com';
s6.grade = '5';
s6.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s6);


let s7 = new StudentInfo();
s7.name = 'Bader Lababidi';
s7.email = 'BaderLababidi@gmail.com';
s7.grade = '5';
s7.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s7);


let s8 = new StudentInfo();
s8.name = 'Bilal Akkari';
s8.email = 'BilalAkkari@gmail.com';
s8.grade = '5';
s8.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s8);


let s9 = new StudentInfo();
s9.name = 'Charbel Maroun';
s9.email = 'CharbelMaroun@gmail.com';
s9.grade = '5';
s9.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s9);


let s10 = new StudentInfo();
s10.name = 'Christ Khoury';
s10.email = 'Christkhoury@gmail.com';
s10.grade = '5';
s10.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s10);


let s11 = new StudentInfo();
s11.name = 'Elie Awad';
s11.email = 'ElieAwad@gmail.com';
s11.grade = '5';
s11.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s11);


let s12 = new StudentInfo();
s12.name = 'Elio Helou';
s12.email = 'ElioHelou@gmail.com';
s12.grade = '5';
s12.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s12);


let s13 = new StudentInfo();
s13.name = 'Elissa Nakhoul';
s13.email = 'EissaNakhoul@gmail.com';
s13.grade = '5';
s13.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s13);


let s14 = new StudentInfo();
s14.name = 'Fady Khazzaka';
s14.email = 'Fadykhazzaka@gmail.com';
s14.grade = '5';
s14.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s14);


let s15 = new StudentInfo();
s15.name = 'Firas Wattar';
s15.email = 'FirasWattar@gmail.com';
s15.grade = '5';
s15.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s15);


let s16 = new StudentInfo();
s16.name = 'Ghassan Korhani';
s16.email = 'GhassanKorhani@gmail.com';
s16.grade = '5';
s16.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s16);


let s17 = new StudentInfo();
s17.name = 'Georges Chalfoun';
s17.email = 'GeorgesChalfoun@gmail.com';
s17.grade = '5';
s17.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s17);


let s18 = new StudentInfo();
s18.name = 'Hassan el Hassan';
s18.email = 'HassanHassan@gmail.com';
s18.grade = '5';
s18.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s18);

let s19 = new StudentInfo();
s19.name = 'Issa Tlaiji';
s19.email = 'IssaTlaiji@gmail.com';
s19.grade = '5';
s19.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s19);

let s20 = new StudentInfo();
s20.name = 'Jana Raad';
s20.email = 'JanaRaad@gmail.com';
s20.grade = '5';
s20.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s20);


let s21 = new StudentInfo();
s21.name = 'Joe el Kassis';
s21.email = 'JoeKassis@gmail.com';
s21.grade = '5';
s21.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s21);

let s22 = new StudentInfo();
s22.name = 'joelle Beyeh';
s22.email = 'JoelleBeyeh@gmail.com';
s22.grade = '5';
s22.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s22);

let s23 = new StudentInfo();
s23.name = 'Jimmy Njeim';
s23.email = 'JimmyNjeim@gmail.com';
s23.grade = '5';
s23.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s23);

let s24 = new StudentInfo();
s24.name = 'Joelle Ishak';
s24.email = 'JoelleIshak@gmail.com';
s24.grade = '5';
s24.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s24);


let s25 = new StudentInfo();
s25.name = 'Joseph Ibrahim';
s25.email = 'JosephIbrahim@gmail.com';
s25.grade = '5';
s25.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s25);

let s26 = new StudentInfo();
s26.name = 'Joseph Mouawwad';
s26.email = 'JosephMouawwad@gmail.com';
s26.grade = '5';
s26.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s26);

let s27 = new StudentInfo();
s27.name = 'Karim Najja';
s27.email = 'KarimNajjar@gmail.com';
s27.grade = '5';
s27.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s27);

let s28 = new StudentInfo();
s28.name = 'Karin iskandarani';
s28.email = 'Kariniskandarani@gmail.com';
s28.grade = '5';
s28.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s28);

let s29 = new StudentInfo();
s29.name = 'Koussay abdel kader';
s29.email = 'KoussayAbdelKader@gmail.com';
s29.grade = '5';
s29.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s29);

let s30 = new StudentInfo();
s30.name = 'Mahmoud Bathish';
s30.email = 'MahmoudBathish@gmail.com';
s30.grade = '5';
s30.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s30);

let s31 = new StudentInfo();
s31.name = 'Michel Saab';
s31.email = 'MichelSaab@gmail.com';
s31.grade = '5';
s31.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s31);

let s32 = new StudentInfo();
s32.name = 'Mira Saleh';
s32.email = 'MiraSaleh@gmail.com';
s32.grade = '5';
s32.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s32);

let s33 = new StudentInfo();
s33.name = 'Mhammad Mazloum';
s33.email = 'MhammadMazloum@gmail.com';
s33.grade = '5';
s33.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s33);

let s34 = new StudentInfo();
s34.name = 'Nastasia Loubnan';
s34.email = 'NastasiaLoubnan@gmail.com';
s34.grade = '5';
s34.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s34);


let s35 = new StudentInfo();
s35.name = 'Omar Rima';
s35.email = 'OmarRima@gmail.com';
s35.grade = '5';
s35.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s35);


let s36 = new StudentInfo();
s36.name = 'Omar Mbayyed';
s36.email = 'OmarMbayyed@gmail.com';
s36.grade = '5';
s36.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s36);

let s37 = new StudentInfo();
s37.name = 'Rabih Wehbeh';
s37.email = 'RabihWehbeh@gmail.com';
s37.grade = '5';
s37.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s37);

let s38 = new StudentInfo();
s38.name = 'Ralph Njeim';
s38.email = 'RalphNjeim@gmail.com';
s38.grade = '5';
s38.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s38);

let s39 = new StudentInfo();
s39.name = 'Rami Al Husseini';
s39.email = 'RamiAlHusseini@gmail.com';
s39.grade = '5';
s39.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s39);

let s40 = new StudentInfo();
s40.name = 'Rayan El Hassan';
s40.email = 'RayanElHassan@gmail.com';
s40.grade = '5';
s40.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s40);

let s41 = new StudentInfo();
s41.name = 'Roody Nehmeh';
s41.email = 'RoodyNehmeh@gmail.com';
s41.grade = '5';
s41.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s41);

let s42 = new StudentInfo();
s42.name = 'Saleh Mohsen';
s42.email = 'SalehMohsen@gmail.com';
s42.grade = '5';
s42.imgSrc = 'src\assets\qr-code.jpg';
this.Students.push(s42);

 }
}
class StudentInfo{
name : string = '';
email : string = '';
grade : string = '';
imgSrc : string = '';
}
