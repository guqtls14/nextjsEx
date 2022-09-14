import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

export default function AllEventPage() {
  const events = getAllEvents();
  // filter된 라우터로 이동
  const router = useRouter();

  function filterTime(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }
  return (
    <div>
      <EventsSearch onSearch={filterTime} />
      <EventList items={events} />
    </div>
  );
}
