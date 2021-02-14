import React from 'react';

import classes from './SelectSpecification.module.css';

import SpecificationCard from './SpecificationCard/SpecificationCard';

const selectSpecification = (props) => {
    const specifications = [...props.specifications];

    return(
        <div className={classes.SelectSpecification}>
            <p><strong>Select Specification:</strong></p>
            <div className={classes.Cards}>
                {
                    specifications.map((spec, i) => (
                        <SpecificationCard
                            fullSpec = {spec}
                            screenSize={spec.screenSize}
                            diskSize={spec.diskSize}
                            diskType={spec.diskType}
                            RAM={spec.RAM}
                            processorSpeed={spec.processorSpeed}
                            processorType={spec.processorType}
                            key={i}
                            change={props.change}
                        />
                    ))
                }
            </div>
        </div>
    );   
}

export default selectSpecification;