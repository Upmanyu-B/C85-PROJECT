menu_list_array = [ "Veg Margherita Pizza","Chicken Tandoori Pizza","Veg Supreme","Paneer Tikka Piza","Deluxe Veggie Piza","Veg Extravaganza Pizza"];                  

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("menu_list_arry").value;
    menu_list_array.push(item);
}

