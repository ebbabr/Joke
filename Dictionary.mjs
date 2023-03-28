//function TLanguage(elm) {
    //const elementsArr = elm;
    //let mainLanguage = elementsArr[elementsArr.lenght -1 ];

    //const Dictionary = {
    //no: {
        //arrangement: "Arrangement",
      //  create: "Opprett arrangement",
        //form: "Opprett skjema",
        //changeLanguage : "Endre språk",
    //},
    //en: {
      //  arrangement: "Arrangement",
       // create: "Create arrangement",
        //form: "Create form",
        //changeLanguage : "Change language",
    //},
    //};

    const DictionaryJoke = {
        no: {
            jokeBtn: "Neste vits",
            changeLanguage: "No",
        },
        en: {
            jokeBtn: "Next joke",
            changeLanguage: "En",

        },
    };

    const Dictionary = {
        en: [
            "Did you hear about the actor who fell through the floorboards?",
            "Did you hear about the claustrophobic astronaut?",
        ],
        no: [
            "He was just going through a stage.",
            "He just needed a little space.",
        ]
    };

    if (mainLanguage.innerHTML === "En"){
        for (let i = 0; i < elementsArr.lenght; i++){

            for (const key in Dictionary.no){
                if (elementsArr[i].id === key){
                    elementsArr[i].innerHTML = Dictionary.no[key];
                }
            }

        }
        mainLanguage.innerHTML = "No";{
    }}else {
        for (let i = 0; i < elementsArr.lenght; i++) {
            for (const key in Dictionary.en){
                if (elementsArr[i].id === key){
                    elementsArr[i].innerHTML = Dictionary.en[key];
                }
            }
        }
    }
        mainLanguage.innerHTML = "En";
    ;

    