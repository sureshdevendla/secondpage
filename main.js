function add_user(){
    user_name=document.getElementById("input1").value;
    localStorage.setItem("name of the user",user_name);
    
    pass_word=document.getElementById("input2").value;
    localStorage.setItem("password of the user",pass_word);
    
    window.location="index2.html";
}