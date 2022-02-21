import React, { Fragment } from "react";
import { useRouter } from "next/router";

// data
import { getAllEvents } from "../../dummy-data";

// components
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  console.log(router.query);

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
