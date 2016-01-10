
var x1 = document.getElementById("one");
var x2 = document.getElementById("two");
var x3 = document.getElementById("three");
var x4 = document.getElementById("four");
var x5 = document.getElementById("five");
var x6 = document.getElementById("six");
var x7 = document.getElementById("seven");
var x8 = document.getElementById("eight");
var x9=document.getElementById("nine");
var x10 = document.getElementById("ten");
var x11 = document.getElementById("eleven");
var x12 = document.getElementById("twelve");
var x13 = document.getElementById("thirteen");
var x14 = document.getElementById("fourteen");
var x15=document.getElementById("fifteen");
var y = [x1, x2, x3, x4, x5, x6, x7, x8, x9,x10,x11,x12,x13,x14,x15];
function fnGetFocus() {
    y[0].focus();
}

y[0].setAttribute("onkeydown", "CursorKeyDown(event,undefined,undefined,'six','two')");
y[1].setAttribute("onkeydown", "CursorKeyDown(event,undefined,'one','seven','three')");
y[2].setAttribute("onkeydown", "CursorKeyDown(event,undefined,'two','eight','four')");
y[3].setAttribute("onkeydown", "CursorKeyDown(event,undefined,'three','nine','five')");
y[4].setAttribute("onkeydown", "CursorKeyDown(event,undefined,'four','ten',undefined)");
y[5].setAttribute("onkeydown", "CursorKeyDown(event,'one',undefined,'eleven','seven')");
y[6].setAttribute("onkeydown", "CursorKeyDown(event,'two','six','twelve','eight')");
y[7].setAttribute("onkeydown", "CursorKeyDown(event,'three','seven','thirteen','nine')");
y[8].setAttribute("onkeydown", "CursorKeyDown(event,'four','eight','fourteen','ten')");
y[9].setAttribute("onkeydown", "CursorKeyDown(event,'five','nine','fifteen',undefined)");
y[10].setAttribute("onkeydown", "CursorKeyDown(event,'six',undefined,undefined,'twelve')");
y[11].setAttribute("onkeydown", "CursorKeyDown(event,'seven','eleven',undefined,'thirteen')");
y[12].setAttribute("onkeydown", "CursorKeyDown(event,'eight','twelve',undefined,'fourteen')");
y[13].setAttribute("onkeydown", "CursorKeyDown(event,'nine','thirteen',undefined,'fifteen')");
y[14].setAttribute("onkeydown", "CursorKeyDown(event,'ten','fourteen',undefined,undefined)");
function CursorKeyDown(e,top,left,bottom,right) {

    switch (e.keyCode) {
        case 37: // left
            k = left;
            fnGetContent(k, s);
            return false
            break;
        case 38: // up
            k = top;
            fnGetContent(k, s);
            return false
            break;
        case 39: // right
            k = right;
            fnGetContent(k, s);
            return false
            break;
        case 40: // down
            k = bottom;
            fnGetContent(k, s);
            return false
            break;
            function fnGetContent(k, s)

{
    self = Number(s);
    if (k > self) {
        y[k].className = "div1";
        y[self].className = "div2";

        y[k].focus();
        if (k == self + 1) {
            tdiv.innerHTML = tdiv.innerHTML + 'Right--';
        } else {
            tdiv.innerHTML = tdiv.innerHTML + 'Down--';

        }

    } else if (k == self - 1) {

        y[k].className = "div1";
        y[self].className = "div2";
        y[k].focus();
        tdiv.innerHTML = tdiv.innerHTML + 'Left--';

    } else if (k < self) {
        y[k].className = "div1";
        y[self].className = "div2";
        y[k].focus();
        tdiv.innerHTML = tdiv.innerHTML + 'Up--';

    } else {
        tdiv.innerHTML = tdiv.innerHTML + 'Invalid--';
    }
}
    }
}
/*function CursorKeyDown(e,top,left,bottom,right)
{
  if (!e) e=window.event;
  var select;
  switch(e.keyCode)
  {
  case 37:
    // Key left.
    select = left;
    break;
  case 38:
    // Key up.
    select = top;
    break;
  case 39:
    // Key right.
    select = right;
    break;
  case 40:
    // Key down.
    select = bottom;
    break;
  }
  if (!select) return;
  var controls = document.getElementsByName(select);
  if (!controls) return;
  if (controls.length != 1) return;
  controls[0].focus();
}
