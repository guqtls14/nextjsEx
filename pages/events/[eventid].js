import { Fragment } from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const item = getEventById(eventId);

  if (!item) {
    return <p>No event found!</p>;
  }
  return (
    <Fragment>
      <EventSummary title={item.title} />
      <EventLogistics
        date={item.date}
        address={item.location}
        image={item.image}
        imageAlt={item.title}
      />
      <EventContent>
        <p>{item.description}</p>
      </EventContent>
    </Fragment>
  );
}
