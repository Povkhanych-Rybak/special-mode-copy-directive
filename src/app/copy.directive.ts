import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[copy]',
    providers: [],
})
export class CopyDirective implements OnInit {
    @Input() copyValue: string;
    @Input() parent: string;

    @Input() mode: string = CopyMode.Special;
    @Input() tooltipPosition: string = 'top';       // supports only 'top' and 'bottom' position

    constructor(private elementRef: ElementRef,
                private renderer: Renderer2) {
    }

    ngOnInit(): void {
        if (this.mode === CopyMode.InlineCopy) {
            this.renderer.addClass(this.elementRef.nativeElement, 'copy-tooltip');
            this.renderer.addClass(this.elementRef.nativeElement, this.tooltipPosition);
        }
    }

    @HostListener('click', ['$event']) onClick(event) {
        event.preventDefault();
        // this.clipboardService.doCopy(this.copyValue);
        if (this.mode === CopyMode.Special) {
            this.doSpecial(this.copyValue);
        }
    }


    // private doSpecial() { // todo rename
    //     let originalContent: string = this.elementRef.nativeElement.innerHTML;
    //     this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', "" +
    //         "<img src='assets/images/code-background.svg' alt='code background'/>\n" +
    //         "<div class='code'>Copied</div>");
    //     setTimeout(() => {
    //         this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', originalContent);
    //     }, 2000);
    // }

    private doSpecial(input: string) {

      let originalContent: string = this.elementRef.nativeElement.innerHTML;
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', input);
      setTimeout(() => {
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', originalContent);
      }, 2000);
      
    }
}

export enum CopyMode {
    ExtraElement = 'extra-element',		// e.g. extra button with directive which shows tick on click
    InlineCopy = 'inline-copy',			// e.g. directive on content wrapper without extra clickable element, shows tooltip on success
    Special = 'special'     // todo rename
}

// case 1: innerHTML -no classes styling applied if inline(globalOnly), ng doesn't treat it as an el
//  //   this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', originalContent);

//case 2: in case of using Renderer2 methods - issue with 'not a node'
// this.renderer.appendChild(this.parent, input);
