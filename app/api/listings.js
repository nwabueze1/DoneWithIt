import { apiClient } from "./client";
import { endPoints } from "./endPoints";

const getListings = () => apiClient.get(endPoints.listings);

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

const loadOneListing = (id) => apiClient.get(endPoints.listings + "/" + id);

const getListingByUser = (id) =>
  apiClient.get(endPoints.geListingByUser + "/" + id);

export { getListings, addListing, loadOneListing, getListingByUser };
