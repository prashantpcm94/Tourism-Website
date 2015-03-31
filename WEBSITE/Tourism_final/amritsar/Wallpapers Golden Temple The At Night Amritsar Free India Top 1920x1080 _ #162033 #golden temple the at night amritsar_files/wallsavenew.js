;(function ($) {
    'use strict';

    if (top.location !== self.location) {
        top.location.replace(self.location);
    }

    if ($.lemmonSlider) {
        window.onload = function () {
            // slider 1
            $('#slider1').lemmonSlider({
                infinite: true
            });
            //alert('OK');
        };
    }
})(jQuery);

$(document).ready(function() {
    'use strict';

    $('#logo a').css({
        'text-indent': '9999px',
        'background': 'url("http://www.wallsave.com/images/wallsave.png") no-repeat'
    }).show();
    $('#result').hide();
    $('.keyword').watermark('Search Wallpapers');

    //hide ticker
    $('.ticker-header i.close').click(function() {
        $('#sidebarRight').animate({
            'width': '0%'
        }, 'slow');
        $('#thumbWrap').css({
            'margin': '0 0 0 204px'
        });
        $('.gradient2').animate({
            'opacity': '1'
        }, 'slow');
    });

    $('.sort').click(function() {
        $('span', this).css({
            'display': 'inline'
        });
        $(this).addClass('selected').focus();
    });

    $('.fresh-more,.paginate').click(function() {
        $(this).css({
            'background': 'url("http://www.wallsave.com/images/loading_gray.gif") repeat scroll 280px 50% white'
        });
    });

    //ajax tabs
    $.address.crawlable(0).init(function(event) {

        // Initializes plugin support for links
        //$('a:not([href^=http])').address();
        //$('#menu>li>a').address();

    }).change(function(event) {

        $('.sort').each(function() {
            if ($(this).attr('href') === ('http://www.wallsave.com/#!' + event.value)) {
                $(this).addClass('selected').focus();
                $('span', this).css({
                    'display': 'inline'
                });
                $('#result').show();
                $('#result>div,#featured-front').fadeOut('10000', function() {
                    $('#result>div,#featured-front').remove();
                });

                var str = event.value;
                var clean = str.replace('/', '');
                var fix = clean.replace('-', ' ');
                str = 'Best of ' + fix + ' Wallpapers | Wallsave.com';
                $.address.title(ucwords(str));

                $.getJSON('best' + event.value, function(json) {
                    $.each(json.results, function(i, tab) {
                        $('#result').append('' + tab.feed_html + '');
                        $('#reso-container').slideUp('fast');
                        $('#menu>li>a>span').hide();
                        $('#thumbWrap').animate({
                            'opacity': '1'
                        }, 'slow');
                        $('.gradient2').animate({
                            'opacity': '1'
                        }, 'slow');
                        $('#content').css({
                            'overflow': 'visible'
                        });

                        $('.thumbs').click(function() {
                            $(this).append('<span class="load-thumbs">Painting...</span>');
                        });
                        $('.thumbs').hover(function() {
                            $('.resInfo', this).animate({
                                'opacity': '1'
                            }, 'fast');
                        }, function() {
                            $('.resInfo', this).animate({
                                'opacity': '0'
                            }, 'slow');
                        });
                    });
                });
            } else {
                $(this).removeClass('selected');
            }
        });
    });

    //keyword   
    $('.keyword').keypress(function() {
        if ($('#reso-container').is(':hidden')) {
            $('#reso-container').slideDown('slow');
        }
    });


    //drop resolution
    $('#dropreso').mouseover(function() {
        if ($('#reso-container').is(':hidden')) {
            $('#reso-container').slideDown('slow');
        }
        return false;
    });


    //click reso
    $('.res').click(function() {
        var res = $(this).attr('fvalue');
        // alert(res);
        $('input[name="reso"]').val(res);
        $('#dropreso').html(res);
        $('.form').submit();
    });

    //close reso
    $('.closetop').click(function() {
        $('#reso-container').slideUp('slow');
    });

    //ajax submit form
    $('.form').submit(function(e) {
        e.preventDefault();

        var keyword = $('input[name="keyword"]').val();
        var page = $('input[name="page"]').val();
        var reso = $('input[name="reso"]').val();

        if (keyword === '') {
            alert('Please type some keyword');
            hasError = true;
        } else {
            $('#container').animate({
                'padding-top': '0',
                'width': '95%'
            }, 'slow');
            $('#reso-container').slideUp('fast');
            $('#result>div,#featured-front,.category,#browse-result').fadeOut('5000', function() {
                $('#result>div,#featured-front,.category,#browse-result').remove();
            });

            $('.keyword').css({
                'background': 'url("http://www.wallsave.com/images/loading_gray.gif") repeat scroll 280px 50% white'
            });
            $('.resolution').hide();
            $('#fullresult').hide();
            $('.sort').removeClass('selected');
            $('#result').show();

            $.post('/goleki/', {
                    search: keyword,
                    page: page,
                    reso: reso
                },
                function(data) {
                    $('#result').html(data).css({
                        'overflow': 'hidden'
                    });

                    $('#content').animate({
                        'opacity': '1'
                    }, 'slow');
                    $('#thumbWrap').animate({
                        'opacity': '1'
                    }, 'slow');
                    $('.gradient2').animate({
                        'opacity': '1'
                    }, 'slow');
                    $('.keyword').css({
                        'background': 'white'
                    });
                    $('.resolution').css({
                        'display': 'inline'
                    });
                    $('#content').css({
                        'overflow': 'visible'
                    });

                });

            hasError = true;
        }
        if (hasError === true) {
            return false;
        }

    });

    $('.submit').click(function() {
        $('.form').submit();
    });

    //ajax more result
    $('.loadmore').live('click', function() {

        $('#thumbWrap').animate({
            'margin': '0 0 0 204px'
        }, 'slow').delay(2000);
        $('.gradient2').animate({
            'opacity': '1'
        }, 'slow');

        var ID = $(this).attr('id');
        if (ID) {
            $('.loadmore').text('Painting...').css({
                'background': 'url("http://www.wallsave.com/images/loading_gray.gif") repeat'
            });
            //$('.loadmore').hide().delay(2000);
            $('#sidebarRight').animate({
                'width': '0'
            }, 'fast');

            $.ajax({
                type: 'POST',
                url: '/goleki/',
                data: 'lastmsg=' + ID,
                cache: false,
                success: function(html) {
                    $('#result').append(html);
                    $('#next').remove();

                }
            });
        } else {
            $('.morebox').html('The End');
        }
        return false;
    });

    //ajax more related wallpapers
    $('.loadrelated').live('click', function() {

        var ID = $(this).attr('id');
        var page = $(this).attr('page');
        if (ID) {
            $('.loadrelated').text('Preparing...').css({
                'background': 'url("http://www.wallsave.com/images/loading_gray.gif") repeat'
            });
            $.getJSON('http://www.wallsave.com/related_more.php?keyword=' + ID + '&page=' + page, function(json) {
                $.each(json.results, function(i, tab) {
                    $('#more-result').append('' + tab.feed_html + '');
                    $('#next').remove();
                });
            });
        } else {
            $('.morebox').html('The End');
        }
        return false;
    });

    $('#source').live('click', function() {
        var ID = $(this).attr('idimg');
        if (ID) {
            $.ajax({
                type: 'POST',
                url: '/source.php',
                data: 'id=' + ID,
                cache: false,
                success: function(html) {
                    $('#dsource').append(html);
                }
            });
            $(this).remove();
        } else {
            $('#source').html('None');
        }
        return false;
    });


});

