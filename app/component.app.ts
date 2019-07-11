import { Component } from "@angular/core";

@Component({
    selector: 'app',
    templateUrl: "./app/component.app.html",
    styleUrls:['./app/component.app.css']
})

export class AppComponent{
    name:string;
    artists:any;

    constructor(){
        this.name="Jim Owens"
        this.artists=[
            {
                name:"Barot Bellingham",
                school: "Penn State"
            },
            {
                name: "Jonathan Ferrar",
                school:"Florida State"
            },
            {
                name: "Hillary Post",
                school: "UGA"
            },
        ]
    }

};