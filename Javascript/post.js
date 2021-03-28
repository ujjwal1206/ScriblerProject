var editable = false;
var a = 1;
var str = new Array();


function Edit() {
    a = a + 1;
    var eh = document.getElementById("editableheading");
    var ec = document.getElementById("editablecontent");
    if (!editable) {
        eh.style.border = '1px';
        eh.style.borderStyle = 'solid';

        ec.style.border = '1px';
        ec.style.borderStyle = 'solid';

        document.getElementById("editbtn").innerHTML = "Save <i class=\"glyphicon glyphicon-floppy-save\"></i>";

        editable = true;
    } else {

        if (a == 2) {
            var t = document.getElementById("editableheading");
            eh.innerHTML = t.innerHTML;

            var temp = document.getElementById("editablecontent");
            ec.innerHTML = temp.innerHTML;

        }

        eh.style.border = 'none';
        ec.style.border = 'none';

        document.getElementById("editbtn").innerHTML = "Edit <i class=\"glyphicon glyphicon-edit\"></i>";

    }
}
window.onload = function() {

    if (str.length == 0) {
        if (window.location.search.split('?').length > 1) {
            const par = window.location.search.split('?')[1].split('&');
            for (let i = 0; i < par.length; i++) {
                const k = par[i].split('=')[0];
                const v = decodeURIComponent(par[i].split('=')[1]);
                str[k] = v;
            }
        }
    }

    if (str.h != null && str.writer != null) {
        const { h } = str;
        const { writer } = str;
        const { c } = str;
        document.getElementsByClassName('heading-content')[0].innerHTML = h;
        document.getElementsByClassName('writername')[0].innerHTML = writer;
        document.getElementsByClassName('post-content')[0].innerHTML = c;
    }

    document.getElementById('comment').style.visibility = 'hidden';
}

var c = 0;

function count1() {

    c = c + 1;
    document.getElementById("likebtn").innerHTML = "Liked";
    if (c == 1) {
        document.getElementById("counter").innerHTML = c + " person liked this !";
    } else {
        document.getElementById("counter").innerHTML = c + " people liked this !";
    }

}

function Coment() {
    var comment = document.getElementById("comments");
    if (comment.value != '') {
        document.getElementById("c2").innerHTML += "<div id=\"c1\">" + comment.value + "</div>";
        comment.value = "";
    }
}