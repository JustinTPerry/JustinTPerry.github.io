import PropTypes from 'prop-types'
export default function SkillsCard({title, subtitle, languageBody, toolBody}) {
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle">{subtitle}</h6>
                    <hr></hr>
                    <h5 className="card-title">Languages:</h5>
                    <p className="card-text">{languageBody}</p>
                    <h5 className="card-title">Tools I Use:</h5>
                    <p className="card-text">{toolBody}</p>
                </div>
            </div>
        </div>
    )
}

SkillsCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    languageBody: PropTypes.string,
    toolBody: PropTypes.string,
}