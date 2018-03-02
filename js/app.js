(function main(){
    $('#id-result-btn').on('click', function(){ 
        var spend = getSpend();
        var recipe = getRecipe();
        var saving = getSavings();
        var sum = calculSum(recipe, spend, saving);

        if(sum > 0 && sum < 100){
            $('.result-message').html('<p>Resultat:<span> + ' + sum + ' €</span></p>'+ 
            '<p>Tu peux aller au cinéma.</p>');
            $('.result-message span').css('color','green');
        }else if(sum > 100){
            $('.result-message').html('<p>Resultat:<span> + ' + sum + ' € </span></p>'+ 
            '<p>Tu peux aller faire des achats en boutique.</p>');
            $('.result-message span').css('color','green');
        }else if(sum < 0){
            $('.result-message').html('<p>Resultat: <span>' + sum + ' €</span></p>'+ 
            '<p>Tu peux rien faire ce soir, il te faut demander de l\'argent...</p>');
            $('.result-message span').css('color','red');
        }else if(sum == 0){
            $('.result-message').html('<p>Resultat: <span>' + sum + ' €</span></p>'+ 
            '<p>Courage, tu pourras bientôt te faire plaisir...</p>');
        }
        return false;
    })
})();

/**
 * Function get value for spend data 
 */
function getSpend(){
    var arraySpend = [];
    var sumSpend = 0;

    $('.class-input-spend').each(function(){        // get all value with class is id-input-spend
        var value = $(this).val();
        arraySpend.push(parseInt(value));
    })

    for(var i = 0; i<arraySpend.length; i++){ 
        if(isNaN(arraySpend[i])){                  // Defined value 0 for NaN value
            arraySpend[i] = 0;
        }
        sumSpend = arraySpend[i] + sumSpend;       // Sum all array's value
    }

    return sumSpend;
}

/** 
 * function Get value for Recipe  data
*/
function getRecipe(){
    var arrayRecipe = [];
    var sumRecipe = 0;
    $('.class-input-recipe').each(function(){       // get all value for class is id-input-recipe
        var value = $(this).val();
        arrayRecipe.push(parseInt(value));
    })

    for(var i = 0; i<arrayRecipe.length; i++){
        if(isNaN(arrayRecipe[i])){                 // Define value 0 for NaN value
            arrayRecipe[i] = 0;
        }
        sumRecipe = arrayRecipe[i] + sumRecipe;    // Sum all array's value
    }

    return sumRecipe;
}

/**
 * Get value for Savings date
 **/
function getSavings(){
    var arraySaving = [];
    var sumSaving = 0;
    $('.class-input-saving').each(function(){    // get all value for class is id-input-recipe
        var value = $(this).val();
        arraySaving.push(parseInt(value));
    })

    for(var i = 0; i<arraySaving.length; i++){
        if(isNaN(arraySaving[i])){              // Define value 0 for NaN value
            arraySaving[i] = 0;
        }
        sumSaving = arraySaving[i] + sumSaving; // Sum all array's value
    }

    return sumSaving;
}

/**
 * Calcul final sum with sumSavings, sumRecipe and sumSpend
 **/
function calculSum(sumRecipe, sumSpend, sumSaving){
   return sumRecipe - sumSpend - sumSaving; 

}