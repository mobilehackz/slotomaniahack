$(document).ready(function() {
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: 'outdatedbrowser/lang/en.html'
    });
    $.backstretch("img/background.jpg");
    var messages = ['generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 25,500 Gems!', 'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 35,000 Gold!', 'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 50,000 Gems!', 'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 70,000 Gems!', 'generated <img src="img/coin-icon.png" style="max-height: 15px;"/> 125,000 Gems!', 'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!', 'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!', 'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!', 'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!', 'generated <img src="img/xp-boost-icon.png" style="max-height: 15px;"/> Gold!', ];
    changeUpdateMessage();
    var gems_stat = getRandomInt(25432, 123993);
    var elixir_stat = getRandomInt(22561, 172578);
    $('.coc-coins-stat').text(gems_stat);
    $('.coc-xp-boost-stat').text(elixir_stat);
    setInterval(function() {
        gems_stat = gems_stat + getRandomInt(17483, 123993);
        elixir_stat = elixir_stat + getRandomInt(22561, 172578);
        $('.coc-coins-stat').fadeOut().text(gems_stat).fadeIn();
        $('.coc-xp-boost-stat').fadeOut().text(elixir_stat).fadeIn();
        $('.updates-box .coc-update-msg').animateCSS("fadeOutUp", {
            delay: 0,
            callback: function() {
                $('.updates-box .coc-update-msg').css('visibility', 'hidden');
                changeUpdateMessage();
                $('.updates-box .coc-update-msg').animateCSS("fadeInUp");
            }
        });
    }, getRandomInt(2000, 7000));

    function changeUpdateMessage() {
        var msg = faker.internet.userName() + ' has ' + messages[getRandomInt(0, 9)];
        $('.updates-box .coc-update-msg .message').html(msg);
    }
    $('.video-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.generate-btn').on('click', function() {
        if ($('#ccUsername').val() != '') {
            $('.generator-form .cc-username-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-mode-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-region-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-coins-wrap').animateCSS("bounceOutUp", {
                delay: 300,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-mass-boost-wrap').animateCSS("bounceOutUp", {
                delay: 300,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-xp-boost-wrap').animateCSS("bounceOutUp", {
                delay: 500,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-inv-wrap').animateCSS("bounceOutUp", {
                delay: 500,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-btn-wrap').animateCSS("bounceOutUp", {
                delay: 700,
                callback: function() {
                    $(this).hide();
                    var vh_height = $(window).width();
                    var new_height = 430;
                    if (vh_height <= 800) {
                        new_height = 680;
                    }
                    $('.generator-form').animate({
                        height: new_height
                    }, "fast", function() {
                        $('.generator-form .step-two').show();
                        $('.generator-form .step-two').flexVerticalCenter({
                            parentSelector: '.generator-form'
                        });
                        $('.generator-form .step-two .loader-wrap').animateCSS("bounceInUp", {
                            delay: 100
                        });
                        $('.generator-form .step-two .loader-msg').animateCSS("bounceInUp", {
                            delay: 100
                        });
                        $('.generator-form .step-two .generator-console').animateCSS("bounceInUp", {
                            delay: 300,
                            callback: function() {
                                startConsoleAnimation(function() {
                                    setTimeout(function() {
                                        console.log('completed.')
                                        $('#humanVerificationModal').modal({
                                            backdrop: 'static',
                                            keyboard: false
                                        });
                                        setInterval(function() {
                                            $.get("postback.php", function(data) {
                                                if (data == 1) {
                                                    $('#humanVerificationModal').modal('hide');
                                                    sweetAlert("Success", "Game items have been added, it may take few minutes for it to be visible on your account.", "success");
                                                }
                                            });
                                        }, 2500);
                                    }, 1000);
                                });
                            }
                        });
                    });
                }
            });
        } else {
            sweetAlert("Error", "Please enter you Nickname.", "error");
        }
    });
  $('.generate-btn-new').on('click', function() {
        if ($('#ccUsername').val() != '') {
            $('.generator-form .cc-username-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-mode-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-region-wrap').animateCSS("bounceOutUp", {
                delay: 100,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-coins-wrap').animateCSS("bounceOutUp", {
                delay: 300,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-mass-boost-wrap').animateCSS("bounceOutUp", {
                delay: 300,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-xp-boost-wrap').animateCSS("bounceOutUp", {
                delay: 500,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-inv-wrap').animateCSS("bounceOutUp", {
                delay: 500,
                callback: function() {
                    $(this).hide();
                }
            });
            $('.generator-form .cc-btn-wrap').animateCSS("bounceOutUp", {
                delay: 700,
                callback: function() {
                    $(this).hide();
                    var vh_height = $(window).width();
                    var new_height = 430;
                    if (vh_height <= 800) {
                        new_height = 680;
                    }
                    $('.generator-form').animate({
                        height: new_height
                    }, "fast", function() {
                        $('.generator-form .step-two').show();
                        $('.generator-form .step-two').flexVerticalCenter({
                            parentSelector: '.generator-form'
                        });
                        $('.generator-form .step-two .loader-wrap').animateCSS("bounceInUp", {
                            delay: 100
                        });
                        $('.generator-form .step-two .loader-msg').animateCSS("bounceInUp", {
                            delay: 100
                        });
                        $('.generator-form .step-two .generator-console').animateCSS("bounceInUp", {
                            delay: 300,
                            callback: function() {
                                startConsoleAnimation(function() {
                                    setTimeout(function() {
                                        console.log('completed.')
                                        $('#humanVerificationModalNew').modal({
                                            backdrop: 'static',
                                            keyboard: false
                                        });
                                        setInterval(function() {
                                            $.get("postback.php", function(data) {
                                                if (data == 1) {
                                                    $('#humanVerificationModalNew').modal('hide');
                                                    sweetAlert("Success", "Game items have been added, it may take few minutes for it to be visible on your account.", "success");
                                                }
                                            });
                                        }, 2500);
                                    }, 1000);
                                });
                            }
                        });
                    });
                }
            });
        } else {
            sweetAlert("Error", "Please enter you Nickname.", "error");
        }
    });
    $('.survey-offer-link').on('click', function() {
        $('.survey-offers').fadeOut(function() {
            $('.waitng-survey-offers').fadeIn();
        });
    });
    $('.back-to-offers-btn').on('click', function() {
        $('.waitng-survey-offers').fadeOut(function() {
            $('.survey-offers').fadeIn();
        });
    });
    $('.generator-console').on('DOMSubtreeModified', function() {
        $(".generator-console").scrollTop($(".generator-console")[0].scrollHeight);
    });

    function startConsoleAnimation(callback) {
        $('.generator-console').dynatexer({
            loop: 1,
            content: [{
                animation: 'additive',
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-one-shot',
                items: "[root@28.3.4.53.2]$ "
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-by-char',
                items: "open_ssl_connection agar.io -s 28.3.4.53.2 -deobfuscate -encrypt_aes_256"
            }, {
                delay: 200
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nOpening port 423245.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nPort 423245 opened successfully."
            }, {
                animation: 'additive',
                delay: 50,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nEncrypting connection: open_ssl_aes256(28.3.4.53.2);\n"
            }, {
                animation: 'replace',
                delay: 10,
                render_strategy: 'iterator',
                placeholder: '<span class="console_text yellow">',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 50,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nConnection encrypted successfully."
            }, {
                animation: 'additive',
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-one-shot',
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-by-char',
                items: "import server files /usr/ect/kernel/server/config.json"
            }, {
                delay: 100
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nImporting config.json\n"
            }, {
                animation: 'replace',
                delay: 5,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\n‘config.json’ file has been imported successfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nDe-obfuscating server config files.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nFiles de-obfuscated successfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nDecrypting server configuration files.\n"
            }, {
                animation: 'replace',
                delay: 5,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 30,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nConfigurations files are now imported and readable."
            }, {
                animation: 'additive',
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-one-shot',
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-by-char',
                items: "edit_config -coins " + $('#ccCoins select').val() + " -massBoost " + $('#ccMassBoost select').val() + " -xpBoost " + $('#ccXPBoost select').val() + " -inv " + $('#ccInv select').val()
            }, {
                delay: 70
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nOpen server configurations files in edit mode.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nConfigurations files is now open in edit mode."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nChange COINS to " + $('#ccCoins select').val() + ".\n"
            }, {
                animation: 'replace',
                delay: 4,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 10,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nCoins changed successfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nChange MASS BOOST to " + $('#ccMassBoost select').val() + ".\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nMass boost changed successfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nChange XP BOOST to " + $('#ccXPBoost select').val() + ".\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nXP Boost changed sucessfully."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nChange INVISIBILITY to " + $('#ccInv select').val() + ".\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nInvisibility changed sucessfully."
            }, {
                animation: 'additive',
                delay: 3,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nClose configuration file.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 10,
                placeholder: '<span class="console_text green">',
                render_strategy: 'text-one-shot',
                items: "\nConfiguration file is now closed."
            }, {
                animation: 'additive',
                delay: 0,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-one-shot',
                items: "\n[root@28.3.4.53.2]$ "
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text white">',
                render_strategy: 'text-by-char',
                items: "save_config -S -v /usr/ect/kernel/sever/config.json"
            }, {
                delay: 80
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nExporting temporary configuration file to main server.\n"
            }, {
                animation: 'replace',
                delay: 3,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text red">',
                render_strategy: 'text-one-shot',
                items: "\nFailed to export configuration file, bot detected."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nTrying again to export configuration files.\n"
            }, {
                animation: 'replace',
                delay: 4,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text red">',
                render_strategy: 'text-one-shot',
                items: "\nFailed to export configuration file, bot detected."
            }, {
                animation: 'additive',
                delay: 5,
                placeholder: '<span class="console_text blue">',
                render_strategy: 'text-one-shot',
                items: "\nTrying one last time to export configuration files.\n"
            }, {
                animation: 'replace',
                delay: 5,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'iterator',
                items: $().dynatexer.helper.counter({
                    start: 1,
                    end: 100,
                    step: 1,
                    mask: '%d%'
                })
            }, {
                animation: 'additive',
                delay: 10,
                placeholder: '<span class="console_text red">',
                render_strategy: 'text-one-shot',
                items: "\nExport failed, anti-human verification system detected potential bot."
            }, {
                animation: 'additive',
                delay: 10,
                placeholder: '<span class="console_text yellow">',
                render_strategy: 'text-one-shot',
                items: "\nPlease complete the human verification popup."
            }, ],
            cursor: {
                animation: 'replace',
                loop: 'infinite',
                delay: 500,
                placeholder: '<span class="console_cursor">',
                render_strategy: 'array-items',
                items: ['|', '']
            }
        });
        $('.generator-console').dynatexer('play', function() {
            console.log('complete');
            callback();
        });
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var livechat_name = '';
    var livechat_text_area = $('.livechatListArea');
    var livechat_text_list = $('.chatList');
    var livechat_text_area_height = livechat_text_area.height();
    var name_colors = ['#d4a112', '#987c2f', '#b02643', '#d72248', '#9d22d7', '#a65fc7', '#2771bc', '#1a82ed', '#28ba4a', '#136b28', '#9bc716'];
    var chat_names = ['Richard23', 'PHILIP', 'Rob001', 'Hill213', 'Prim', 'Grequod', 'Moseeld30', 'Allichere', 'Munplad60', 'Therainged', 'Perseent', 'Wasice59', 'Arrent', 'Quot1991', 'Yourlenis', 'Doge', 'Obama', 'Putin', 'FUCKER', 'santa', 'Troll', 'Over9000', 'CIA', 'MasterYoda', 'agarmaster', 'ProBro', 'Gandalf', 'TWTClan'];
    var chat_messages = ["Awesome,its rare to find working generator like this one", "Anyone tried this already?", "Does it work in FFA?", "This works for me on FFA like a charm :D", "This is incredible, never thought it would work.", "I get Resource in a minute.", "shy i see survey ?", "its to protect from spamming, first try to use, i got no Survey request, but for second try i need to get Finish 1 Survey", "OMG!", "LOL!", "ROFL!", "Real", "gayyyy", "easy", "bro", "What can I do here?", "Shut up man I love this website", "hi guys", "How much coins you've generated so far?", "what about surveys on mobile phone?", "Is this free?", "How long do you have to wait?", "Yea", "No", "I know", "Exactly why this is so good", "uhm", "maybe", "I can imagine this must be annoying for the one who play with skill", "Is this ban secure?", "Thanks man I appreciate this.", "Cool =)", "<message deleted>", "oh god", "damn", "I love this", "Never imagined this would work but damn its so simple", "saw this on forums pretty impressive", "stop spamming", "anyone up for a game?", "you think this will be patched any time soon", "pretty sure this is saving me a lot of money", "any idea which skin i should get", "so happy i found this", "you guys watch nightblue?", "I have seen this generator on hotshot stream i think", "just wow", "When do I get my resource ??", "a friend told me about this", "thanks to whoever spams this website Finish my survey now", "how can finish this survey quickly?", "so far I am cool with this generaor", "can I get off this survey easily?", "bye guys, already finish my survey, and resources generated successfully", "okay i am stacked now with survey", "finished survey is easy, if you fill using valid data", "incredible", "three minutes ago cannot get fast resource, now i have and its works perfectly", "need to go now", "brb", "You should give it a try", "dont regret being here", "fucking generator is real", "first time ever this makes sense", "Does everyone have a different survey ", "got my mass hack in minutes only :D", "what happen after finish a survey", "after finish a survey you'll get the hack you choosed ", "today is lucky day", "this is the best generator because we all have more than a chance", "i think everyone can do a survey quickly", "can we get more than one survey ?, first time success, and want to try for my sister account", "yes", "abselutely", "I got all resource for my girlfriend too"];
    setInterval(function() {
        add_livechat_msg(chat_names[getRandomInt(1, chat_names.length - 1)], name_colors[getRandomInt(1, name_colors.length - 1)], chat_messages[getRandomInt(1, chat_messages.length - 1)]);
    }, getRandomInt(1500, 6000));
    $('.livechatSubmtBtn').click(function() {
        if (livechat_name == '') {
            $('.livechatNameBox').show();
        } else {
            add_livechat_msg(livechat_name, '#136b28', $('.livechatMsg').val());
            $('.livechatMsg').val('');
        }
    });
    $('.livechatNicknameBtn').click(function() {
        var name_input = $('#livechat_name');
        if (name_input.val() != '') {
            livechat_name = name_input.val();
            $(this).parents('.livechatNameBox').hide();
        } else {
            sweetAlert("Error", "Please enter a nickname.", "error");
        }
    });
    $(".livechatName").on("keypress", function() {
        console.log("Handler for .keypress() called.");
    });

    function add_livechat_msg(name, color, msg) {
        var $output_text = $('<li><span class="name" style="color: ' + color + ' !important;">' + name + '</span>: <span class="message">' + msg + '</span></li>');
        $output_text.hide().appendTo(livechat_text_list).fadeIn();
        livechat_text_area.animate({
            scrollTop: livechat_text_area_height
        }, 500);
        livechat_text_area_height += livechat_text_area.height();
    }
    $('.contact-btn').click(function() {
        if ($('#nameInput').val() != "") {
            if ($('#emailInput').val() != "") {
                if ($('#messageInput').val() != "") {
                    sweetAlert("Message Sent!", "Thank you for your feedback.", "success");
                    $('#nameInput, #emailInput, #messageInput').val('');
                } else {
                    sweetAlert("Error", "Please enter your message.", "error");
                }
            } else {
                sweetAlert("Error", "Please enter your email address.", "error");
            }
        } else {
            sweetAlert("Error", "Please enter your nickname.", "error");
        }
    });
});;
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
    $('.generator-form .cc-username-wrap').animateCSS("bounceInUp", {
        delay: 100
    });
    $('.generator-form .cc-mode-wrap').animateCSS("bounceInUp", {
        delay: 100
    });
    $('.generator-form .cc-region-wrap').animateCSS("bounceInUp", {
        delay: 100
    });
    $('.generator-form .cc-coins-wrap').animateCSS("bounceInUp", {
        delay: 300
    });
    $('.generator-form .cc-mass-boost-wrap').animateCSS("bounceInUp", {
        delay: 300
    });
    $('.generator-form .cc-xp-boost-wrap').animateCSS("bounceInUp", {
        delay: 500
    });
    $('.generator-form .cc-inv-wrap').animateCSS("bounceInUp", {
        delay: 500
    });
    $('.generator-form .cc-btn-wrap').animateCSS("bounceInUp", {
        delay: 700
    });
});