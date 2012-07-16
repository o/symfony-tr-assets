var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-32569582-1"]);_gaq.push(["_trackPageview"]);(function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()

$(function() {
    rebuild = function(name) {
        $('div.admonition.' + name).each(function() {
            body = '<div class="' + name + '"></div><div class="admonition admonition-' + name + '">' + $(this).html() + '</div>';
            $(this).removeClass(name).removeClass('admonition').addClass('admonition-wrapper').html(body);
        });
    }
    rebuild('tip');
    rebuild('note');
    rebuild('caution');
    rebuild('seealso');
    $('div.sidebar').each(function() {
        body = '<div class="sidebar"></div><div class="admonition admonition-' + name + '">' + $(this).html() + '</div>';
        $(this).removeClass('sidebar').addClass('admonition-wrapper').html(body);
    });
});