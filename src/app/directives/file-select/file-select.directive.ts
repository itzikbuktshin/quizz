import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fileSelect]'
})
export class FileSelectDirective {

  @Input() accept: string = '.jpg';
  // In MB
  @Input() maxFileSizeMB: number = 1.5;
  @Output() selected = new EventEmitter<FileList>();
  @Output() onError = new EventEmitter<string>();

  input:any;
  onclickListener: any;
  onchangeListener: any;

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2) {
    this.init();
    this.listenToFileSelect();
  }

  private init() {
    const input = (this.input = this.renderer.createElement("input"));
    this.renderer.appendChild(this.elementRef.nativeElement, input);
    this.renderer.setAttribute(input, "type", "file");
    this.renderer.setStyle(input, "display", "none");
    this.renderer.setStyle(input, "position", "absolute");

    this.onclickListener = this.renderer.listen(this.elementRef.nativeElement, "click", _ => {
      input.click();
    });
  }

  private listenToFileSelect() {
    this.onchangeListener = this.renderer.listen(this.input, "change", event => {
      try {
        debugger
        if (!event.target.files.length) return;
        const files: FileList = event.target.files;
        this.validateFiles(files);
        this.selected.emit(files);
      } catch (error:any) {
        this.onError.emit(error);
      }
      finally {
        this.input.value = null;
      }
    });
  }

  private validateFiles(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      const file = files.item(index);
      if(!file) throw (`File is null`);
      const fileExtension = file.name.split('.').pop() ||'';
      const fileSizeMB = Math.round(file.size / Math.pow(1024, 2) * 10) / 10;
      if (!this.accept.includes(fileExtension)) {
        throw (`The file format is not supported`);
      }
      if (fileSizeMB > this.maxFileSizeMB) {
        throw (`The file exceeds the maximum file size (${this.maxFileSizeMB}MB)`);
      }
    }
  }

  ngOnInit() {
    this.renderer.setAttribute(this.input, "accept", this.accept);
  }

  ngOnDestroy() {
    if (this.onchangeListener) this.onchangeListener();
    if (this.onclickListener) this.onclickListener();
  }
}
