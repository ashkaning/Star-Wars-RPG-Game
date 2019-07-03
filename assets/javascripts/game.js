$(document).ready(function () {

    var attachPower;
    var healthPoint;
    var characterYourName;
    var characterDefender;//this is for enemies
    var defenderPower;//this is for enemies
    var defenderHealthPoint;//this is for enemies
    var counterAttackPower;//this is for enemies

    var names = {
        Kenobi: [150, 10,9, false, 'assets/images/obi-wan.png'],
        Skywalker: [140, 15,8, false, 'assets/images/luke.png'],
        Yoda: [100, 35,10, false, 'assets/images/yoda.png'],
        Maul: [50, 5,2, false, 'assets/images/maul.png']
    }
    function Characters() {
        $.each(names, function (key, value) {
            if (value[2] === false) {
                let createDivCharacter = $('<div class="col-md-2 customCharacters">')
                    .html('<figure>')
                    .html(`<img src="${value[3]}">`)
                    .addClass('character')
                let heart = $('<i>').addClass('fas fa-heart');
                let fist = $('<i>').addClass('fas fa-fist-raised');
                let caption = $('<figcaption class="name">').text(key);
                let healthSpan = $('<span>')
                    .text(value[0])
                    .addClass('health');
                let powerSpan = $('<span>')
                    .text(value[1])
                    .addClass('power');
                let health = $('<figcaption>')
                    .append(healthSpan)
                    .append(heart);
                let power = $('<figcaption>')
                    .append(powerSpan)
                    .append(fist);
                createDivCharacter.prepend(caption);
                createDivCharacter.append(health);
                createDivCharacter.append(power);
                $('#characters').append(createDivCharacter);

                $(".characters").append(createDivCharacter)
            }
        })
    }
    Characters()

    $("#characters").on("click",".character", function () {
       var $partType = $(this).closest('.customCharacters');//saving user character
       characterYourName = $partType.find('.name').text();//saving user character name attachPower
       attachPower = $partType.find('.power').text();//saving user character power number
       healthPoint = $partType.find('.health').text();//saving user character healthPoint

       $(this).removeClass('character')
        $("#customText").text("Your Character")
        $("#customTextEnemy").text("Choose your Defender")

        let enemies = $('.character'); //.remove();
        enemies.removeClass('character').addClass('enemy');
        $('#enemies').append(enemies);

    })
  

    $("#enemies").on("click", ".enemy", function () {
        $("#customTextDefenter").text("Your Defender")
        $(this).removeClass(".yourCharacter").addClass('defender');
        let enemies = $('.character');
        var $partType = $(this).closest('.defender');
        characterDefender = $partType.find('.name').text();
        defenderPower = $partType.find('.power').text();
        defenderHealthPoint = $partType.find('.health').text();

        $('#defender').append($(this));
    });

    $("#attack").on("click",function(){
        console.log(characterYourName)
        console.log(attachPower)
        console.log(healthPoint)
        console.log(characterDefender)



    })

    function report(userReport,attachPower, enemyReport){

    }

});