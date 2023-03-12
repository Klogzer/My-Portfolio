import React from "react";
import Button from "react-bootstrap/Button";
import { CTAData } from '../data/CTAData';

function CTAButtons() {
    return (
        <div className="cta-buttons">
            {CTAData.map((item, index) => {
                return (
                    <Button href={item.url} style={{backgroundColor:item.color}} className="cta-button border-0" target={"_blank"}>
                        {item.icon}
                        <span className="small">{item.name}</span>
                    </Button>
                );
            })}

        </div>
    );
};

export default CTAButtons;