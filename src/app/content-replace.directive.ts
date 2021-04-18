import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[replace]',
    providers: [],
})
export class ContentReplaceDirective implements OnInit {
    @Input() copyValue: string;


    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit(): void {} 

    @HostListener('click', ['$event']) onClick(event) {

        event.preventDefault();
        // this.clipboardService.doCopy(this.copyValue);
        
        this.doSpecial(this.copyValue);
    }


    private doSpecial(input: string) {
        
      let originalContent: string = this.elementRef.nativeElement.innerHTML;
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', input);
      setTimeout(() => {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', originalContent);
      }, 2000);
      
    }
}
