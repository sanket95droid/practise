const PLAYER_TOKEN = 'X';
const COMPUTER_TOKEN= 'O';

$(document).ready( ()=>{
    const grid = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ];

    function cmp(){
        for(let i=0; i<3; i++)
        {
            for(let j=0; j<3; j++)
            {
                if(grid[i][j] == ' ')
                {
                    return {
                        i: i,
                        j: j
                    };
                }
            }
        }
    }

    $('.col').click(function(){
        $(this).html(PLAYER_TOKEN);

        const move = cmp();
        $('.col['+move.i+']['+move.j+']').html(COMPUTER_TOKEN);
    });

    $('.pushable').click(()=>{
        for(let i=0; i<3; i++)
        {
            for(let j=0; j<3; j++)
            {
                $('.col').html(' ');
            }
        }
    })

});