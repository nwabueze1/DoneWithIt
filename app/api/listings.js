import { apiClient } from "./client";
import { endPoints } from "./endPoints";

const getListings = () => apiClient.get(endPoints.listings);

// title: "",
// description: "",
// category: "",
// price: "",
// images: [],
const addListing = (listing) => {
  const apiListing = {
    title: listing.title,
    description: listing.description,
    categoryId: listing.category._id,
    price: listing.price,
    userId: listing.userId,
    location: listing.location,
    images: [
      "https://picsum.photos/600/300?date=" + new Date().toLocaleString(),
      "https://picsum.photos/600/300?date=" + new Date().toLocaleString(),
      "https://picsum.photos/600/300?date=" + new Date().toLocaleString(),
    ],
  };

  return apiClient.post(endPoints.listings, apiListing);
};

export { getListings, addListing };
