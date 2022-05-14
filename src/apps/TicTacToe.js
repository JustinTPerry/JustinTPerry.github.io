import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TicTacToe() {
    const [squaresArray, setSquaresArray] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}])
    const [turn, setTurn] = useState(true)
    const [hasWon, setHasWon] = useState(false)
    const [winnerText, setWinnerText] = useState("")

    function toggleState(square, i) {
        if (square.state === "none") {
            setSquaresArray(prevArray => {
                return (
                    prevArray.map((s) => {
                        if (s.id === square.id) {
                            return ({
                                state: turn ? "X" : "O" ,
                                id: square.id
                            })
                        }
                        return(s)
                    })
                )
            })
            setTurn(prevTurn => !prevTurn)
        }
    }

    function stateDisplay(square) {
        if (square.state === "X") {
            return (<span>{"X"}</span>)
        } else if (square.state === "O") {
            return(<span>{"O"}</span>)
        } else {
            return("")
        }
    }

    function checkSquares(firstState, secondState, thirdState) {
        if (firstState === secondState && firstState === thirdState && secondState === thirdState) {
            if (firstState !== "none" && secondState !== "none" && thirdState !== "none") {
                if (firstState === "X") {
                    setWinnerText("Player 1 has won!")
                } else {
                    setWinnerText("Player 2 has won!")
                }
                setHasWon(true)
            }
        }
    }

    function resetGame() {
        setHasWon(false)
        let tempArray = []
        for (let i = 0; i < 9; i++) {
            tempArray.push({ state: "none", id: i })
        }
        setSquaresArray(tempArray)
        setWinnerText("")
    }

    useEffect(() => {
        let tempArray = []
        for (let i = 0; i < 9; i++) {
            tempArray.push({ state: "none", id: i })
        }
        setSquaresArray(tempArray)
        return () => {
           
        }

    }, [])

    useEffect(() => {
        if (squaresArray[0].state) {
            checkSquares(squaresArray[0].state, squaresArray[1].state, squaresArray[2].state)
            checkSquares(squaresArray[3].state, squaresArray[4].state, squaresArray[5].state)
            checkSquares(squaresArray[6].state, squaresArray[7].state, squaresArray[8].state)
            checkSquares(squaresArray[0].state, squaresArray[3].state, squaresArray[6].state)
            checkSquares(squaresArray[1].state, squaresArray[4].state, squaresArray[7].state)
            checkSquares(squaresArray[2].state, squaresArray[5].state, squaresArray[8].state)
            checkSquares(squaresArray[0].state, squaresArray[4].state, squaresArray[8].state)
            checkSquares(squaresArray[2].state, squaresArray[4].state, squaresArray[6].state)
        }
        return () => {
            
        }
    }, [squaresArray])

    const squareElements = squaresArray.map((square) => {
        return (
            <div className={(hasWon) ? 'tictactoe--square is-disabled' : 'tictactoe--square'} key={uuidv4()} onClick={() => toggleState(square)}>
                {stateDisplay(square)}
            </div>
        )
    })

    console.log(squaresArray)
    return (
        <div className="tictactoe">
            <h1>Tic Tac Toe</h1>
            <div className="tictactoe--container">
                {squareElements}
            </div>
            {hasWon && <h5 className="tictactoe--winner">{winnerText}</h5>}
            <button className="tictactoe--reset" onClick={resetGame}>
                <span>Reset Game</span>
            </button>
        </div>
    )
}