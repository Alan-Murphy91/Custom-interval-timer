var groups;
var rndLength;
var rstLength;
var totRnd;
var round;
var lastRnd;
var firstgrp;
var lastgrp;
var isGroup = false;
var afterWait = false;
var audioElement;



$(document).ready(function() {
	$('#fullpage').fullpage();
    
    
    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '16872_1461333020.mp3');
    
    groups = 'None';
    rndLength = parseInt($('#rndLength').html());
    rstLength = parseInt($('#rstLength').html());
    totRnd = parseInt($('#totRnd').html());
    round = 1;
    lastRnd = false;
    
    $('#grpup').click(function(){
        if(groups === 'None'){
            groups = 1;
            $('#groups').html(groups);
        }
       else if(groups !== NaN){
           groups++;
           $('#groups').html(groups);
       }
    });
    
    $('#grpdown').click(function(){
        if(groups !== NaN && groups > 1){
            groups--;
            $('#groups').html(groups);
        }
       else if(groups == 1){
           groups = 'None';
           $('#groups').html(groups);
       }
    });   
    
    $('#rndup').click(function(){
        rndLength++;
        $('#rndLength').html(rndLength);
    });   
    
    $('#rnddown').click(function(){
        if(rndLength > 1){
            rndLength--;
            $('#rndLength').html(rndLength);
        }
    });   
    
    $('#rstup').click(function(){
        if(rstLength < 95){    
            rstLength+=5;
        }
        $('#rstLength').html(rstLength);
    });   
    
    $('#rstdown').click(function(){
        if(rstLength > 5){
            rstLength-=5;
            $('#rstLength').html(rstLength);
        }
    }); 
    
    $('#totup').click(function(){
        totRnd++;
        $('#totRnd').html(totRnd);
    });   
    
    $('#totdown').click(function(){
        if(totRnd > 2){
            totRnd--;
            $('#totRnd').html(totRnd);
        }
    });     
    
    if(totRnd === 1){
        lastRnd = true;
    }
    
    $('.goBtn').click(function(){
        $.fn.fullpage.moveSectionDown();
    });
    
    });


    function roll(){
        var a = 9;
        if(typeof groups == 'number'){
            isGroup = true;
        }
        lastgrp = groups;
        firstgrp = 1;
        if(isGroup){
            $('.class').html('Group ' + firstgrp);
        }
        $('#workresta').html(rndLength);
        $('#workrestb').html(rstLength);
        $('.spre').html('WAIT');
        $('.numbMin').html('0'+0);
        $('.numbsec').html('0'+a);
        $('#ttot').html(totRnd);
        var b = setInterval(function(){
            a--;
            $('.spre').html('WAIT');
            $('.numbMin').html('0'+0);
            $('.numbsec').html('0'+a);
            if(a === 0){
                clearInterval(b);
                spar();
            }
        }, 1000);
    }
    
    
    
    
        function spar(){  
        if(isGroup && afterWait === false){
            firstgrp = 1;
            $('.class').html('Group ' + firstgrp);
            afterWait = true;
        }    
            
        else if(isGroup && afterWait === true){
        if(firstgrp === lastgrp){
            firstgrp = 1;
            $('.class').html('Group ' + firstgrp);
        } else {
            firstgrp++;
            $('.class').html('Group ' + firstgrp);
        }
        }
        $('#zrnd').html(round);
        var sec = 59;
        var tempRnd = rndLength -1;
                var sparInt = setInterval(function(){
                    $('.spre').html('SPAR');
                    if(tempRnd >=10){
                        $('.numbMin').html(tempRnd);
                        if(sec <= 9){
                            $('.numbsec').html('0'+sec);
                        } else {
                            $('.numbsec').html(sec);
                        }
                    }
                    else {
                        $('.numbMin').html('0'+tempRnd);
                        if(sec <= 9){
                            $('.numbsec').html('0'+sec);
                        } else {
                            $('.numbsec').html(sec);
                        }                        
                    }
                    sec--;
                    if(sec === -1 && tempRnd === 0){
                        clearInterval(sparInt);
                        audioElement.play();
                        round++;
                        if(lastRnd){
                            setTimeout(function(){ location.reload(); }, 1000);
                        }
                        if(!lastRnd && round == totRnd){
                            lastRnd = true;
                        }
                        wait();
                    }
                    if(sec === -1){
                        sec = 59;
                        tempRnd--;
                    }                    
                }, 1000);        
        }
    
    
        function wait(){
        var tempRst = rstLength;
                var waitInt = setInterval(function(){
                    $('.spre').html('REST');
                    if(tempRst >=10){
                        $('.numbsec').html(tempRst);        
                    }
                    else {
                        $('.numbsec').html('0'+tempRst); 
                    }
                    tempRst--;
                    if(tempRst === -1){
                        clearInterval(waitInt);
                        spar();
                    }                   
                }, 1000);        
        }    
    
    
//    var groups = 'None';
//    var rndLength = parseInt($('#rndLength').html());
//    var rstLength = parseInt($('#rstLength').html());
//    var totRnd = parseInt($('#totRnd').html());    
    
    
    
    
