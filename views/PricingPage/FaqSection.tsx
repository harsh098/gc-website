import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Where and when is the meetup happening?">
      January 20, 2024, at 415/2, 7th Floor, Motorola Excellence Centre, Mehrauli-Gurgaon Rd, DLF Colony, Sector 14, Gurugram, Haryana 122001.
      </Accordion>

      <Accordion title="Who can attend the meetup?">
      This meetup is open to everyone, and attendance is free for both students and working professionals.
      </Accordion>

      <Accordion title="What's the agenda or schedule for the meetup?">
      The Community Collaboration Meetup between GrowIn and CloudOps is centered around key objectives: learning, networking, and gaining insights from speakers.
      </Accordion>

      <Accordion title="Will there be any costs associated with attending?">
      It is completely free; there is no need to make any payment whatsoever.
      </Accordion>

      <Accordion title="Can I network or connect with others at the meetup?">
      This meetup is specifically dedicated to networking and mentorship. Feel free to connect with as many people as you'd like!
      </Accordion>

      <Accordion title="Are any travel facilities provided for this meetup?">
      We do not offer travel expenses or facilities.
      </Accordion>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
