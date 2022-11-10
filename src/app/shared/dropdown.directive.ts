import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit{

    btn:any;
    dropdownMenu:any;

    constructor(private elementRef:ElementRef){}
    
    ngOnInit(): void {
        this.btn = this.elementRef.nativeElement.querySelector('.dropdown-toggle');
        this.dropdownMenu = this.elementRef.nativeElement.querySelector('.dropdown-menu');

        this.btn.addEventListener('click',()=>{
            this.dropdownMenu.classList.toggle('show');
        })

        this.dropdownMenu.addEventListener('click',()=>{
            this.dropdownMenu.classList.remove('show');
        })
    }
}