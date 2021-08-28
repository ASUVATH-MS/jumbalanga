let ques=
[
    {
        jumbled:"monter",
        correct:"mentor"
    },
    {
        jumbled:"lifaym",
        correct:"family"
    },
    {
        jumbled:"earntofon",
        correct:"afternoon"
    },
    {
        jumbled:"etmansonr",
        correct:"ornaments"
    },
    {
        jumbled:"yrutke",
        correct:"turkey"
    },

]

let currentWord=0;
let score=0;

function displayWord()
{
    document.querySelector(".ques").innerText = 
    ques[currentWord].jumbled;

    document.querySelector(".score").innerText="SCORE :"+score;
}


displayWord();


function checkAnswer()
{
    
            let answer=document.querySelector("#inp").value;

            if(answer.toLowerCase()===ques[currentWord].correct.toLowerCase()){

                score++;

            }

            if(currentWord==ques.length-1){

                let msg="";

                if(score===5){
                    msg="Amazing game "+score;
                }
                else if(score===4){
                    msg="Good Game "+score
                }
                else if(score<4){
                    msg="Good Try "+score
                }

                alert(msg);

                location.reload();
            }
            else{
                currentWord++;
                displayWord();
                document.querySelector("#inp").value="";
            }

            

    
}