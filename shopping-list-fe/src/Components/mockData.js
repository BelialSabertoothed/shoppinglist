const mockData = [
    {
      id: 1,
      name: 'Shopping List',
      archived: false,
      items: [
        { id: 1, text: 'Milk', completed: false },
        { id: 2, text: 'Bread', completed: true },
        { id: 3, text: 'Eggs', completed: false },
      ],
    },
    {
      id: 2,
      name: 'Work Tasks',
      archived: false,
      items: [
        { id: 4, text: 'Meeting with clients', completed: true },
        { id: 5, text: 'Submit project report', completed: false },
        { id: 6, text: 'Prepare presentation', completed: false },
      ],
    },
    {
      id: 3,
      name: 'Fitness Goals',
      archived: true,
      items: [
        { id: 7, text: 'Run 5 miles', completed: true },
        { id: 8, text: 'Weightlifting session', completed: true },
        { id: 9, text: 'Yoga class', completed: true },
        { id: 8, text: 'Weightlifting session', completed: true },
      ],
    },
    {
        id: 4,
        name: 'Home Chores',
        archived: false,
        items: [
          { id: 10, text: 'Clean the kitchen', completed: false },
          { id: 11, text: 'Vacuum the living room', completed: true },
          { id: 13, text: 'Read "The Great Gatsby"', completed: true },
          { id: 12, text: 'Water the plants', completed: false },
        ],
      },
      {
        id: 5,
        name: 'Book Reading List',
        archived: true,
        items: [
          { id: 13, text: 'Read "The Great Gatsby"', completed: true },
          { id: 14, text: 'Start "Sapiens"', completed: false },
          { id: 15, text: 'Finish "Atomic Habits"', completed: false },
          { id: 13, text: 'Read "The Great Gatsby"', completed: true },
        ],
      },
      {
        id: 6,
        name: 'Travel Bucket List',
        archived: false,
        items: [
          { id: 16, text: 'Visit Paris', completed: false },
          { id: 17, text: 'Explore Tokyo', completed: true },
          { id: 13, text: 'Read "The Great Gatsby"', completed: true },
          { id: 18, text: 'Relax in Bali', completed: false },
          { id: 18, text: 'Relax in Bali', completed: false },
        ],
      },
  ];
  
  export default mockData;