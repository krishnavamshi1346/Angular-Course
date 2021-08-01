import { Component } from "@angular/core";

@Component({
    selector:'app-warning-alert',
    template:`
    <p>This is Warning alert.You are in Danger!!!</p>
    `,
    styles:[
        `
    p{
        padding:20px;
        background-color:mistyrose;
        border:1px solid red;
    }
    `
    ]
})
export class WarningAlertComponent{

}