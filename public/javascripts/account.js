$(document).ready(()=>{

    var socket = io();

    socket.on('connect', () =>{
        console.log("connected");
    })

    socket.on('UserSetting', (data) => {
        $("#welcome").html("Welcome " + data.username)
        //console.log("yea")
    })

    $("#createUser").on('click', (e)=> {
        e.preventDefault();
        console.log("yea");
        let user = $("#user").val();
        let pass = $("#pass").val();
        
        socket.emit('setUser', {
            username: user,
            password: pass
        })

    })

    $("#submit").on('click', (e)=>{ //e for event
        e.preventDefault();      //prevents the form form advancing
        let x = $("#message").val();
        let y = $("#user").val();

        socket.emit('message', {
            message: x,
            username: y
        });

    })
})