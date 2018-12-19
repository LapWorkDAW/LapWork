import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
  /* TODO --> add app.js */
})
export class AppComponent {
  projects = [{
    idProject: "1",
    creator: "Mireia Colomer",
    name: "Marver Character Creation",
    desc: "This project consists in the creation for a movie.",
    type: "Tech",
    dateStart: "10/12/2018",
    dateFinish: "29/06/2018",
    img: "",
    projectStatus: ""
    /* likes:"" */
  }, {
    idProject: "2",
    creator: "Mireia Colomer",
    name: "Framework Creation",
    desc: "This project consists in the creation for our webpage framework",
    type: "Tech",
    dateStart: "10/12/2018",
    dateFinish: "29/06/2018",
    img: "",
    projectStatus: ""
    /* likes:"" */
  }];
  project = {
    idProject: "",
    creator: "",
    name: "",
    desc: "",
    type: "",
    dateStart: "",
    dateFinish: "",
    img: "",
    projectStatus: ""
    /* likes:"" */
  };


}
