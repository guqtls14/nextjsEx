import Button from "../ui/button";
import classes from "./events-search.module.css";
import { useRef } from "react";

export default function EventSearch(props) {
  const selectYear = useRef();
  const selectMonth = useRef();

  // onsubmit event
  function submitHandler(e) {
    e.preventDefault();

    const selectedYear = selectYear.current.value;
    const selectedMonth = selectMonth.current.value;

    // 동적 라우팅위한 이벤트
    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">년</label>
          <select id="year" ref={selectYear}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">달</label>
          <select id="month" ref={selectMonth}>
            <option value="1">1월</option>
            <option value="2">2월</option>
            <option value="3">3월</option>
            <option value="4">4월</option>
            <option value="5">5월</option>
            <option value="6">6월</option>
            <option value="7">7월</option>
            <option value="8">8월</option>
            <option value="9">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
}
