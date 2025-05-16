
// Instagram API module entry point
import { useInstagramFeed } from './useInstagramFeed.jsx';
import { useFeaturedInstagramPosts } from './useFeaturedPosts.jsx';
import { formatPostedDate } from './formatters.jsx';

export {
  useInstagramFeed,
  useFeaturedInstagramPosts,
  formatPostedDate
};

export default useInstagramFeed;
