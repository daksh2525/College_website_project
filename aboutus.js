
// Sample event data with content and image URLs
var eventsData = [
    {
      title: 'Music Festival',
      description: 'Join us for a night of live music and entertainment. Don\'t miss this unforgettable experience!',
      date: '2023-10-15',
      location: 'Outdoor Stage',
      imageUrl: 'assets/img/Yellow Music Festival Instagram Post.jpg'
    },
    {
      title: 'Fresher 2k23',
      description: 'Explore the latest trends in technology and connect with industry experts. A must-attend event for tech enthusiasts!',
      date: '2023-11-09',
      location: 'Main Ground',
      imageUrl: 'assets/img/event1.jpg.jpeg'
    },
    {
        title: 'Sports Events',
        description: 'Explore the latest trends in technology and connect with industry experts. A must-attend event for tech enthusiasts!',
        date: '2023-9-13',
        location: 'Main Ground',
        imageUrl: 'assets/img/54LLHNOIUFPEDGQDL7UYNURMNY.jpg'
        
      },
      {
        title: 'Hackerthon',
        description: 'Explore the latest trends in technology and connect with industry experts. A must-attend event for tech enthusiasts!',
        date: '2024-01-01',
        location: 'Tech Hub',
        imageUrl: 'assets/img/Smart_India_Hackathon_2022.jpg',
    
      },
    {
        title: 'Diwali Events',
        description: 'Explore the latest trends in technology and connect with industry experts. A must-attend event for tech enthusiasts!',
        date: '2023-10-10',
        location: 'Main Ground',
        imageUrl: 'assets/img/eded6799-af12-4e32-bc62-3c611b3507f4.sized-1000x1000.jpg'
      },
      {
        
        title: '9th Smarth India Expo',
        description: 'Explore the latest trends in technology and connect with industry experts. A must-attend event for tech enthusiasts!',
        date: '2024-01-19',
        location: 'New Delhi',
        imageUrl: 'assets/img/WhatsApp Image 2024-01-19 at 4.30.02 PM.jpeg'
        
      },
    // Add more events as needed
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
    var eventsContainer = document.getElementById('eventsContainer');
  
    // Create event cards dynamically
    eventsData.forEach(function (event, index) {
      var eventCard = document.createElement('div');
      eventCard.classList.add('event-card');
      eventCard.innerHTML = `
        <img src="${event.imageUrl}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p>${event.date}</p>
        <button onclick="openModal(${index})">Details</button>
      `;
      eventsContainer.appendChild(eventCard);
    });
  });
  function openModal(index) {
    var event = eventsData[index];
    var modal = document.getElementById('eventModal');
    document.getElementById('modalTitle').innerText = event.title;
    document.getElementById('modalDescription').innerText = event.description;
    document.getElementById('modalDate').innerText = event.date;
    document.getElementById('modalLocation').innerText = event.location;
    modal.style.display = 'block';
  }
  
  function closeModal() {
    var modal = document.getElementById('eventModal');
    modal.style.display = 'none';
  }
  
  // Close modal if the user clicks outside of it
  window.onclick = function (event) {
    var modal = document.getElementById('eventModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  