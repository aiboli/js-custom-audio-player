$(document).ready(function() {
    var player = $('#player').get(0); // 播放器，必须使用 Dom Element 才可以
    // 播放或者暂停
    $('#player-play').click(function() {
        if (player.paused) {
            player.play();
            $(this).children().removeClass("glyphicon glyphicon-play").addClass("glyphicon glyphicon-pause");
        } else {
            player.pause();
            $(this).children().removeClass("glyphicon glyphicon-pause").addClass("glyphicon glyphicon-play");
        }
    });

    $('#player-stop').click(function() {
        if (!player.paused) {
            player.pause();
            $('#player-play').children().removeClass("glyphicon glyphicon-pause").addClass("glyphicon glyphicon-play");
        }
        player.currentTime = 0;
        $('#slider').val(player.currentTime);
    });

    $('#slider').change(function() {
        var progress = $(this).val() / 1000;
        player.currentTime = player.duration * progress; // player.duration 视频的总时长
    });

    $('#player').on('timeupdate', function() {
        var progress = player.currentTime / player.duration * 1000;
        $('#slider').val(progress);
    });
});