//spy function

$(function() {
    $('ul.spy').simpleSpy().bind('mouseenter', function() {
        $(this).trigger('stop');
    }).bind('mouseleave', function() {
        $(this).trigger('start');
    });
});

(function($) {

    $.fn.simpleSpy = function(limit, interval) {
        limit = limit || 9;
        interval = interval || 10000;

        function getSpyItem($source) {
            var $items = $source.find('> li');

            if ($items.length == 1) {
                // do an hit to get some more
                //$source.load('ajax-spy-helper.php');
            } else if ($items.length === 0) {
                return false;
            }

            // grab the first item, and remove it from the $source
            return $items.filter(':first').remove();
        }

        return this.each(function() {
            // 1. setup
            // capture a cache of all the list items
            // chomp the list down to limit li elements
            var $list = $(this),
                running = true,
                height = $list.find('> li:first').height();

            // TODO create the $source element....
            var $source = $('<ul />').hide().appendTo('body');

            //$list.wrap('<div class='spyWrapper' />').parent().css({ height : height * limit });

            $list.find('> li').filter(':gt(' + (limit - 1) + ')').appendTo($source);

            $list.bind('stop', function() {
                running = false;
            }).bind('start', function() {
                running = true;
            });

            // 2. effect

            function spy() {
                if (running) {
                    var $item = getSpyItem($source);

                    if ($item !== false) {
                        // insert a new item with opacity and height of zero
                        var $insert = $item.css({
                            height: 0,
                            opacity: 0,
                            display: 'none'
                        }).prependTo($list);

                        // fade the LAST item out
                        $list.find('> li:last').animate({
                            opacity: 0
                        }, 1000, function() {
                            // increase the height of the NEW first item
                            $insert.animate({
                                height: height
                            }, 1000).animate({
                                opacity: 1
                            }, 1000);

                            // AND at the same time - decrease the height of the LAST item
                            // $(this).animate({ height : 0 }, 1000, function () {
                            // finally fade the first item in (and we can remove the last)
                            $(this).remove();
                            // });
                        });
                    }
                }

                setTimeout(spy, interval);
            }

            spy();
        });
    };

})(jQuery);

//ucwords phpjs

function ucwords(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function($1) {
        return $1.toUpperCase();
    });
}

jQuery.fn.countDown = function(settings, to) {
    settings = jQuery.extend({
        startFontSize: '22px',
        endFontSize: '22px',
        duration: 10,
        startNumber: 0,
        endNumber: 0,
        callBack: function() {}
    }, settings);
    return this.each(function() {

        //where do we start?
        if (!to && to != settings.endNumber) {
            to = settings.startNumber;
        }

        //set the countdown to the starting number
        $(this).text(to).css('fontSize', settings.startFontSize);

        //loopage
        $(this).animate({
            'fontSize': settings.endFontSize
        }, settings.duration, '', function() {
            if (to < settings.endNumber + 1) {
                $(this).css('fontSize', settings.startFontSize).text(to + 1).countDown(settings, to + 1);
            } else {
                settings.callBack(this);
            }
        });

    });
};

function SmallError(source) {
    source.src = 'http://dl.dropbox.com/u/6675974/small_error.jpg';
    source.onerror = '';
    return true;
}
