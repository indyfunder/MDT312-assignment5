var count = 0;

function postFunction(){
    count++;
    text_1 = document.getElementById("text1").value;
    if(count == 1){
        document.getElementById("topic1").innerHTML = text_1; 
    }
    else if(count == 2){
        document.getElementById("comment1").innerHTML = text_1; 
    }
    else if(count == 3){
        document.getElementById("comment2").innerHTML = text_1; 
    }
    else{
        alert("! Can't post anymore."); 
    }

}

function clearFunction(){
    document.getElementById("topic1").innerHTML = ''; 
    document.getElementById("comment1").innerHTML = ''; 
    document.getElementById("comment2").innerHTML = '';  
    count = 0;

}