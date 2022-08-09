import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'

class Cardlist extends Component {
    render() {
        const { entities } = this.props;

        return (
            <div className='card-list'>
                {entities.map((entity) => {
                    const { name, email, id } = entity;
                    return(
                        <div className='card-container' key={entity.id}>
                            <img
                                alt={`entity ${name}`}
                                src={`https://robohash.org/${id}?set=set1&size=180x180`}
                            />
                            <h2>{name}</h2>
                            <p>{email}</p>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cardlist;