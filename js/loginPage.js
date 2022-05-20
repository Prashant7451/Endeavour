let a = document.getElementById("important").addEventListener("click", Login);

function login() {
    let user = parseInt(document.getElementById("name3").value);
    // alert(typeof(user);
    // let pass = document.getElementById("user_pass").value;
    let user1 = parseInt(2100);
    let user2 = parseInt(2101);
    let user3 = parseInt(2102);
    let user4 = parseInt(2103);
    let user5 = parseInt(2104);

    switch (user) {
        case user1:
            location.href = "index1.html";
            break;

        case user2:
            location.href = "index1.html";
            break;

        case user3:
            location.href = "index1.html";
            break;

        case user4:
            location.href = "index1.html";
            break;

        case user5:
            location.href = "index1.html";
            break;

        default:
            alert("wrong id or password");
    }

}

