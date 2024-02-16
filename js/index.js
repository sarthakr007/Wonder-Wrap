function changeSignUpButtons(){
    sign_in_btns = document.querySelectorAll('.sign_up_btn, .sign_up_btn_contrast, .sign_up_btn_plane');
    // console.log(sign_in_btns);
    for(i=0; i<sign_in_btns.length; i++){
        sign_in_btns[i].style.display = "none";
    }

    sign_out_btns = document.querySelectorAll('.sign_out');
    for(i=0; i<sign_out_btns.length; i++){
        sign_out_btns[i].style.display = "inline-block";
    }
}

function checkLoginStatus(){
    credentials = JSON.parse(localStorage.getItem('credentials'));
    if(credentials != null){
        console.log(`Currently Signed in as ${credentials.user.email}`);
        changeSignUpButtons();
    }
}

let signOut = () => {
    // credentials = JSON.parse(localStorage.getItem('credentials'));
    // console.log(credentials);
    localStorage.removeItem("credentials");
    window.location.reload();
}

checkLoginStatus();
sign_out_btns = document.querySelectorAll('.sign_out');
sign_out_btns.forEach(btn => {
    btn.addEventListener('click', signOut);
});