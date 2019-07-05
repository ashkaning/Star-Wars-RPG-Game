$(document).ready(function () {

    var attachPower;
    var healthPoint;
    var characterYourName;
    var usercounterAttackPower;
    var characterDefender;//this is for enemies
    var defenderPower;//this is for enemies
    var defenderHealthPoint;//this is for enemies
    var counterAttackPower;//this is for enemies

    var names = {
        Kenobi: [150, 10, 9, false, 'assets/images/obi-wan.png'],
        Skywalker: [140, 15, 8, false, 'assets/images/luke.png'],
        Yoda: [100, 35, 10, false, 'assets/images/yoda.png'],
        Maul: [50, 5, 2, false, 'assets/images/maul.png']
    }

    function Characters() {
        $.each(names, function (key, value) {
            if (value[3] === false) {
                let createDivCharacter = $('<div class="col-md-2 customCharacters">')
                    .html('<figure>')
                    .html(`<img src="${value[4]}">`)
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
                let powerAttackSpan = $('<span style="display:none;" class="attckPower">')
                    .text(value[2])
                    .addClass('powerAttack');
                let health = $('<figcaption>')
                    .append(healthSpan)
                    .append(heart);
                let power = $('<figcaption>')
                    .append(powerSpan)
                    .append(fist);
                createDivCharacter.prepend(caption);
                createDivCharacter.append(health);
                createDivCharacter.append(power);
                createDivCharacter.append(powerAttackSpan);
                $('#characters').append(createDivCharacter);

                $(".characters").append(createDivCharacter);

            }
        })
    }
    Characters()

    $("#characters").on("click", ".character", function () {
        var $partType = $(this).closest('.customCharacters');
        characterYourName = $partType.find('.name').text();//saving user character name attachPower
        attachPower = parseInt($partType.find('.power').text());//saving user character power number
        healthPoint = parseInt($partType.find('.health').text());//saving user character healthPoint
        usercounterAttackPower = parseInt($partType.find('.attckPower').text());//saving user character attackPower

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
        characterDefender = $partType.find('.name').text();//savong enemy character
        defenderPower = parseInt($partType.find('.power').text());//saving enemy power
        defenderHealthPoint = parseInt($partType.find('.health').text());//saving enemy health
        counterAttackPower = parseInt($partType.find('.attckPower').text());//saving user character attackPower

        $('#defender').append($(this));
    });
    function attackReport(uC, uP, uH, ucap, dC, dP, dH, cap) {
        // console.log(uP + uH + ucap + dP + dH + cap)


        $("#userReport").text('Your Character ' + uC + ' Attacked Enemy for ' + ucap + ' damaged')
        $("#enemyReport").text(dC + ' Attacked you back for ' + cap + ' damaged')
        uH = uH - cap
        dH = dH - ucap
        ucap = ucap + ucap
        cap = cap + cap

        healthPoint = uH
        defenderHealthPoint = dH
        usercounterAttackPower = ucap
        counterAttackPower = cap
        console.log(defenderHealthPoint +" "+ usercounterAttackPower+" "+   counterAttackPower)
    }

    $("#attack").on("click", function () {
        // console.log(characterYourName)
        // console.log(attachPower)//user character attack power
        // console.log(healthPoint)//user character health Point
        // console.log(counterAttackPower)//user character Counter Attack Power
        // console.log(characterDefender)

        attackReport(characterYourName, attachPower, healthPoint, usercounterAttackPower,
            characterDefender, defenderPower, defenderHealthPoint, counterAttackPower)

    })



});