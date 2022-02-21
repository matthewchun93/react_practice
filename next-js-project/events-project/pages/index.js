import Link from "next/link";

// data
import { getFeaturedEvents } from "../dummy-data";

// components
import EventList from "../components/events/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
