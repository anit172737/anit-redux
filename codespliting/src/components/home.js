import React from 'react';

const Home = (props) =>{
        return(
            <dl>
                {props.items.map((item)=> {
                    return(
                        <React.Fragment key={item.id}>
                            <dt>
                                <dd>{item.firstName}</dd>
                            </dt>
                            <dt>
                                <dd>{item.lastName}</dd>
                            </dt>

                        </React.Fragment>
                    )
                })}
                
            </dl>
        )
}

             

export default Home;