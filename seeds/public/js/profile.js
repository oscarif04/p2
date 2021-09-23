const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const Event_Place = document.querySelector('#project-EventPlace').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  const Day_start_event = document.querySelector('#project-Day-event-start').value;
  const Day_event_end = document.querySelector('#project-Day-event-end').value;
  // const Time_event_start = document.querySelector('#project-Time-event-start').value;
  // const Time_event_end = document.querySelector('#project-Time-event-end').value;


  if (name && Event_Place && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, Event_Place, description, Day_start_event, Day_event_end }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create event');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete event');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
