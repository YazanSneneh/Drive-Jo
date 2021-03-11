// jshint esversion:6

// calculate loan payment
$('#calc').click(function(){
    let amount = $('#amount').val();
    let period = $('#period').val();
    let firstPayment = $('#first-payment').val();
    let interest_rate = $('#interest').val();
    
    if(amount == 0 &period == 0 &firstPayment == 0 &interest_rate == 0){
        alert('check data');
    }else{
    let total = amount - firstPayment;
    let interest = ( total*(interest_rate*0.01)/period );
    let payment = ((total/period)+interest).toFixed(2);

    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result(amount,period,firstPayment,interest,payment);
   }
})

function result(total,period,firstPayment,interest,payment){
    $('#money-result').html(total);
    $('#f-payment-result').html(firstPayment);
    $('#int-result').html(interest.toFixed(2));
    $('#period-result').html(period);
    $('#installment-result').html(payment);
}

// scroll function
// $(window).ready(function(){
//     $('#scroll').fadeOut();
// })
$(window).scroll(function(){
    if($(document).scrollTop()>150){
         $('#scroll').fadeIn();
    }else{
        $('#scroll').fadeOut();
    }
})
// button scroll
$('#scroll').click(function(){
    $('html').animate({scrollTop:0},1000);
})