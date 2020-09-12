$(document).ready(function(){
    var playing = false,
        recitor = $('.recitor'),
        surahName = $('.surahName'),
        totalAyat = $('.totalAyat'),
        time = $('.time'),
        fillBar = $('.fillBar')

        let surahData = [];

        var surah = new Audio();
        var currentSurah = 0;
        if(localStorage.getItem('currentSurah') === null) currentSurah = 0;
        else currentSurah = localStorage.getItem('currentSurah');
        var surahIndex = [
            {name: '63. আল মুনাফিকুন', index: 0}, 
            {name: '78. আন-নাবা', index: 1}
        ]

        for(let i=0; i<surahIndex.length; ++i){
            document.querySelector('.surahList').innerHTML += `<div class="surah" id="${surahIndex[i].index}">
            <div class="name">${surahIndex[i].name}</div>
            </div>
            `
        }

        $('.surah').click(function(){
          currentSurah = $(this)[0].id;
          $('.surah').removeClass('red');
          $('#'+currentSurah).addClass('red')
           playSurah();
           $('caption').click();
           localStorage.setItem('currentSurah', currentSurah);
           
        })
        
        window.onload = load();
        function load() {
            surahData = [
                {
                    name: '63. আল মুনাফিকুন',
                    recitor: 'Sheikh Abdullah Humeid',
                    src:'./tracks/63. Al-Munafiqun.mp3',
                    SurahCaptions : {
                        '0:00': 'বিতাড়িত শয়তানে হতে আল্লাহর নিকট আশ্রয় প্রার্থনা করছি।',
                        '0:04':'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।',
                        '0:08':'মুনাফিকরা আপনার কাছে এসে বলেঃ আমরা সাক্ষ্য দিচ্ছি যে আপনি নিশ্চয়ই আল্লাহর রসূল।',
                        '0:18': 'আল্লাহ জানেন যে, আপনি অবশ্যই আল্লাহর রসূল ',
                        '0:23': 'এবং আল্লাহ সাক্ষ্য দিচ্ছেন যে, মুনাফিকরা অবশ্যই মিথ্যাবাদী।',
                        '0:30': 'তারা তাদের শপথসমূহকে ঢালরূপে ব্যবহার করে। অতঃপর তারা আল্লাহর পথে বাধা সৃষ্টি করে।',
                        '0:40': 'তারা যা করছে, তা খুবই মন্দ।',
                        '0:47':  'এটা এজন্য যে, তারা বিশ্বাস করার পর পুনরায় কাফের হয়েছে। ',
                        '0:53': 'ফলে তাদের অন্তরে মোহর মেরে দেয়া হয়েছে। অতএব তারা বুঝে না।	 ',
                        '1:00': 'আপনি যখন তাদেরকে দেখেন, তখন তাদের দেহাবয়ব আপনার কাছে প্রীতিকর মনে হয়।',
                        '1:05': 'আর যদি তারা কথা বলে, তবে আপনি তাদের কথা শুনেন। ', 
                        '1:10': 'তারা প্রাচীরে ঠেকানো কাঠসদৃশ্য।', 
                        '1:17': 'প্রত্যেক শোরগোলকে তারা নিজেদের বিরুদ্ধে মনে করে।', 
                        '1:21': 'তারাই শত্রু, অতএব তাদের সম্পর্কে সতর্ক হোন।',
                        '1:24': 'তারাই শত্রু, অতএব তাদের সম্পর্কে সতর্ক হোন।',
                        '1:28': 'ধ্বংস করুন আল্লাহ তাদেরকে। তারা কোথায় বিভ্রান্ত হচ্ছে ?', 
                        '1:35': 'যখন তাদেরকে বলা হয়ঃ তোমরা এস, আল্লাহর রসূল তোমাদের জন্য ক্ষমাপ্রার্থনা করবেন, তখন তারা মাথা ঘুরিয়ে নেয়', 
                        '1:45':  'তখন তারা মাথা ঘুরিয়ে নেয় এবং আপনি তাদেরকে দেখেন যে, তারা অহংকার করে মুখ ফিরিয়ে নেয়।',
                        '1:53': 'আপনি তাদের জন্যে ক্ষমাপ্রার্থনা করুন অথবা না করুন, উভয়ই সমান।',
                        '2:02': 'আল্লাহ কখনও তাদেরকে ক্ষমা করবেন না। ', 
                        '2:07': 'আল্লাহ কখনও তাদেরকে ক্ষমা করবেন না। ', 
                        '2:10': 'আল্লাহ পাপাচারী সম্প্রদায়কে পথপ্রদর্শন করেন না।',
                        '2:17': 'তারাই বলেঃ আল্লাহর রাসূলের সাহচর্যে যারা আছে তাদের জন্যে ব্যয় করো না। পরিণামে তারা আপনা-আপনি সরে যাবে। ',
                        '2:28': 'ভূ ও নভোমন্ডলের ধন-ভান্ডার আল্লাহরই কিন্তু মুনাফিকরা তা বোঝে না।	',
                        '2:40': 'তারাই বলেঃ আমরা যদি মদীনায় প্রত্যাবর্তন করি তবে সেখান থেকে সবল অবশ্যই দুর্বলকে বহিস্কৃত করবে।', 
                        '2:50': 'শক্তি তো আল্লাহ তাঁর রসূল ও মুমিনদেরই', 
                        '2:57': 'শক্তি তো আল্লাহ তাঁর রসূল ও মুমিনদেরই কিন্তু মুনাফিকরা তা জানে না', 
                        '3:11': 'হে মুমিনগণ!',
                        '3:16': 'তোমাদের ধন-সম্পদ ও সন্তান-সন্ততি যেন তোমাদেরকে আল্লাহর স্মরণ থেকে গাফেল না করে।',
                        '3:25': 'যারা এ কারণে গাফেল হয়, তারাই তো ক্ষতিগ্রস্ত।', 
                        '3:32': 'আমি তোমাদেরকে যা দিয়েছি, তা থেকে মৃত্যু আসার আগেই ব্যয় কর। অন্যথায় সে বলবেঃ হে আমার পালনকর্তা,', 
                        '3:45': 'অন্যথায় সে বলবেঃ হে আমার পালনকর্তা, আমাকে আরও কিছুকাল অবকাশ দিলে না কেন? তাহলে আমি সদকা করতাম',
                        '3:57': 'তাহলে আমি সদকা করতাম এবং সৎকর্মীদের অন্তর্ভুক্ত হতাম।', 
                        '4:03': 'প্রত্যেক ব্যক্তির নির্ধারিত সময় যখন উপস্থিত হবে, তখন আল্লাহ কাউকে অবকাশ দেবেন না।', 
                        '4:12': 'তোমরা যা কর, আল্লাহ সে বিষয়ে খবর রাখেন।',
                        '4:21': ''
                    }
                },
                {
                    name: '78. আন-নাবা',
                    recitor: 'Sheikh Abdullah Humeid',
                    src: './tracks/78. An Naba.mp3',
                    SurahCaptions: {
                        '0:00': 'বিতাড়িত শয়তানে হতে আল্লাহর নিকট আশ্রয় প্রার্থনা করছি।',
                        '0:04': 'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।',
                        '0:08': 'তারা পরস্পরে কি বিষয়ে জিজ্ঞাসাবাদ করছে?',
                        '0:15': 'মহা সংবাদ সম্পর্কে,',
                        '0:20': 'যে সম্পর্কে তারা মতানৈক্য করে।	',
                        '0:24': 'না, সত্ত্বরই তারা জানতে পারবে,',
                        '0:29': 'অতঃপর না, সত্বর তারা জানতে পারবে।',
                        '0:37': 'আমি কি করিনি ভূমিকে বিছানা',
                        '0:41': 'এবং পর্বতমালাকে পেরেক?',
                        '0:44': 'আমি তোমাদেরকে জোড়া জোড়া সৃষ্টি করেছি,',
                        '0:48': 'তোমাদের নিদ্রাকে করেছি ক্লান্তি দূরকারী,',
                        '0:52': 'রাত্রিকে করেছি আবরণ।',
                        '0:57': 'দিনকে করেছি জীবিকা অর্জনের সময়,',
                        '1:04': 'নির্মান করেছি তোমাদের মাথার উপর মজবুত সপ্ত-আকাশ।',
                        '1:11': 'এবং একটি উজ্জ্বল প্রদীপ সৃষ্টি করেছি।',
                        '1:17': 'আমি জলধর মেঘমালা থেকে প্রচুর বৃষ্টিপাত করি,',
                        '1:26': 'যাতে তদ্দ্বারা উৎপন্ন করি শস্য, উদ্ভিদ।',
                        '1:33': 'ও পাতাঘন উদ্যান।',
                        '1:38': 'নিশ্চয় বিচার দিবস নির্ধারিত রয়েছে।',
                        '1:45': 'যেদিন শিংগায় ফুঁক দেয়া হবে, তখন তোমরা দলে দলে সমাগত হবে।',
                        '1:52': 'আকাশ বিদীর্ণ হয়ে; তাতে বহু দরজা সৃষ্টি হবে।',
                        '2:01': 'এবং পর্বতমালা চালিত হয়ে মরীচিকা হয়ে যাবে।',
                        '2:06': 'নিশ্চয় জাহান্নাম প্রতীক্ষায় থাকবে,',
                        '2:13': 'সীমালংঘনকারীদের আশ্রয়স্থলরূপে।',
                        '2:18': 'তারা তথায় শতাব্দীর পর শতাব্দী অবস্থান করবে।',
                        '2:24': 'তথায় তারা কোন শীতল এবং পানীয় আস্বাদন করবে না;',
                        '2:33': 'কিন্তু ফুটন্ত পানি ও পূঁজ পাবে।',
                        '2:39': 'পরিপূর্ণ প্রতিফল হিসেবে।',
                        '2:45': 'নিশ্চয় তারা হিসাব-নিকাশ আশা করত না।',
                        '2:51': 'এবং আমার আয়াতসমূহে পুরোপুরি মিথ্যারোপ করত।',
                        '2:58': 'আমি সবকিছুই লিপিবদ্ধ করে সংরক্ষিত করেছি।',
                        '3:03': 'অতএব, তোমরা আস্বাদন কর, আমি কেবল তোমাদের শাস্তিই বৃদ্ধি করব।',
                        '3:11': 'পরহেযগারদের জন্যে রয়েছে সাফল্য।',
                        '3:16': 'উদ্যান, আঙ্গুর,',
                        '3:22': 'সমবয়স্কা, পূর্ণযৌবনা তরুণী।',
                        '3:26': 'এবং পূর্ণ পানপাত্র।	',
                        '3:30': 'তারা তথায় অসার ও মিথ্যা বাক্য শুনবে না।',
                        '3:40': 'এটা আপনার পালনকর্তার তরফ থেকে যথোচিত দান,	',
                        '3:49': 'যিনি নভোমন্ডল, ভূমন্ডল ও এতদুভয়ের মধ্যবর্তী সবকিছুর পালনকর্তা, দয়াময়,',
                        '3:57': 'কেউ তাঁর সাথে কথার অধিকারী হবে না।',
                        '4:01': 'যেদিন রূহ ও ফেরেশতাগণ সারিবদ্ধভাবে দাঁড়াবে।',
                        '4:11': 'দয়াময় আল্লাহ যাকে অনুমতি দিবেন, সে ব্যতিত কেউ কথা বলতে পারবে না এবং সে সত্যকথা বলবে।',
                        '4:21': 'এই দিবস সত্য।',
                        '4:24': ' অতঃপর যার ইচ্ছা, সে তার পালনকর্তার কাছে ঠিকানা তৈরী করুক।',
                        '4:32': 'আমি তোমাদেরকে আসন্ন শাস্তি সম্পর্কে সতর্ক করলাম,',
                        '4:43': 'যেদিন মানুষ প্রত্যেক্ষ করবে যা সে সামনে প্রেরণ করেছে',
                        '4:50': 'এবং কাফের বলবেঃ হায়, আফসোস-আমি যদি মাটি হয়ে যেতাম।',
                        '5:00': '',
                    }

                }
            ]

            recitor.html(surahData[currentSurah].recitor);
            surahName.html(surahData[currentSurah].name);
            surah.src = surahData[currentSurah].src;

            
        }
    var playerShow = false;

        function playSurah() {
            var curSurah = surahData[currentSurah];
            recitor.html(curSurah.recitor);
            surahName.html(curSurah.name);
            surah.src = curSurah.src;
            surah.play();
            $('#play').text('pause');
            $('.surah').removeClass('red');
          $('#'+currentSurah).addClass('red')
        }

        $('#play').click(function playOrPause() {
            $('.surah').removeClass('red');
            $('#'+currentSurah).addClass('red')
            if(surah.paused) {
                surah.play();
                playing = true;
                $('#play').text('pause');

            } else {
                surah.pause();
                playing = false;$('#play').text('pause');
                $('#play').text('play_arrow');
            }


            if(playing){
                playerShow = true;
                $('.fillBar').show();
                $('.seek-round').show();
                $('.fill').show();
                $('.fillBarSeek').show();
                $('.time').show();
                $('.duration').show();
                $('.play').show();
                $('.next').show();
                $('.prev').show();
            }

            $('.caption').click(function(){
                //playerShow = true;
                $('.fillBar').show();
                $('.seek-round').show();
                $('.fill').show();
                $('.fillBarSeek').show();
                $('.time').show();
                $('.duration').show();
                $('.surahName').show();
                $('.play').show();
                $('.next').show();
                $('.prev').show();

                setTimeout(function(){
                    $('.fillBar').hide();
                    $('.seek-round').hide();
                    $('.fill').hide();
                    $('.fillBarSeek').hide();
                    $('.time').hide();
                    $('.duration').hide();
                    $('.surahName').hide();
                    $('.play').hide();
                    $('.next').hide();
                    $('.prev').hide();
                    }, 8000);
            
               });

               //console.log(playerShow)

            if(playerShow){
                setTimeout(function(){
                $('.fillBar').hide();
                $('.seek-round').hide();
                $('.fill').hide();
                $('.fillBarSeek').hide();
                $('.time').hide();
                $('.duration').hide();
                $('.surahName').hide();
                $('.play').hide();
                $('.next').hide();
                $('.prev').hide();
                }, 8000);
            }
        })

        $('.next').click(function(){
            if(currentSurah != surahData.length-1){
            currentSurah++;
            playSurah();
            localStorage.setItem('currentSurah', currentSurah);
            }
        })

        $('.prev').click(function(){
            if(currentSurah!=0){
                currentSurah--;
                playSurah();
                localStorage.setItem('currentSurah', currentSurah);
            }
        })

        
  
        
  
    //Time
   var c = 0;
   var ct = 0;

    surah.addEventListener('timeupdate', function() {
        var position = (100/ surah.duration) * surah.currentTime;
        var current = surah.currentTime;


        var duration = surah.duration;
        var durationMinute = Math.floor(duration / 60);
        var durationSecond = Math.floor(duration - durationMinute * 60);
        if(durationSecond<10){
            durationSecond = '0'+durationSecond;
        }
        var durationLabel = durationMinute + ":" + durationSecond;
        currentSecond = Math.floor(current);
        currentMinute = Math.floor(currentSecond / 60);
        currentSecond = currentSecond - currentMinute * 60;
        // currentSecond = (String(currentSecond).lenght > 1) ? currentSecond : ( String("0") + currentSecond );
        if (currentSecond < 10) {
         currentSecond = "0" + currentSecond;
        }
        
        var currentLabel = currentMinute + ":" + currentSecond;
        var indicatorLabel = currentLabel + " / " + durationLabel;
        var cap = surahData[currentSurah].SurahCaptions[currentLabel];
       // console.log(cap)
        var temp = '';
        
        if(cap != undefined){
           // console.log('foo');
            temp = cap;
            //console.log(cap);
            
            if(c===0) $('.caption').html(`<div class="bn-ayat animate__animated animate__fadeIn">${temp}</div>`);
            
            c++;
        }else{
            c=0;
            
        }
        
        if(currentLabel===durationLabel){
            console.log('next')
            $('.next').click();
        }

        $('#btt').off().click(function(){
            document.querySelector('.btt').innerHTML += `'${currentLabel}', <br>`
        })
         fillBar.css("width", position + "%");
         $('.seek-round').css('left', position-1 + '%');
         //$('#seekslider').css('width', 99.99+'%');
        // console.log(position)

        $(".time").html(currentLabel);
        $('.duration').html(durationLabel);

        seekslider = $("#seekslider");
        seekslider.slider({
            orientation: "horizantal",
            value: 25,
            range: "min",
            min: 0,
            max: 100,
            step: 1,
            slide: function(event, ui) { // CHANGED HERE
                    var seekto = surah.duration * (ui.value / 100);
                   // console.log('seekto:', seekto); // check console to see if this is getting called.    
                    surah.currentTime = seekto;
            }
        });


    })

  


})