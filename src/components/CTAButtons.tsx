import Button from "react-bootstrap/Button";
import { CTAData } from '../data/ctaButtonData';
import { CTA } from '../Interfaces';

function CTAButtons() {
  return (
    <div className="cta-buttons">
      {CTAData.map(({ url, color, icon, name }: CTA, index: number) => (
        <Button
          key={index}
          href={url}
          style={{ backgroundColor: color }}
          className="cta-button border-0"
          target="_blank"
        >
          {icon}
          <span className="small">{name}</span>
        </Button>
      ))}
    </div>
  );
}



export default CTAButtons;
