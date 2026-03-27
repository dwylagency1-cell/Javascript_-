const score = JSON.parse(localStorage.getItem('score')) || {
            win: 0,
            loose: 0,
            draw: 0

            
        }; 

        document.querySelector('.js-score').innerHTML = `Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`;
        
      
  



 
function playgame(playermove) {
            rps();
            if (playermove === 'Scissor') {
                
                if (computerMove === 'Rock') {
                    score.loose = score.loose + 1
                    alert(`computer: Paper , you: ${playermove}; you won!
                    Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                    document.querySelector('.js-result').innerHTML = 'you lose'
                    
                    

                    }
                else if (computerMove === 'Paper') {
                    score.win = score.win + 1
                    alert(`computer: Paper , you: ${playermove}; you won!
                    Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                    document.querySelector('.js-result').innerHTML = 'you won'
                    


                    }
                else if (computerMove === 'Scissor') {
                    score.draw = score.draw + 1
                    alert(`computer: Scissor , you: ${playermove}; Draw!
                    Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                    document.querySelector('.js-result').innerHTML = 'Draw'
                    
                    }
                    
                }
                
                
            else if (playermove === 'Rock') {
                if (computerMove === 'Rock') {
                    score.draw = score.draw + 1
                    alert(`computer: Rock , you: Rock; Draw!
                    Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                    document.querySelector('.js-result').innerHTML = 'Draw'
                    
                    }
                else if (computerMove === 'Paper') {
                    score.loose = score.loose + 1
                    alert(`computer: Paper , you: Rock; you lose!
                    Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                    document.querySelector('.js-result').innerHTML = 'you lose'
                    

                    }
                else if (computerMove === 'Scissor') {
                    score.win = score.win + 1
                    alert(`computer: Scissor , you: Rock; you won!
                    Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                    document.querySelector('.js-result').innerHTML = 'you won'
                    
                    }
            }
            else if (playermove === 'Paper') {
                    if (computerMove === 'Rock') {
                        score.win = score.win + 1
                        alert(`computer: Rock , you: ${playermove}; you won!
                        Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                        document.querySelector('.js-result').innerHTML = 'you won'
                        
                        }
                    else if (computerMove === 'Paper') {
                        score.draw = score.draw + 1
                        alert(`computer: Paper , you: ${playermove};Draw!
                        Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                        document.querySelector('.js-result').innerHTML = 'Draw'
                        

                        }
                    else if (computerMove === 'Scissor') {
                        score.loose = score.loose + 1
                        alert(`computer: Scissor , you: ${playermove}; you lose!
                         Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`);
                         document.querySelector('.js-result').innerHTML = 'you lose'
                        
                        }

            }
            localStorage.setItem('score' , JSON.stringify(score));


            document.querySelector('.js-score').innerHTML = `Win: ${score.win}, loose: ${score.loose}, draw: ${score.draw}`;

            }
            
            



        let computerMove = '';
        function rps() {
            let random = Math.random();
            
            if (random >= 0 && random < 1/3) {
                computerMove = 'Rock';
            }
            else if (random >= 1/3 && random < 2/3) {
                computerMove = 'Paper';
            }
            else if (random >= 2/3 && random < 1 ) {
                computerMove = 'Scissor';
            }

        }

