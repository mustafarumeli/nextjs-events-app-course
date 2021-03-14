import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../dummy-data';
import EventContent from "../../components/event-detail/event-content";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
function SingleEventPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    if (!event) {
        return <p>No Event Found</p>
    }
    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}
export default SingleEventPage;