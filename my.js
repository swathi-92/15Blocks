function CursorKeyDown(e,top,left,bottom,right)
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
