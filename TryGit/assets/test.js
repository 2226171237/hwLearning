function get_focus() {
    $('#cursor').addClass('cursor');
}

function lost_focus() {
    $('#cursor').removeClass('cursor');
}
function refresh_clear_data()
{
    localStorage.clear();
}
function test_suggestion(flag,realkey,string_input,count)
{
    $("#editor-container").scrollTop(document.getElementById("show-input").offsetHeight);
    $("#editor-group").keydown(function(e){


        if(e.which == 32 ) {
            realkey += " ";
            string_input += " ";
            document.getElementById("show-input").innerHTML = realkey;
            count ++;
        }
        if(e.which == 8 && count > 0){
            if(realkey.substr(realkey.length-2,2) != '> ')
            {
                realkey = realkey.substr(0,realkey.length-1);
                string_input = string_input.substr(0,string_input.length-1);
            }

            document.getElementById("show-input").innerHTML = realkey;
            count --;
        }

        var ruler = $("#ruler");
        if(realkey.match(/>/g).length > 2){
            var data = realkey.split(">")
            console.log(data[data.length-1].length)

            var left = (data[data.length-1].length*8 + parseInt(data[data.length-1].length/2)*0.9)%$("#show-input").width()  + 12;
        }else{

            var data = realkey.split("&gt;")

            var left = (data[data.length-1].length*8 + parseInt(data[data.length-1].length/2)*0.9)%$("#show-input").width()  + 12;

        }


        $("#cursor")[0].style.marginLeft = left+"px";

    });
    $("#editor-group").keypress(function(e){

        if(e.which == 189)
        {
            realkey += "-";
            string_input += "-";
            document.getElementById("show-input").innerHTML = realkey;
            count ++;
        }
        else if(e.which == 39)
        {
            realkey += "'";
            string_input += "'";
            document.getElementById("show-input").innerHTML = realkey;
            count ++;
        }
        else if(e.which == 222)
        {
            realkey += "\"";
            string_input += "\"";
            document.getElementById("show-input").innerHTML = realkey;
            count ++;
        }
        else if(e.which == 190)
        {
            realkey += ".";
            string_input += ".";
            document.getElementById("show-input").innerHTML = realkey;
            count ++;
        }
        else if(e.which <= 40 && e.which >= 37)
        {
            realkey = realkey;
            document.getElementById("show-input").innerHTML = realkey;
            count ++;
        }
        else if (e.which == 13 )
        {
            if(output_info_datas[flag][string_input] == undefined)
            {
                realkey += "\nzsh:command not found:"+string_input;
            }
            else{
                realkey += output_info_datas[flag][string_input];
            }
            realkey = realkey + '\n' + '> ';
            document.getElementById("show-input").innerHTML = realkey;
            $("#editor-container").scrollTop(document.getElementById("show-input").offsetHeight);
            localStorage.setItem("show_inputs_string",JSON.stringify(realkey));

            if(array_correct_inputs[flag-1] == string_input)
            {
                if(flag<25) window.location.href = flag+1+".html";

            }
            count = 0;
            string_input = "";
        }
        else
        {
            realkey += String.fromCharCode(e.which);
            string_input += String.fromCharCode(e.which);
            document.getElementById("show-input").innerHTML = realkey;
            count ++;
        }
        localStorage.setItem("show_inputs_string",JSON.stringify(realkey));
        var ruler = $("#ruler");
        if(realkey.match(/>/g).length > 2){
            var data = realkey.split(">")
            console.log(data[data.length-1].length)
            var left = (data[data.length-1].length*8 + parseInt(data[data.length-1].length/2)*0.9)%$("#show-input").width()  + 12;
        }else{

            var data = realkey.split("&gt;")
            ruler[0].innerHTML = ">" + data[data.length-1]
            var left = (data[data.length-1].length*8 + parseInt(data[data.length-1].length/2)*0.9)%$("#show-input").width()  + 12;
        }
        $("#cursor")[0].style.marginLeft = left+"px";


    });
    $("#editor-group").focus();
}