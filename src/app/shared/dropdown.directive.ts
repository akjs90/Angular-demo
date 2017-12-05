import { Directive, Input, HostListener, ElementRef, Renderer2, OnInit,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  
  @HostBinding('class.open') isOpen:boolean=false
  //toggleClass:boolean;
  constructor(private renderer:Renderer2, private elRef:ElementRef) { }

  ngOnInit(){
  
  }

  @HostListener('click') toggleClass(){
  	this.isOpen=!this.isOpen;
  }

  // @HostListener('click') onClickToggle(){
  // 	this.toggleClass=!this.toggleClass;
  // 	console.log(this.toggleClass);

  // 	if(this.toggleClass){
  // 		this.renderer.addClass(this.elRef.nativeElement,'open');
  // 	}
  // 	else{
  // 		this.renderer.removeClass(this.elRef.nativeElement,'open');
  // 	}
  // }
}
