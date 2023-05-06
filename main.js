    // MACROSTRUTTURA

    // INSERISCO IMMAGINI IN HTML
        // INPUT
        const myArr = [
            "01.webp",
            "02.webp",
            "03.webp",
            "04.webp",
            "05.webp"
        ];
        console.log(myArr);

        // creazione variabile container in cui andranno le immagini
        const itemsContainer = document.getElementById("itemsContainer");



        for (let i = 0; i<myArr.length; i++) {
            // const item = myArr[i];
            // console.log(item)

            const divElement = `<div class="item">
            <img src="img/0${i+1}.webp" alt="">
            </div>`;
            // const divElement = document.createElement("div");
            // divElement.innerHTML = `<img src="img/${item}">`
            // console.log(divElement);

            itemsContainer.innerHTML += divElement;
            // itemsContainer.append(divElement)
        };

        // SELEZIONIAMO IMMAGINE 0 PER DARE CLASSE ACTIVE   
        let imagePosition = 0;
        let itemNodeList = document.querySelectorAll("#itemsContainer .item");
        console.log(itemNodeList);
        // questa è l'immagine attiva, che cambia dopo i click
        itemNodeList[imagePosition].classList.add("active");

 

        // QUANDO CLICCO AVANTI
        const btnNext = document.getElementById("btnNext");
        btnNext.addEventListener("click",
            function() 
            {
                itemNodeList[imagePosition].classList.remove("active");

                if (imagePosition == myArr.length-1) {
                imagePosition=-1
                }

                imagePosition++;

                itemNodeList[imagePosition].classList.add("active");
                console.log(imagePosition);
            }
        );

        // QUANDO CLICCO INDIETRO
        const btnPrevious = document.getElementById("btnPrevious");
        btnPrevious.addEventListener("click",
            function() 
            {

                itemNodeList[imagePosition].classList.remove("active");

                if (imagePosition == 0) {
                imagePosition == myArr.length;
                }

                imagePosition= imagePosition-1;

                itemNodeList[imagePosition].classList.add("active");
                console.log(imagePosition);
            }
        );

     