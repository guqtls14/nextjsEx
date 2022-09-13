import Link from "next/link";

import classes from "./event-item.module.css";
// button
import Button from "../ui/button";
// icon
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventItem(props) {
  // destructing 으로 데이터추출
  const { title, image, date, location, id } = props;

  //   date변환, https://kimyang-sun.tistory.com/entry/new-Date-toLocaleDateString-%ED%98%84%EC%9E%AC-%EB%82%A0%EC%A7%9C%EC%8B%9C%EA%B0%84-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0-JavaScript
  const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    month: "numeric",
  });
  //   address
  const formattedAddress = location.replace(", ", "\n");
  //   link
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="title" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
