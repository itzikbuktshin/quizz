import { Component, Input, OnInit } from '@angular/core';
import { fadeInOutAnimationFunc } from '../animations/angular.animations';

export type AvatarShape = 'rectangle' | 'circle';

@Component({
  selector: 'marvel-avatar',
  templateUrl: './avatar.component.html',
  animations: [fadeInOutAnimationFunc('fadeInOutTrigger', 100)],
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() 
  set avatarWord(words:string){
    if(!words) {
      this.setDaefaultCharacters();
    }
    else {
      const [first, seconde] =  words.split('');
      this.avatarCharacters = `${first}${seconde||first}`.toLocaleUpperCase();
    }
  }
  @Input() label : string = '';
  @Input() src : any = '';
  @Input() fontSize : number = 35;
  @Input() shape : AvatarShape = 'rectangle';
  @Input() editIcon: boolean = false;
  @Input() editIconSize: number = 30;

  defaultImage:boolean = false;
  showEditIcon: boolean = false;
  avatarCharacters :string ='';
  
  constructor() { }

  ngOnInit() {
    this.setDaefaultCharacters();
  }

  private setDaefaultCharacters(){
    this.avatarCharacters = Math.random().toString(36).slice(-2)?.toLocaleUpperCase();
  }

  handleSelectPicture(pictures:any){
    const picture = pictures.item(0);
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => {
      this.src = reader.result;
      this.defaultImage = false;
    }
  }
  handleSelectPictureError(e:any){
    this.defaultImage = true;
  }
  handleMissingImage(e:any){
    this.defaultImage = true;
  }
}