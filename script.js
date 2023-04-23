
        const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const newQ = document.getElementById("newQ");
        const tweetMe = document.getElementById("tweetMe");
        
        let realData = "";
        let quotesData = "";

        const tweetNow  = () => {
         let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} +By+ ${quotesData.author}`;
            window.open(tweetPost);
        }

        const getNewQuotes = () => {
            let rnum = Math.floor(Math.random() * 1600);
            // console.log(rnum);
            // console.log(realData[rnum].author);
            quotesData = realData[rnum];
            quotes.innerText = `${quotesData.text}`;
            quotesData.author == null 
            ? (author.innerText = "Unknown")
            : (author.innerText = `${quotesData.author}`);
        };

        const getQuotes = async () => {
        const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
                // console.log(realData.length);
                // console.log(realData[100].text);
                // console.log(realData[100].author);
            }catch (error) {}
        };

        tweetMe.addEventListener("click", tweetNow);
        newQ.addEventListener("click", getNewQuotes);
        getQuotes();