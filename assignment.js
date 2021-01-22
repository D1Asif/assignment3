

//First Problem
function kilometerToMeter(kilo){
    if (kilo < 0){
        var invalid ="Invalid number";
        return invalid;
    }
    else{
        var meter = kilo * 1000;
        return meter;
    }
}



//Second Problem
function budgetCalculator(ghori, phone, laptop){
    if (ghori < 0 || phone < 0 || laptop < 0){
        var invalid ="Invalid number";
        return invalid;
    }
    else{
        var budget = (ghori * 50) + (phone * 100) + (laptop * 500);
        return budget;
    }
}



//Third Problem
function hotelCost(nights){
    if (nights < 0){
        var invalid ="Invalid number";
        return invalid;
    }
    else if ( nights >= 0 && nights <= 10){
        var cost = nights * 100;
        return cost;
    }
    else if (nights > 10 && nights <= 20){
        var cost = 1000 + ((nights - 10) * 80);
        return cost;
    }
    else if (nights > 20){
        var cost = 1800 + ((nights - 20) * 50);
        return cost;
    }
}



//Fourth Problem
function megaFriend(friend){
    var max = 0;
    var maxString = ' ';
    for(i = 0; i < friend.length; i++){
        var element = friend[i];
        if (element.length > max){
            max = element.length;
            maxString = element;
        }
    }
    return maxString;
}
