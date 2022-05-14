import {Link} from "react-router-dom"
export default function Projects(props) {
    return (
        <div className="projects">
            <h1 className="projects__header">Projects</h1>
            <h3>Here are some of my projects:</h3>
            <Link to="/todo" className="projects__todo"><span>Simple To-Do</span></Link>
            <Link to="/tictactoe" className="projects__todo"><span>Tic Tac Toe</span></Link>
            <Link to="/weather" className="projects__todo"><span>Weather App</span></Link>
        </div>
    )
}