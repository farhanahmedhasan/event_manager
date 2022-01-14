export const getAllEvents = async () => {
  const respnosne = await fetch('https://events-70ebd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json');
  const data = await respnosne.json();

  const allEvents = Object.keys(data).map((key) => {
    return { id: key, ...data[key] };
  });

  return allEvents;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};

export const getFilteredEvents = async (filteredData) => {
  const { year, month } = filteredData;

  const allEvents = await getAllEvents();

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
};
