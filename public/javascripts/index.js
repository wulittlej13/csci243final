$(document).ready(()=>{

    var socket = io();

    socket.on('connect', () =>{
        console.log("connected");
        $("#logout").hide();
    })

    socket.on('chat', (data) => {

            if(data.username == "" || data.username == undefined)
                console.log("rip");
            else
            $("#pool").append( data.username + ":" + data.message + "\n");
    });

    socket.on('UserSetting', (data) => {
        $("#welcome").html("Welcome " + data.username)
        $("#login").hide();
        $("#logout").show();
    })

    socket.on('request', (data) => {
        $("queue").append(data.artist + " - " + data.track)
    })


    $("#setUser").on('click', (e)=> {
        e.preventDefault();
        let user = $("#user").val();
        let pass = $("#pass").val();
        socket.emit('createUser', {
            username: user,
            password: pass
        })
    })

    $("#submit").on('click', (e)=>{
        e.preventDefault();    
        let x = $("#message").val();
        let y = $("#user").val();

        socket.emit('message', {
            message: x,
            username: y

        });

    })

    $("#logoutBtn").on('click', (e) =>{
        e.preventDefault();
        console.log("working")
    })

    $("#req").on('click', (e) =>{
        e.preventDefault();
        console.log("in req");
        let song = $("#song").val();
        let link = $("#link").val();
        
        let x ="";
        x = song.split("-");
        let artist = x[1];
         song = x[2];

        console.log(link);
        console.log(song);

        socket.emit('request', {
            artitst: artist,
            song: song,
        });

    })
})