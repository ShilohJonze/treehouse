//Problem: It looks gross on small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation


//Create a select and append to menu.
var $select = $("<select></select>");
$("#menu").append($select);

  // cycle over menu links
  $("#menu a").each(function(){
    var $anchor = $(this);
      // create an option
    var $option = $("<option></option");

  //option's  value is href of link
  $option.val($anchor.attr("href"));
  // options text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
  });
//Create button
  //BIND CLICK TO BUTTON
    // go to selects location
    //modify css to hide links on small widths and show button and select
    //also hides select and button on larger widths and shows links

//deal with selected options depending on current page
