import Card from "./Card";
import Item from "./Item";
import Step from "./Step";
import Row from "./Row";
import PersonPortal from "../assets/personalPortal.svg";
import utilityArrow from "../assets/utility-arrow.svg";
import utilityComputer from "../assets/utility-computer.svg";
import utilityCircleOutline from "../assets/utility-add-circle-outline.svg";

export default function Accordion() {
  return (
    <section id="accordion" className="flex flex-dir-col gap-24">
      <div className="flex align-center gap-24">
        <img src={PersonPortal} alt="" />
        <h3>Attendee</h3>
      </div>
      <Step stepNum="1" title="Base settings">
        <Card>
          <Row layout="grid-col-3-221">
            <Item
              title="General"
              subcopy="Define Attendee types & attributes"
            />
            <Item
              title="Title"
              subcopy="Description that explains the value goes here. Description that explains the value goes here. "
            />
            <Item
              title="Title"
              subcopy="Description that explains the value goes here. Description that explains the value goes here. "
            />
          </Row>
        </Card>
      </Step>
      <Step stepNum="2" title="Build registration workflows.">
        <Row layout="grid-col-3">
          <Card>
            <Item
              imgSrc={utilityArrow}
              title="Attendee Registration"
              subcopy="Start by creating a general registration workflow"
            />
          </Card>
          <Card>
            <Item
              imgSrc={utilityArrow}
              title="Attendee Registration"
              subcopy="Start by creating a general registration workflow"
            />
          </Card>
          <Card>
            <Item
              imgSrc={utilityArrow}
              title="Attendee Registration"
              subcopy="Start by creating a general registration workflow"
            />
          </Card>
          <Card>
            <Item
              imgSrc={utilityCircleOutline}
              subcopy="Add Registration Workflow"
            />
          </Card>
        </Row>
      </Step>
      <Step stepNum="3" title="Design post-registration experiences.">
        <div className="row grid grid-col-3">
          <Card>
            <Item
              imgSrc={utilityComputer}
              title="Attendee Portal"
              subcopy="Manage the portal that attendees will see after they've register for your event."
            />
          </Card>
        </div>
      </Step>
    </section>
  );
}
