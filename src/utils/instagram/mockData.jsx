
// Mock Instagram data for development and fallback purposes

// Function to create dates in the past
const daysAgo = (days) => {
  const now = new Date();
  const date = new Date(now);
  date.setDate(date.getDate() - days);
  return date.toISOString();
};

// Function to create hours ago
const hoursAgo = (hours) => {
  const now = new Date();
  const date = new Date(now);
  date.setHours(date.getHours() - hours);
  return date.toISOString();
};

// Mock data generator function - will be used as fallback if API fails or during development
export const getMockInstagramPosts = () => {
  return [
    {
      id: 1,
      caption: 'Chocolate Delight - Rich chocolate cake with creamy ganache and chocolate shavings.',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 253,
      comments: 45,
      username: 'sihanas_cake',
      timestamp: daysAgo(2),
      category: 'chocolate',
      postedDate: '2 days ago'
    },
    {
      id: 2,
      caption: 'Wedding Special - Elegant three-tier cake for the perfect celebration.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 456,
      comments: 67,
      username: 'sihanas_cake',
      timestamp: daysAgo(7),
      category: 'wedding',
      postedDate: '1 week ago'
    },
    {
      id: 3,
      caption: 'Strawberry Dream - Light vanilla sponge with fresh strawberries and cream.',
      image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 378,
      comments: 42,
      username: 'sihanas_cake',
      timestamp: daysAgo(3),
      category: 'fruit',
      postedDate: '3 days ago'
    },
    {
      id: 4,
      caption: 'Birthday Celebration - Colorful sprinkle cake perfect for any birthday party.',
      image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 324,
      comments: 38,
      username: 'sihanas_cake',
      timestamp: daysAgo(5),
      category: 'birthday',
      postedDate: '5 days ago'
    },
    {
      id: 5,
      caption: 'Vanilla Bliss - Classic vanilla cake with buttercream frosting and sprinkles.',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 301,
      comments: 29,
      username: 'sihanas_cake',
      timestamp: daysAgo(1),
      category: 'vanilla',
      postedDate: '1 day ago'
    },
    {
      id: 6,
      caption: 'Red Velvet - Classic red velvet with cream cheese frosting.',
      image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 489,
      comments: 53,
      username: 'sihanas_cake',
      timestamp: daysAgo(6),
      category: 'specialty',
      postedDate: '6 days ago'
    },
    {
      id: 7,
      caption: 'Cupcake Collection - Perfect mini treats for any occasion.',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 367,
      comments: 41,
      username: 'sihanas_cake',
      timestamp: daysAgo(4),
      category: 'cupcakes',
      postedDate: '4 days ago'
    },
    {
      id: 8,
      caption: 'Anniversary Special - Elegant cake to celebrate your special day.',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 412,
      comments: 47,
      username: 'sihanas_cake',
      timestamp: daysAgo(14),
      category: 'anniversary',
      postedDate: '2 weeks ago'
    },
    {
      id: 9,
      caption: 'Special holiday-themed cake - just baked this morning!',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 127,
      comments: 18,
      username: 'sihanas_cake',
      timestamp: hoursAgo(5),
      category: 'specialty',
      postedDate: '5 hours ago'
    },
    {
      id: 10,
      caption: 'Just finished this mint chocolate masterpiece!',
      image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      likes: 89,
      comments: 12,
      username: 'sihanas_cake',
      timestamp: hoursAgo(2),
      category: 'chocolate',
      postedDate: '2 hours ago'
    }
  ];
};
