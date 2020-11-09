import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { questions } from '../../assets/questionList';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface Subject {
  name: string;
}
interface Score {
  value: string;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Output() isSubmit = new EventEmitter<FormGroup>();

  visible = true;
  selectable = true;
  questionForm: FormGroup;
  responses_a = questions.responses.a;
  responses_b = questions.responses.b;
  QualityofExplanationsProvided_a = questions.QualityofExplanationsProvided.a;
  QualityofExplanationsProvided_b = questions.QualityofExplanationsProvided.b;
  private b1a = [];
  private b1b = [];
  private b2a = [];
  private b2b = [];
  private b3a = [];
  private b3b = [];
  private c1a = [];
  private c1b = [];
  private c2a = [];
  private c2b = [];
  private c3a = [];
  private c3b = [];

  scores: Score[] = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
  ];

  scores10: Score[] = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '10' },
  ];

  constructor(public fb: FormBuilder,private http:HttpClient, private httpBackEnd: HttpBackend ) {
    this.http = new HttpClient(httpBackEnd);
  }

  ngOnInit(): void {
    this.isSubmit.emit(this.questionForm);
    this.reactiveForm()
    let responses = questions.responses.a;
    // console.log(responses);

  }

  /* Reactive form */
  reactiveForm() {
    this.questionForm = this.fb.group({
      a11: ['', [Validators.required]],
      a12: ['', [Validators.required]],
      a13: ['', [Validators.required]],
      a14: ['', [Validators.required]],
      a21a: ['', [Validators.required]],
      a21b: ['', [Validators.required]],
      a23a: ['', [Validators.required]],
      a23b: ['', [Validators.required]],
      a31a: ['', [Validators.required]],
      a31b: ['', [Validators.required]],
      a32b: ['', [Validators.required]],
      a33a: ['', [Validators.required]],
      a33b: ['', [Validators.required]],
      a41a: ['', [Validators.required]],
      a41b: ['', [Validators.required]],
      a42b: ['', [Validators.required]],
      a43a: ['', [Validators.required]],
      a43b: ['', [Validators.required]],
      b1a: [''], b1b: [''], b2a: [''], b2b: [''], b3a: [''], b3b: [''],
      c1: ['', [Validators.required]],
      c2: ['', [Validators.required]],
      c3: ['', [Validators.required]],
      c1a: [''], c1b: [''], c2a: [''], c2b: [''], c3a: [''], c3b: [''],
      cx: ['', [Validators.required]],
      cy: ['', [Validators.required]],
      d1: ['', [Validators.required]],
      da1:  ['', [Validators.required]],
      da2:  ['', [Validators.required]],
      da3: ['', [Validators.required]],
      da41:  ['', [Validators.required]],
      da42:  ['', [Validators.required]],
      da43: ['', [Validators.required]],
    });
    
  }

  getListData(item, value, id) {
    switch (id) {
      case 'b1a':
        if (this.b1a?.find(x => x.name == item)) {
          let tempItem = this.b1a?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.b1a.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'b1b':
        if (this.b1b?.find(x => x.name == item)) {
          let tempItem = this.b1b?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.b1b.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'b2a':
        if (this.b2a?.find(x => x.name == item)) {
          let tempItem = this.b2a?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.b2a.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'b2b':
        if (this.b2b?.find(x => x.name == item)) {
          let tempItem = this.b2b?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.b2b.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'b3a':
        if (this.b3a?.find(x => x.name == item)) {
          let tempItem = this.b3a?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.b3a.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'b3b':
        if (this.b3b?.find(x => x.name == item)) {
          let tempItem = this.b3b?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.b3b.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'c1a':
        if (this.c1a?.find(x => x.name == item)) {
          let tempItem = this.c1a?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.c1a.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'c1b':
        if (this.c1b?.find(x => x.name == item)) {
          let tempItem = this.c1b?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.c1b.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'c2a':
        if (this.c2a?.find(x => x.name == item)) {
          let tempItem = this.c2a?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.c2a.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'c2b':
        if (this.c2b?.find(x => x.name == item)) {
          let tempItem = this.c2b?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.c2b.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'c3a':
        if (this.c3a?.find(x => x.name == item)) {
          let tempItem = this.c3a?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.c3a.push({
            name: item,
            value: value
          }
          );
        }
        break;
      case 'c3b':
        if (this.c3b?.find(x => x.name == item)) {
          let tempItem = this.c3b?.find(x => x.name == item);
          tempItem.value = value;
        } else {
          this.c3b.push({
            name: item,
            value: value
          }
          );
        }
        break;

    }
  }

  submitForm() {
    var uid = this.generateUniqueId();

    var inputText = this.questionForm.get('a11').value + ';' + this.questionForm.get('a12').value + ';' + this.questionForm.get('a13').value + ';' + this.questionForm.get('a14').value
    + ';' +  this.questionForm.get('a21a').value  + ';' +  this.questionForm.get('a21b').value  + ';' +  this.questionForm.get('a23a').value + ';' + this.questionForm.get('a23b').value
    + ';' +  this.questionForm.get('a31a').value  + ';' +  this.questionForm.get('a31b').value  + ';' +  this.questionForm.get('a33a').value + ';' + this.questionForm.get('a33b').value
    + ';' +  this.questionForm.get('a41a').value  + ';' +  this.questionForm.get('a41b').value  + ';' +  this.questionForm.get('a43a').value + ';' + this.questionForm.get('a43b').value
    + ';' + this.b1a?.map(x => x.value).join(',')  + ';' + this.b1b?.map(x => x.value).join(',')  + ';' + this.b2a?.map(x => x.value).join(',') + ';' +this.b2b?.map(x => x.value).join(',')  + ';' + this.b3a?.map(x => x.value).join(',')  + ';' + this.b3b?.map(x => x.value).join(',')   
    + ';' +  this.questionForm.get('c1').value + ';' +  this.questionForm.get('c2').value + ';' +  this.questionForm.get('c3').value 
    + ';' + this.c1a?.map(x => x.value).join(',')   + ';' + this.c1b?.map(x => x.value).join(',')  + ';' +this.c2a?.map(x => x.value).join(',')+ ';' + this.c2b?.map(x => x.value).join(',')  + ';' +this.c3a?.map(x => x.value).join(',') + ';' + this.c3b?.map(x => x.value).join(',')
    + ';' +  this.questionForm.get('cx').value  + ';' +  this.questionForm.get('cy').value
    + ';' +  this.questionForm.get('d1').value  + ';' +  this.questionForm.get('da1').value + ';' +  this.questionForm.get('da2').value + ';' +  this.questionForm.get('da3').value
    + ';' +  this.questionForm.get('da41').value + ';' +  this.questionForm.get('da42').value + ';' +  this.questionForm.get('da43').value
  
    console.log(inputText);
   // if(!this.questionForm.valid){
      this.isSubmit.emit(this.questionForm);
      this.SaveUserEvaluationData(uid + ';'+ inputText).subscribe(data => {
        console.log(data);
      }, error =>{
        console.log("Error in saving Evaluation Data");
      });
   // }

  }

  ValidationService(){

  }

  SaveUserEvaluationData(userValue){
    return this.http.post<Object> ("https://fiction-app.herokuapp.com/" + "userEvaluationData", userValue);
  }

     //Fucntion to generate unique session Id based on date and time
      
     generateUniqueId(){
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
      });
      return uuid;
    }

}
