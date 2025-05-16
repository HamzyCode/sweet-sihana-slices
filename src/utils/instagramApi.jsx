
// Re-export from the new modular structure
// This file exists for backwards compatibility
import useInstagramFeed, { useFeaturedInstagramPosts } from './instagram/index.jsx';

export { useFeaturedInstagramPosts };
export default useInstagramFeed;
