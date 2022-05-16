import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum TableColumnType {
  DATE,
  NUMBER,
  BOOLEAN
}
export type TableColumn = {
  key: string,
  name: string,
  type?: TableColumnType
}
@Component({
  selector: 'quizz-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  TableColumnType=TableColumnType;
  displayedColumns: string[] = [];

  private _columns: TableColumn[] = [];

  @Input()
  get columns(): TableColumn[] {
    return this._columns;
  }
  set columns(columns: TableColumn[]) {
    this._columns = columns;
    this.displayedColumns = columns?.map(column => column.key);
  }

  @Input() data: any[] = [];

  @Output() onRowClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  rowClicked(row: any) {
    this.onRowClicked.emit(row);
  }
}