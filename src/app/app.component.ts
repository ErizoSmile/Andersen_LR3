import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  item: any[];
  items: any[] = []; 
  k; a; b; rowdel; rowEd; idrow;
  checkform(inp: HTMLInputElement){
    for(var i0 = 0; i0 < 9; i0++){
      if(inp.validity.valid == false){ 
       inp.style.border="2px solid #FF0000";
      }
      else inp.style.border="2px solid #4D4D4D";
    }
  }
  tbl1(FormInp: HTMLInputElement[], input1){
    //event.stopPropagation();
    //event.preventDefault();
    var rt = true;
    for(var i1 = 0; i1 < 9; i1++){
      if(FormInp[i1].validity.valid == false) rt = false; 
    }
    if (rt == false){
      alert("Данные введены неверно!"); 
      return;
    }
    
    this.item = [FormInp[0].value, FormInp[1].value, FormInp[2].value, FormInp[3].value, FormInp[4].value, FormInp[5].value, FormInp[6].value, FormInp[7].value, FormInp[8].value];
    
    if(input1.value == "Сохранить"){
      input1.value = "Добавить сотрудника";
      
      this.items[this.idrow-1] = this.item;
      
      for(var i2 = 0; i2 < 9; i2++){
        FormInp[i2].value = "";
      }
    }
    else{
      this.items.push(this.item);
      for(var i3 = 0; i3 < 9; i3++){
        FormInp[i3].value = "";
      }
    }
  }

  editRow(i, arr: HTMLInputElement[], input1){
    this.rowEd = document.getElementById("tbl")
    var ind = i.parentNode.parentNode.rowIndex;
    var row = this.rowEd.rows[ind];
    var cell = row.cells;
    var fio = cell[0].innerHTML;
    var f = fio.split(" ")[0], i = fio.split(" ")[1], o = fio.split(" ")[2];
  
    arr[0].value = f;
    arr[1].value = i;
    arr[2].value = o;
    arr[3].value = cell[1].innerHTML;
    arr[4].value = cell[2].innerHTML;
    arr[5].value = cell[3].innerHTML;
    arr[6].value = cell[4].innerHTML;
    arr[7].value = cell[5].innerHTML;
    arr[8].value = cell[6].innerHTML;
  
    input1.value = "Сохранить";
    this.idrow = ind;
  }
 
  delRow(i) {
    //alert(i.parentNode.parentNode.rowIndex);
    this.k = i;
    this.a = document.getElementById("a");
    this.b = document.getElementById("bkg");
  
    this.b.style.filter = "alpha(opacity=80)";
    this.b.style.opacity = 0.8;
    this.b.style.display = "block";
  
    this.a.style.display = "block";
    this.a.style.margin = "0 0 0 400px";
  }
  del(){
    //alert(this.k.parentNode.parentNode.rowIndex);
    this.rowdel = document.getElementById("tbl")
    this.rowdel.deleteRow(this.k.parentNode.parentNode.rowIndex);
  }
  MW() {
    this.b.style.display = "none";
    this.a.style.display = "none";
  }
}
