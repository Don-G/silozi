/* 
  SHOW HEADER
  Code largely by Gertjan Klein, except that his version works
  in NS4: http://www.gklein.org/tests/hide.html
*/
function Show(What, CheckURL) 
{
   var a, i;

   if (CheckURL) {
      i = document.URL.indexOf("#");
      if(i != -1) {
         Show(document.URL.substring(i+1,document.URL.length));
         return;
      }
   }
   if (!document.getElementsByTagName) 
      return;
   a = document.body.getElementsByTagName("div");
   if (a.length == 0) 
      return;
   if (typeof a[0].style != 'object') 
      return;
   if (typeof a[0].style.display == 'undefined') 
      return;
   for (i = 0; i < a.length; i++) {
      if (a[i].className != "section") 
         continue;
      if (a[i].id != What) 
         a[i].style.display = "none";
      else 
         a[i].style.display = "block";
  }
  return true;
}