import Card from "../components/SkillsCard"

export default function About(props) {
    return (
        <div className="about">
            <div className="about--info">
                <h1 className="about--header">Hi, I'm Justin</h1>
                <p className="about--description">
                    I am proficient in HTML, CSS, JS, and React.
                    I currently work in apartment maintenance, I am hands-on, a problem solver, and I love helping others.
                    I graduated from Pymatuning Valley High School (Andover, OH) in 2017 and scored a (4) on the AP Calculus AB Exam.
                    Throughout my high school career, I often volunteered for Relay for Life and Wrestling events to assist with various activities (e.g. taking tickets, keeping score, and handing out water to name a few).
                    I also worked together with peers to compete in Junior Achievement tournaments throughout northeastern Ohio on behalf of PVHS, achieving a first place once.
                </p>
            </div>
            <div className="row" id="about--skills">
                <Card
                    title="Front-end Developer"
                    subtitle="I like to start from the ground up, but I'm not afraid to jump into the middle of a project."
                    languageBody="HTML, CSS, and JS"
                    toolBody="Bootstrap, React, and Github"
                />
            </div>
            <a href={require("../data/Justin-Perry.pdf")} download="Justin-Perry.pdf">
                <button className="btn btn-outline-info"><b>Download My Resume</b></button>
            </a>

        </div>

    )
}