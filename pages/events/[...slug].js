import { useRouter } from "next/router";
import { Fragment } from "react";
// filter
import { getFilteredEvents } from "../../dummy-data";
// item list
import EventList from "../../components/events/event-list";
// back button
import Button from "../../components/ui/button";

// Error
import ErrorAlert from "../../components/ui/error-alert";
export default function FilteredEventsPage() {
  const router = useRouter();
  console.log("1", router);
  console.log("2", router.query.slug);
  const filterData = router.query.slug;

  // 초기랜더링시 filterdata없음
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filterData;
  const numYear = +year;
  const numMonth = +month;
  // url 검사
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>조건에 맞는 값이 없습니다</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const Data = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  // 조건에 맞는 값이 없을때
  if (!Data || Data.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>조건에 맞는 값이 없습니다</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <div>
      <EventList items={Data} />
    </div>
  );
}
