import { Component } from "@angular/core";

@Component({
    selector: 'app',
    templateUrl: "./app/component.app.html",
    styleUrls:['./app/component.app.css']
})

export class AppComponent{
    name:string;
    artists:any;

    onClick(myItem, myContainer){
        event.preventDefault;
        this.name=myItem.name;
        myContainer.style.backgroundColor="#FECE4E"
        // console.log(myContainer);
    }

    addArtist(value){
        console.log(value);
        if (value!==""){
            this.artists.push({
                name:value,
                school:"Hard Knocks"
            })
        }
    }

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