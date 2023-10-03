let input = $("form input");
let list = $("section ol");
let error = $("form span");
let add_item = $("section div");
let add_elem = $("form button[name = 'add_element']").on('click',function(){
    for(let i = 0; i < error.length;i++){
        if(input.val() == '' || input.val() == ' '){
            error.append("<p style = 'color:#ff0044'>Ошибка!</p>");
            setTimeout(HideError,2000);
        }
        else{
            error.empty();
            for(let i = 0; i < add_item.length; i++){
                add_item.append("<div class = 'added'>" + "Элемент добавлен" + "</div>").show();
                setTimeout(HideElem,2000);
            }
            for(let i = 0; i < list.length; i++){
                list.append("<li>" + input.val() + "</li>").hide()[i];
            }
        }
    }
    
})
let show_elem = $("form button[name = 'show_element']").on('click',function(){
    for(let i = 0; i < list.length; i++){
        list.toggle()[i];
    }
});
function HideElem(){
    for(let i = 0; i < add_item.length; i++){
        add_item.empty();
    }
}
function HideError(){
    for(let i = 0; i < error.length;i++){
        error.empty()[i];
    }
}