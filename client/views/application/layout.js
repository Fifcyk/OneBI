/**
 * Created by Fifcyk on 02.03.15.
 */
$(document).ready( function() {
    $('div[id="content"]').height(window.innerHeight - (
        $('div[id="header"]').height() +
        $('div[id="separatingRow"]').height() +
        $('div[id="footer"]').height()
    ));
});
